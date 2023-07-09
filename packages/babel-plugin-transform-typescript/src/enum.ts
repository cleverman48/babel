import { template, types as t } from "@babel/core";
import type { NodePath } from "@babel/traverse";
import assert from "assert";
import annotateAsPure from "@babel/helper-annotate-as-pure";

type t = typeof t;

const ENUMS = new WeakMap<t.Identifier, PreviousEnumMembers>();

const buildEnumWrapper = template.expression(
  `
    (function (ID) {
      ASSIGNMENTS;
      return ID;
    })(INIT)
  `,
);

export default function transpileEnum(
  path: NodePath<t.TSEnumDeclaration>,
  t: t,
) {
  const { node, parentPath } = path;

  if (node.declare) {
    path.remove();
    return;
  }

  const name = node.id.name;
  const { fill, data, isPure } = enumFill(path, t, node.id);

  switch (parentPath.type) {
    case "BlockStatement":
    case "ExportNamedDeclaration":
    case "Program": {
      // todo: Consider exclude program with import/export
      // && !path.parent.body.some(n => t.isImportDeclaration(n) || t.isExportDeclaration(n));
      const isGlobal = t.isProgram(path.parent);
      const isSeen = seen(parentPath);

      let init: t.Expression = t.objectExpression([]);
      if (isSeen || isGlobal) {
        init = t.logicalExpression("||", t.cloneNode(fill.ID), init);
      }
      const enumIIFE = buildEnumWrapper({ ...fill, INIT: init });
      if (isPure) annotateAsPure(enumIIFE);

      if (isSeen) {
        const toReplace = parentPath.isExportDeclaration() ? parentPath : path;
        toReplace.replaceWith(
          t.expressionStatement(
            t.assignmentExpression("=", t.cloneNode(node.id), enumIIFE),
          ),
        );
      } else {
        path.scope.registerDeclaration(
          path.replaceWith(
            t.variableDeclaration(isGlobal ? "var" : "let", [
              t.variableDeclarator(node.id, enumIIFE),
            ]),
          )[0],
        );
      }
      ENUMS.set(path.scope.getBindingIdentifier(name), data);
      break;
    }

    default:
      throw new Error(`Unexpected enum parent '${path.parent.type}`);
  }

  function seen(parentPath: NodePath<t.Node>): boolean {
    if (parentPath.isExportDeclaration()) {
      return seen(parentPath.parentPath);
    }

    if (parentPath.getData(name)) {
      return true;
    } else {
      parentPath.setData(name, true);
      return false;
    }
  }
}

const buildStringAssignment = template(`
  ENUM["NAME"] = VALUE;
`);

const buildNumericAssignment = template(`
  ENUM[ENUM["NAME"] = VALUE] = "NAME";
`);

const buildEnumMember = (isString: boolean, options: Record<string, unknown>) =>
  (isString ? buildStringAssignment : buildNumericAssignment)(options);

/**
 * Generates the statement that fills in the variable declared by the enum.
 * `(function (E) { ... assignments ... })(E || (E = {}));`
 */
function enumFill(path: NodePath<t.TSEnumDeclaration>, t: t, id: t.Identifier) {
  const { enumValues: x, data, isPure } = translateEnumValues(path, t);
  const assignments = x.map(([memberName, memberValue]) =>
    buildEnumMember(t.isStringLiteral(memberValue), {
      ENUM: t.cloneNode(id),
      NAME: memberName,
      VALUE: memberValue,
    }),
  );

  return {
    fill: {
      ID: t.cloneNode(id),
      ASSIGNMENTS: assignments,
    },
    data,
    isPure,
  };
}

/**
 * Maps the name of an enum member to its value.
 * We keep track of the previous enum members so you can write code like:
 *   enum E {
 *     X = 1 << 0,
 *     Y = 1 << 1,
 *     Z = X | Y,
 *   }
 */
type PreviousEnumMembers = Map<string, number | string>;

type EnumSelfReferenceVisitorState = {
  seen: PreviousEnumMembers;
  path: NodePath<t.TSEnumDeclaration>;
  t: t;
};

function ReferencedIdentifier(
  expr: NodePath<t.Identifier>,
  state: EnumSelfReferenceVisitorState,
) {
  const { seen, path, t } = state;
  const name = expr.node.name;
  if (seen.has(name) && !expr.scope.hasOwnBinding(name)) {
    expr.replaceWith(
      t.memberExpression(t.cloneNode(path.node.id), t.cloneNode(expr.node)),
    );
    expr.skip();
  }
}

const enumSelfReferenceVisitor = {
  ReferencedIdentifier,
};

