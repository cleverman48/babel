import template from "@babel/template";
import {
  NOT_LOCAL_BINDING,
  cloneNode,
  identifier,
  isAssignmentExpression,
  isAssignmentPattern,
  isFunction,
  isIdentifier,
  isLiteral,
  isNullLiteral,
  isObjectMethod,
  isObjectProperty,
  isRegExpLiteral,
  isRestElement,
  isTemplateLiteral,
  isVariableDeclarator,
  toBindingIdentifierName,
} from "@babel/types";
import type * as t from "@babel/types";
import type { NodePath, Scope, Visitor } from "@babel/traverse";

function getFunctionArity(node: t.Function): number {
  const count = node.params.findIndex(
    param => isAssignmentPattern(param) || isRestElement(param),
  );
  return count === -1 ? node.params.length : count;
}

const buildPropertyMethodAssignmentWrapper = template.statement(`
  (function (FUNCTION_KEY) {
    function FUNCTION_ID() {
      return FUNCTION_KEY.apply(this, arguments);
    }

    FUNCTION_ID.toString = function () {
      return FUNCTION_KEY.toString();
    }

    return FUNCTION_ID;
  })(FUNCTION)
`);

const buildGeneratorPropertyMethodAssignmentWrapper = template.statement(`
  (function (FUNCTION_KEY) {
    function* FUNCTION_ID() {
      return yield* FUNCTION_KEY.apply(this, arguments);
    }

    FUNCTION_ID.toString = function () {
      return FUNCTION_KEY.toString();
    };

    return FUNCTION_ID;
  })(FUNCTION)
`);

type State = {
  name: string;
  outerDeclar: t.Identifier;
  selfAssignment: boolean;
  selfReference: boolean;
};

const visitor: Visitor<State> = {
  "ReferencedIdentifier|BindingIdentifier"(
    path: NodePath<t.Identifier>,
    state,
  ) {
    // check if this node matches our function id
    if (path.node.name !== state.name) return;

    // check that we don't have a local variable declared as that removes the need
    // for the wrapper
    const localDeclar = path.scope.getBindingIdentifier(state.name);
    if (localDeclar !== state.outerDeclar) return;

    state.selfReference = true;
    path.stop();
  },
};

function getNameFromLiteralId(id: t.Literal) {
  if (isNullLiteral(id)) {
    return "null";
  }

  if (isRegExpLiteral(id)) {
    return `_${id.pattern}_${id.flags}`;
  }

  if (isTemplateLiteral(id)) {
    return id.quasis.map(quasi => quasi.value.raw).join("");
  }

  if (id.value !== undefined) {
    return id.value + "";
  }

  return "";
}

function wrap(
  state: State,
  method: t.FunctionExpression | t.Class,
  id: t.Identifier,
  scope: Scope,
) {
  if (state.selfReference) {
    if (scope.hasBinding(id.name) && !scope.hasGlobal(id.name)) {
      // we can just munge the local binding
      scope.rename(id.name);
    } else {
      // we don't currently support wrapping class expressions
      if (!isFunction(method)) return;

      // need to add a wrapper since we can't change the references
      let build = buildPropertyMethodAssignmentWrapper;
      if (method.generator) {
        build = buildGeneratorPropertyMethodAssignmentWrapper;
      }

      const template = (
        build({
          FUNCTION: method,
          FUNCTION_ID: id,
          FUNCTION_KEY: scope.generateUidIdentifier(id.name),
        }) as t.ExpressionStatement
      ).expression as t.CallExpression;

      // shim in dummy params to retain function arity, if you try to read the
      // source then you'll get the original since it's proxied so it's all good
      const params = (
        (template.callee as t.FunctionExpression).body
          .body[0] as any as t.FunctionExpression
      ).params;

      for (let i = 0, len = getFunctionArity(method); i < len; i++) {
        params.push(scope.generateUidIdentifier("x"));
      }

      return template;
    }
  }

  method.id = id;
  scope.getProgramParent().references[id.name] = true;
}

