import * as babelPlugins from "./generated/plugins";

export default (_: any, opts: any = {}) => {
  const {
    loose = false,
    decoratorsLegacy = false,
    decoratorsVersion = "2018-09",
    decoratorsBeforeExport,
  } = opts;

  const plugins = [
    babelPlugins.syntaxImportAssertions,
    babelPlugins.transformUnicodeSetsRegex,
    babelPlugins.proposalDuplicateNamedCapturingGroupsRegex,
    [
      babelPlugins.proposalDecorators,
      {
        version: decoratorsLegacy ? "legacy" : decoratorsVersion,
        decoratorsBeforeExport,
      },
    ],
    babelPlugins.proposalRegexpModifiers,
    babelPlugins.proposalExplicitResourceManagement,
    // These are Stage 4
    ...(process.env.BABEL_8_BREAKING
      ? []
      : [
          babelPlugins.transformExportNamespaceFrom,
          babelPlugins.transformLogicalAssignmentOperators,
          [babelPlugins.transformOptionalChaining, { loose }],
          [babelPlugins.transformNullishCoalescingOperator, { loose }],
          [babelPlugins.transformClassProperties, { loose }],
          babelPlugins.transformJsonStrings,
          babelPlugins.transformNumericSeparator,
          [babelPlugins.transformPrivateMethods, { loose }],
          babelPlugins.transformPrivatePropertyInObject,
          babelPlugins.transformClassStaticBlock,
        ]),
  ];

  return { plugins };
};
