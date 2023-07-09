import {
  defineAliasedType,
  assertNodeType,
  assertValueType,
  chain,
  assertEach,
} from "./utils";

const defineType = defineAliasedType("JSX");

defineType("JSXAttribute", {
  visitor: ["name", "value"],
  aliases: ["Immutable"],
  fields: {
    name: {
      validate: assertNodeType("JSXIdentifier", "JSXNamespacedName"),
    },
    value: {
      optional: true,
      validate: assertNodeType(
        "JSXElement",
        "JSXFragment",
        "StringLiteral",
        "JSXExpressionContainer",
      ),
    },
  },
});

defineType("JSXClosingElement", {
  visitor: ["name"],
  aliases: ["Immutable"],
  fields: {
    name: {
      validate: assertNodeType(
        "JSXIdentifier",
        "JSXMemberExpression",
        "JSXNamespacedName",
      ),
    },
  },
});

defineType("JSXElement", {
  builder: process.env.BABEL_8_BREAKING
    ? ["openingElement", "closingElement", "children"]
    : ["openingElement", "closingElement", "children", "selfClosing"],
  visitor: ["openingElement", "children", "closingElement"],
  aliases: ["Immutable", "Expression"],
  fields: {
    openingElement: {
      validate: assertNodeType("JSXOpeningElement"),
    },
    closingElement: {
      optional: true,
      validate: assertNodeType("JSXClosingElement"),
    },
    children: {
      validate: chain(
        assertValueType("array"),
        assertEach(
          assertNodeType(
            "JSXText",
            "JSXExpressionContainer",
            "JSXSpreadChild",
            "JSXElement",
            "JSXFragment",
          ),
        ),
      ),
    },
    ...(process.env.BABEL_8_BREAKING
      ? {}
      : {
          selfClosing: {
            validate: assertValueType("boolean"),
            optional: true,
          },
        }),
  },
});

defineType("JSXEmptyExpression", {});

defineType("JSXExpressionContainer", {
  visitor: ["expression"],
  aliases: ["Immutable"],
  fields: {
    expression: {
      validate: assertNodeType("Expression", "JSXEmptyExpression"),
    },
  },
});

defineType("JSXSpreadChild", {
  visitor: ["expression"],
  aliases: ["Immutable"],
  fields: {
    expression: {
      validate: assertNodeType("Expression"),
    },
  },
});

defineType("JSXIdentifier", {
  builder: ["name"],
  fields: {
    name: {
      validate: assertValueType("string"),
    },
  },
});

defineType("JSXMemberExpression", {
  visitor: ["object", "property"],
  fields: {
    object: {
      validate: assertNodeType("JSXMemberExpression", "JSXIdentifier"),
    },
    property: {
      validate: assertNodeType("JSXIdentifier"),
    },
  },
});

defineType("JSXNamespacedName", {
  visitor: ["namespace", "name"],
  fields: {
    namespace: {
      validate: assertNodeType("JSXIdentifier"),
    },
    name: {
      validate: assertNodeType("JSXIdentifier"),
    },
  },
});

defineType("JSXOpeningElement", {
  builder: ["name", "attributes", "selfClosing"],
  visitor: ["name", "attributes"],
  aliases: ["Immutable"],
  fields: {
    name: {
      validate: assertNodeType(
        "JSXIdentifier",
        "JSXMemberExpression",
        "JSXNamespacedName",
      ),
    },
    selfClosing: {
      default: false,
    },
    attributes: {
      validate: chain(
        assertValueType("array"),
        assertEach(assertNodeType("JSXAttribute", "JSXSpreadAttribute")),
      ),
    },
    typeParameters: {
      validate: assertNodeType(
        "TypeParameterInstantiation",
        "TSTypeParameterInstantiation",
      ),
      optional: true,
    },
  },
});

defineType("JSXSpreadAttribute", {
  visitor: ["argument"],
  fields: {
    argument: {
      validate: assertNodeType("Expression"),
    },
  },
});

defineType("JSXText", {
  aliases: ["Immutable"],
  builder: ["value"],
  fields: {
    value: {
      validate: assertValueType("string"),
    },
  },
});

defineType("JSXFragment", {
  builder: ["openingFragment", "closingFragment", "children"],
  visitor: ["openingFragment", "children", "closingFragment"],
  aliases: ["Immutable", "Expression"],
  fields: {
    openingFragment: {
      validate: assertNodeType("JSXOpeningFragment"),
    },
    closingFragment: {
      validate: assertNodeType("JSXClosingFragment"),
    },
    children: {
      validate: chain(
        assertValueType("array"),
        assertEach(
          assertNodeType(
            "JSXText",
            "JSXExpressionContainer",
            "JSXSpreadChild",
            "JSXElement",
            "JSXFragment",
          ),
        ),
      ),
    },
  },
});

defineType("JSXOpeningFragment", {
  aliases: ["Immutable"],
});

defineType("JSXClosingFragment", {
  aliases: ["Immutable"],
});