export function translateEnumValues(path: NodePath<t.TSEnumDeclaration>, t: t) {
  const seen: PreviousEnumMembers = new Map();
  // Start at -1 so the first enum member is its increment, 0.
  let constValue: number | string | undefined = -1;
  let lastName: string;
  let isPure = true;

  const enumValues: Array<[name: string, value: t.Expression]> = path
    .get("members")
    .map(memberPath => {
      const member = memberPath.node;
      const name = t.isIdentifier(member.id) ? member.id.name : member.id.value;
      const initializerPath = memberPath.get("initializer");
      const initializer = member.initializer;
      let value: t.Expression;
      if (initializer) {
        constValue = computeConstantValue(initializerPath, seen);
        if (constValue !== undefined) {
          seen.set(name, constValue);
          if (typeof constValue === "number") {
            value = t.numericLiteral(constValue);
          } else {
            assert(typeof constValue === "string");
            value = t.stringLiteral(constValue);
          }
        } else {
          isPure &&= initializerPath.isPure();

          if (initializerPath.isReferencedIdentifier()) {
            ReferencedIdentifier(initializerPath, {
              t,
              seen,
              path,
            });
          } else {
            initializerPath.traverse(enumSelfReferenceVisitor, {
              t,
              seen,
              path,
            });
          }

          value = initializerPath.node;
          seen.set(name, undefined);
        }
      } else if (typeof constValue === "number") {
        constValue += 1;
        value = t.numericLiteral(constValue);
        seen.set(name, constValue);
      } else if (typeof constValue === "string") {
        throw path.buildCodeFrameError("Enum member must have initializer.");
      } else {
        // create dynamic initializer: 1 + ENUM["PREVIOUS"]
        const lastRef = t.memberExpression(
          t.cloneNode(path.node.id),
          t.stringLiteral(lastName),
          true,
        );
        value = t.binaryExpression("+", t.numericLiteral(1), lastRef);
        seen.set(name, undefined);
      }

      lastName = name;
      return [name, value];
    });

  return {
    isPure,
    data: seen,
    enumValues,
  };
}

// Based on the TypeScript repository's `computeConstantValue` in `checker.ts`.
function computeConstantValue(
  path: NodePath,
  prevMembers?: PreviousEnumMembers,
  seen: Set<t.Identifier> = new Set(),
): number | string | undefined {
  return evaluate(path);

  function evaluate(path: NodePath): number | string | undefined {
    const expr = path.node;
    switch (expr.type) {
      case "MemberExpression":
        return evaluateRef(path, prevMembers, seen);
      case "StringLiteral":
        return expr.value;
      case "UnaryExpression":
        return evalUnaryExpression(path as NodePath<t.UnaryExpression>);
      case "BinaryExpression":
        return evalBinaryExpression(path as NodePath<t.BinaryExpression>);
      case "NumericLiteral":
        return expr.value;
      case "ParenthesizedExpression":
        return evaluate(path.get("expression"));
      case "Identifier":
        return evaluateRef(path, prevMembers, seen);
      case "TemplateLiteral": {
        if (expr.quasis.length === 1) {
          return expr.quasis[0].value.cooked;
        }

        const paths = (path as NodePath<t.TemplateLiteral>).get("expressions");
        const quasis = expr.quasis;
        let str = "";

        for (let i = 0; i < quasis.length; i++) {
          str += quasis[i].value.cooked;

          if (i + 1 < quasis.length) {
            const value = evaluateRef(paths[i], prevMembers, seen);
            if (value === undefined) return undefined;
            str += value;
          }
        }
        return str;
      }
      default:
        return undefined;
    }
  }

  function evaluateRef(
    path: NodePath,
    prevMembers: PreviousEnumMembers,
    seen: Set<t.Identifier>,
  ): number | string | undefined {
    if (path.isMemberExpression()) {
      const expr = path.node;

      const obj = expr.object;
      const prop = expr.property;
      if (
        !t.isIdentifier(obj) ||
        (expr.computed ? !t.isStringLiteral(prop) : !t.isIdentifier(prop))
      ) {
        return;
      }
      const bindingIdentifier = path.scope.getBindingIdentifier(obj.name);
      const data = ENUMS.get(bindingIdentifier);
      if (!data) return;
      // @ts-expect-error checked above
      return data.get(prop.computed ? prop.value : prop.name);
    } else if (path.isIdentifier()) {
      const name = path.node.name;

      let value = prevMembers?.get(name);
      if (value !== undefined) {
        return value;
      }

      if (seen.has(path.node)) return;

      const bindingInitPath = path.resolve(); // It only resolves constant bindings
      if (bindingInitPath) {
        seen.add(path.node);

        value = computeConstantValue(bindingInitPath, undefined, seen);
        prevMembers?.set(name, value);
        return value;
      }
    }
  }

  function evalUnaryExpression(
    path: NodePath<t.UnaryExpression>,
  ): number | string | undefined {
    const value = evaluate(path.get("argument"));
    if (value === undefined) {
      return undefined;
    }

    switch (path.node.operator) {
      case "+":
        return value;
      case "-":
        return -value;
      case "~":
        return ~value;
      default:
        return undefined;
    }
  }

  function evalBinaryExpression(
    path: NodePath<t.BinaryExpression>,
  ): number | string | undefined {
    const left = evaluate(path.get("left")) as any;
    if (left === undefined) {
      return undefined;
    }
    const right = evaluate(path.get("right")) as any;
    if (right === undefined) {
      return undefined;
    }

    switch (path.node.operator) {
      case "|":
        return left | right;
      case "&":
        return left & right;
      case ">>":
        return left >> right;
      case ">>>":
        return left >>> right;
      case "<<":
        return left << right;
      case "^":
        return left ^ right;
      case "*":
        return left * right;
      case "/":
        return left / right;
      case "+":
        return left + right;
      case "-":
        return left - right;
      case "%":
        return left % right;
      case "**":
        return left ** right;
      default:
        return undefined;
    }
  }
}
