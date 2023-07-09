import { types as t, template } from "@babel/core";
import type { NodePath } from "@babel/traverse";

const buildForAwait = template(`
  async function wrapper() {
    var ITERATOR_ABRUPT_COMPLETION = false;
    var ITERATOR_HAD_ERROR_KEY = false;
    var ITERATOR_ERROR_KEY;
    try {
      for (
        var ITERATOR_KEY = GET_ITERATOR(OBJECT), STEP_KEY;
        ITERATOR_ABRUPT_COMPLETION = !(STEP_KEY = await ITERATOR_KEY.next()).done;
        ITERATOR_ABRUPT_COMPLETION = false
      ) {
      }
    } catch (err) {
      ITERATOR_HAD_ERROR_KEY = true;
      ITERATOR_ERROR_KEY = err;
    } finally {
      try {
        if (ITERATOR_ABRUPT_COMPLETION && ITERATOR_KEY.return != null) {
          await ITERATOR_KEY.return();
        }
      } finally {
        if (ITERATOR_HAD_ERROR_KEY) {
          throw ITERATOR_ERROR_KEY;
        }
      }
    }
  }
`);

export default function (
  path: NodePath<t.ForOfStatement>,
  { getAsyncIterator }: { getAsyncIterator: t.Identifier },
) {
  const { node, scope, parent } = path;

  const stepKey = scope.generateUidIdentifier("step");
  const stepValue = t.memberExpression(stepKey, t.identifier("value"));
  const left = node.left;
  let declar;

  if (t.isIdentifier(left) || t.isPattern(left) || t.isMemberExpression(left)) {
    // for await (i of test), for await ({ i } of test)
    declar = t.expressionStatement(
      t.assignmentExpression("=", left, stepValue),
    );
  } else if (t.isVariableDeclaration(left)) {
    // for await (let i of test)
    declar = t.variableDeclaration(left.kind, [
      t.variableDeclarator(left.declarations[0].id, stepValue),
    ]);
  }
  let template = buildForAwait({
    ITERATOR_HAD_ERROR_KEY: scope.generateUidIdentifier("didIteratorError"),
    ITERATOR_ABRUPT_COMPLETION: scope.generateUidIdentifier(
      "iteratorAbruptCompletion",
    ),
    ITERATOR_ERROR_KEY: scope.generateUidIdentifier("iteratorError"),
    ITERATOR_KEY: scope.generateUidIdentifier("iterator"),
    GET_ITERATOR: getAsyncIterator,
    OBJECT: node.right,
    STEP_KEY: t.cloneNode(stepKey),
  });

  // remove async function wrapper
  // @ts-expect-error todo(flow->ts) improve type annotation for buildForAwait
  template = template.body.body as t.Statement[];

  const isLabeledParent = t.isLabeledStatement(parent);
  const tryBody = (template[3] as t.TryStatement).block.body;
  const loop = tryBody[0] as t.ForStatement;

  if (isLabeledParent) {
    tryBody[0] = t.labeledStatement(parent.label, loop);
  }

  return {
    replaceParent: isLabeledParent,
    node: template,
    declar,
    loop,
  };
}