function visit(
  node: t.FunctionExpression | t.Class,
  name: string,
  scope: Scope,
) {
  const state: State = {
    selfAssignment: false,
    selfReference: false,
    outerDeclar: scope.getBindingIdentifier(name),
    name: name,
  };

  // check to see if we have a local binding of the id we're setting inside of
  // the function, this is important as there are caveats associated

  const binding = scope.getOwnBinding(name);

  if (binding) {
    if (binding.kind === "param") {
      // safari will blow up in strict mode with code like:
      //
      //   let t = function t(t) {};
      //
      // with the error:
      //
      //   Cannot declare a parameter named 't' as it shadows the name of a
      //   strict mode function.
      //
      // this isn't to the spec and they've invented this behaviour which is
      // **extremely** annoying so we avoid setting the name if it has a param
      // with the same id
      state.selfReference = true;
    } else {
      // otherwise it's defined somewhere in scope like:
      //
      //   let t = function () {
      //     let t = 2;
      //   };
      //
      // so we can safely just set the id and move along as it shadows the
      // bound function id
    }
  } else if (state.outerDeclar || scope.hasGlobal(name)) {
    scope.traverse(node, visitor, state);
  }

  return state;
}

/**
 * Add id to function/class expression inferred from the AST
 *
 * @export
 * @template N The unnamed expression type
 * @param {Object} nodePathLike The NodePath-like input
 * @param {N} nodePathLike.node an AST node
 * @param {NodePath<N>["parent"]} [nodePathLike.parent] The parent of the AST node
 * @param {Scope} nodePathLike.scope The scope associated to the AST node
 * @param {t.LVal | t.StringLiteral | t.NumericLiteral | t.BigIntLiteral} [nodePathLike.id] the fallback naming source when the helper
 * can not infer the function name from the AST
 * @param {boolean} [localBinding=false] whether a name could shadow a self-reference (e.g. converting arrow function)
 * @param {boolean} [supportUnicodeId=false] whether the compilation target supports unicodeId (non-BMP characters) or not
 * @returns {(N | t.CallExpression | void)}
 * - modified node when name can be inferred,
 * - an IIFE when `node` contains a binding shadowing the inferred function name (e.g. `let f = function (f) {}`),
 * - `void` when `node` has `id` property or the helper can not inferred the name or the inferred name contains non-BMP characters that is not supported by current target
 */
export default function <N extends t.FunctionExpression | t.Class>(
  {
    node,
    parent,
    scope,
    id,
  }: {
    node: N;
    parent?: NodePath<N>["parent"];
    scope: Scope;
    id?: t.LVal | t.StringLiteral | t.NumericLiteral | t.BigIntLiteral;
  },
  localBinding = false,
  supportUnicodeId = false,
): N | t.CallExpression | void {
  // has an `id` so we don't need to infer one
  if (node.id) return;

  if (
    (isObjectProperty(parent) || isObjectMethod(parent, { kind: "method" })) &&
    (!parent.computed || isLiteral(parent.key))
  ) {
    // { foo() {} };
    id = parent.key as
      | t.Identifier
      | t.StringLiteral
      | t.NumericLiteral
      | t.BigIntLiteral;
  } else if (isVariableDeclarator(parent)) {
    // let foo = function () {};
    id = parent.id;

    // but not "let foo = () => {};" being converted to function expression
    if (isIdentifier(id) && !localBinding) {
      const binding = scope.parent.getBinding(id.name);
      if (
        binding &&
        binding.constant &&
        scope.getBinding(id.name) === binding
      ) {
        // always going to reference this method
        node.id = cloneNode(id);
        // @ts-expect-error Fixme: avoid mutating AST nodes
        node.id[NOT_LOCAL_BINDING] = true;
        return;
      }
    }
  } else if (isAssignmentExpression(parent, { operator: "=" })) {
    // foo = function () {};
    id = parent.left;
  } else if (!id) {
    return;
  }

  let name;
  if (id && isLiteral(id)) {
    name = getNameFromLiteralId(id);
  } else if (id && isIdentifier(id)) {
    name = id.name;
  }

  if (name === undefined) {
    return;
  }

  if (!supportUnicodeId && isFunction(node) && /[\uD800-\uDFFF]/.test(name)) {
    return;
  }

  name = toBindingIdentifierName(name);
  const newId = identifier(name);

  // The id shouldn't be considered a local binding to the function because
  // we are simply trying to set the function name and not actually create
  // a local binding.
  // @ts-expect-error Fixme: avoid mutating AST nodes
  newId[NOT_LOCAL_BINDING] = true;

  const state = visit(node, name, scope);
  return wrap(state, node, newId, scope) || node;
}
