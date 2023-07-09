import { declare } from "@babel/helper-plugin-utils";
import { types as t } from "@babel/core";
import type { NodePath } from "@babel/traverse";

export default declare(api => {
  api.assertVersion(7);

  const surrogate = /[\ud800-\udfff]/g;
  const unicodeEscape = /(\\+)u\{([0-9a-fA-F]+)\}/g;

  function escape(code: number) {
    if (process.env.BABEL_8_BREAKING) {
      return "\\u" + code.toString(16).padStart(4, "0");
    } else {
      let str = code.toString(16);
      // Sigh, node 6 doesn't have padStart
      // TODO: Remove in Babel 8, when we drop node 6.
      while (str.length < 4) str = "0" + str;
      return "\\u" + str;
    }
  }

  function replacer(match: string, backslashes: string[], code: string) {
    if (backslashes.length % 2 === 0) {
      return match;
    }

    const char = String.fromCodePoint(parseInt(code, 16));
    const escaped = backslashes.slice(0, -1) + escape(char.charCodeAt(0));

    return char.length === 1 ? escaped : escaped + escape(char.charCodeAt(1));
  }

  function replaceUnicodeEscapes(str: string) {
    return str.replace(unicodeEscape, replacer);
  }

  function getUnicodeEscape(str: string) {
    let match;
    while ((match = unicodeEscape.exec(str))) {
      if (match[1].length % 2 === 0) continue;
      unicodeEscape.lastIndex = 0;
      return match[0];
    }
    return null;
  }

  return {
    name: "transform-unicode-escapes",
    manipulateOptions({ generatorOpts }) {
      // Babel 8 will enable jsesc minimal mode by default, which outputs
      // unescaped unicode string
      if (!generatorOpts.jsescOption) {
        generatorOpts.jsescOption = {};
      }
      generatorOpts.jsescOption.minimal ??= false;
    },
    visitor: {
      Identifier(path) {
        const { node, key } = path;
        const { name } = node;
        const replaced = name.replace(surrogate, c => {
          return `_u${c.charCodeAt(0).toString(16)}`;
        });
        if (name === replaced) return;

        const str = t.inherits(t.stringLiteral(name), node);

        if (key === "key") {
          path.replaceWith(str);
          return;
        }

        const { parentPath, scope } = path;
        if (
          parentPath.isMemberExpression({ property: node }) ||
          parentPath.isOptionalMemberExpression({ property: node })
        ) {
          parentPath.node.computed = true;
          path.replaceWith(str);
          return;
        }

        const binding = scope.getBinding(name);
        if (binding) {
          scope.rename(name, scope.generateUid(replaced));
          return;
        }

        throw path.buildCodeFrameError(
          `Can't reference '${name}' as a bare identifier`,
        );
      },

      "StringLiteral|DirectiveLiteral"(
        path: NodePath<t.StringLiteral | t.DirectiveLiteral>,
      ) {
        const { node } = path;
        const { extra } = node;

        if (extra?.raw) extra.raw = replaceUnicodeEscapes(extra.raw as string);
      },

      TemplateElement(path) {
        const { node, parentPath } = path;
        const { value } = node;

        const firstEscape = getUnicodeEscape(value.raw);
        if (!firstEscape) return;

        const grandParent = parentPath.parentPath;
        if (grandParent.isTaggedTemplateExpression()) {
          throw path.buildCodeFrameError(
            `Can't replace Unicode escape '${firstEscape}' inside tagged template literals. You can enable '@babel/plugin-transform-template-literals' to compile them to classic strings.`,
          );
        }

        value.raw = replaceUnicodeEscapes(value.raw);
      },
    },
  };
});
