import { declare } from "@babel/helper-plugin-utils";
import syntaxDynamicImport from "@babel/plugin-syntax-dynamic-import";

const SUPPORTED_MODULES = ["commonjs", "amd", "systemjs"];

const MODULES_NOT_FOUND = `\
@babel/plugin-transform-dynamic-import depends on a modules
transform plugin. Supported plugins are:
 - @babel/plugin-transform-modules-commonjs ^7.4.0
 - @babel/plugin-transform-modules-amd ^7.4.0
 - @babel/plugin-transform-modules-systemjs ^7.4.0

If you are using Webpack or Rollup and thus don't want
Babel to transpile your imports and exports, you can use
the @babel/plugin-syntax-dynamic-import plugin and let your
bundler handle dynamic imports.
`;

export default declare(api => {
  api.assertVersion(7);

  return {
    name: "transform-dynamic-import",
    inherits: syntaxDynamicImport.default,

    pre() {
      // We keep using the old name, for compatibility with older
      // version of the CommonJS transform.
      this.file.set(
        "@babel/plugin-proposal-dynamic-import",
        PACKAGE_JSON.version,
      );
    },

    visitor: {
      Program() {
        const modules = this.file.get("@babel/plugin-transform-modules-*");

        if (!SUPPORTED_MODULES.includes(modules)) {
          throw new Error(MODULES_NOT_FOUND);
        }
      },
    },
  };
});
