const isBabelPluginFactory = require("./is-babel-plugin-factory.cjs");

// Check if a ReferenceOrigin (returned by ./get-reference-origin.js)
// is a reference to a @babel/types export.
module.exports = function isFromBabelTypes(
  origin /*: ReferenceOrigin */,
  scope /*: Scope */,
) {
  if (origin.kind === "import" && origin.source === "@babel/types") {
    // imported from @babel/types
    return true;
  }

  if (
    origin.kind === "property" &&
    origin.base.kind === "import" &&
    origin.base.name === "types" &&
    origin.base.source === "@babel/core"
  ) {
    // imported from @babel/core
    return true;
  }

  if (
    origin.kind === "property" &&
    origin.base.kind === "param" &&
    origin.base.index === 0
  ) {
    return isBabelPluginFactory(origin.base.functionNode, scope);
  }

  return false;
};
