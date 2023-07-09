import { declare } from "@babel/helper-plugin-utils";

export default declare(api => {
  api.assertVersion(7);

  return {
    name: "syntax-explicit-resource-management",

    manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push("explicitResourceManagement");
    },
  };
});
