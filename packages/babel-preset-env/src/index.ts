// TODO(Babel 8): Use "semver" directly
import semver, { type SemVer } from "@nicolo-ribaudo/semver-v6";
import { logPlugin } from "./debug";
import getOptionSpecificExcludesFor from "./get-option-specific-excludes";
import {
  addProposalSyntaxPlugins,
  removeUnnecessaryItems,
  removeUnsupportedItems,
} from "./filter-items";
import moduleTransformations from "./module-transformations";
import normalizeOptions from "./normalize-options";
import {
  pluginSyntaxMap,
  proposalPlugins,
  proposalSyntaxPlugins,
} from "./shipped-proposals";
import {
  plugins as pluginsList,
  pluginsBugfixes as pluginsBugfixesList,
  overlappingPlugins,
} from "./plugins-compat-data";

import removeRegeneratorEntryPlugin from "./polyfills/regenerator";
import legacyBabelPolyfillPlugin from "./polyfills/babel-polyfill";

import type { CallerMetadata } from "@babel/core";

import _pluginCoreJS2 from "babel-plugin-polyfill-corejs2";
import _pluginCoreJS3 from "babel-plugin-polyfill-corejs3";
import _pluginRegenerator from "babel-plugin-polyfill-regenerator";
const pluginCoreJS2 = _pluginCoreJS2.default || _pluginCoreJS2;
const pluginCoreJS3 = _pluginCoreJS3.default || _pluginCoreJS3;
const pluginRegenerator = _pluginRegenerator.default || _pluginRegenerator;

import getTargets, {
  prettifyTargets,
  filterItems,
  isRequired,
} from "@babel/helper-compilation-targets";
import type { Targets, InputTargets } from "@babel/helper-compilation-targets";
import availablePlugins from "./available-plugins";
import { declarePreset } from "@babel/helper-plugin-utils";

type ModuleTransformationsType =
  typeof import("./module-transformations").default;
import type { BuiltInsOption, ModuleOption, Options } from "./types";

// TODO: Remove in Babel 8
export function isPluginRequired(targets: Targets, support: Targets) {
  return isRequired("fake-name", targets, {
    compatData: { "fake-name": support },
  });
}

function filterStageFromList(
  list: { [feature: string]: Targets },
  stageList: Set<string>,
) {
  return Object.keys(list).reduce((result, item) => {
    if (!stageList.has(item)) {
      // @ts-expect-error todo: refine result types
      result[item] = list[item];
    }

    return result;
  }, {});
}

const pluginLists = {
  withProposals: {
    withoutBugfixes: pluginsList,
    withBugfixes: Object.assign({}, pluginsList, pluginsBugfixesList),
  },
  withoutProposals: {
    withoutBugfixes: filterStageFromList(pluginsList, proposalPlugins),
    withBugfixes: filterStageFromList(
      Object.assign({}, pluginsList, pluginsBugfixesList),
      proposalPlugins,
    ),
  },
};

function getPluginList(proposals: boolean, bugfixes: boolean) {
  if (proposals) {
    if (bugfixes) return pluginLists.withProposals.withBugfixes;
    else return pluginLists.withProposals.withoutBugfixes;
  } else {
    if (bugfixes) return pluginLists.withoutProposals.withBugfixes;
    else return pluginLists.withoutProposals.withoutBugfixes;
  }
}

const getPlugin = (pluginName: string) => {
  const plugin =
    // @ts-expect-error plugin name is constructed from available plugin list
    availablePlugins[pluginName]();

  if (!plugin) {
    throw new Error(
      `Could not find plugin "${pluginName}". Ensure there is an entry in ./available-plugins.js for it.`,
    );
  }

  return plugin;
};

export const transformIncludesAndExcludes = (opts: Array<string>): any => {
  return opts.reduce(
    (result, opt) => {
      const target = opt.match(/^(es|es6|es7|esnext|web)\./)
        ? "builtIns"
        : "plugins";
      result[target].add(opt);
      return result;
    },
    {
      all: opts,
      plugins: new Set(),
      builtIns: new Set(),
    },
  );
};

export const getModulesPluginNames = ({
  modules,
  transformations,
  shouldTransformESM,
  shouldTransformDynamicImport,
  shouldTransformExportNamespaceFrom,
  shouldParseTopLevelAwait,
}: {
  modules: ModuleOption;
  transformations: ModuleTransformationsType;
  shouldTransformESM: boolean;
  shouldTransformDynamicImport: boolean;
  shouldTransformExportNamespaceFrom: boolean;
  shouldParseTopLevelAwait: boolean;
}) => {
  const modulesPluginNames = [];
  if (modules !== false && transformations[modules]) {
    if (shouldTransformESM) {
      modulesPluginNames.push(transformations[modules]);
    }

    if (
      shouldTransformDynamicImport &&
      shouldTransformESM &&
      modules !== "umd"
    ) {
      modulesPluginNames.push("transform-dynamic-import");
    } else {
      if (shouldTransformDynamicImport) {
        console.warn(
          "Dynamic import can only be supported when transforming ES modules" +
            " to AMD, CommonJS or SystemJS. Only the parser plugin will be enabled.",
        );
      }
      modulesPluginNames.push("syntax-dynamic-import");
    }
  } else {
    modulesPluginNames.push("syntax-dynamic-import");
  }

  if (shouldTransformExportNamespaceFrom) {
    modulesPluginNames.push("transform-export-namespace-from");
  } else {
    modulesPluginNames.push("syntax-export-namespace-from");
  }

  if (shouldParseTopLevelAwait) {
    modulesPluginNames.push("syntax-top-level-await");
  }

  // Enable import meta for @babel/core < 7.10
  modulesPluginNames.push("syntax-import-meta");

  return modulesPluginNames;
};

export const getPolyfillPlugins = ({
  useBuiltIns,
  corejs,
  polyfillTargets,
  include,
  exclude,
  proposals,
  shippedProposals,
  regenerator,
  debug,
}: {
  useBuiltIns: BuiltInsOption;
  corejs: SemVer | null | false;
  polyfillTargets: Targets;
  include: Set<string>;
  exclude: Set<string>;
  proposals: boolean;
  shippedProposals: boolean;
  regenerator: boolean;
  debug: boolean;
}) => {
  const polyfillPlugins = [];
  if (useBuiltIns === "usage" || useBuiltIns === "entry") {
    const pluginOptions = {
      method: `${useBuiltIns}-global`,
      version: corejs ? corejs.toString() : undefined,
      targets: polyfillTargets,
      include,
      exclude,
      proposals,
      shippedProposals,
      debug,
      "#__secret_key__@babel/preset-env__compatibility": {
        noRuntimeName: true,
      },
    };

    if (corejs) {
      if (useBuiltIns === "usage") {
        if (corejs.major === 2) {
          polyfillPlugins.push(
            [pluginCoreJS2, pluginOptions],
            [legacyBabelPolyfillPlugin, { usage: true }],
          );
        } else {
          polyfillPlugins.push(
            [pluginCoreJS3, pluginOptions],
            [legacyBabelPolyfillPlugin, { usage: true, deprecated: true }],
          );
        }
        if (regenerator) {
          polyfillPlugins.push([
            pluginRegenerator,
            { method: "usage-global", debug },
          ]);
        }
      } else {
        if (corejs.major === 2) {
          polyfillPlugins.push(
            [legacyBabelPolyfillPlugin, { regenerator }],
            [pluginCoreJS2, pluginOptions],
          );
        } else {
          polyfillPlugins.push(
            [pluginCoreJS3, pluginOptions],
            [legacyBabelPolyfillPlugin, { deprecated: true }],
          );
          if (!regenerator) {
            polyfillPlugins.push([removeRegeneratorEntryPlugin, pluginOptions]);
          }
        }
      }
    }
  }
  return polyfillPlugins;
};

function getLocalTargets(
  optionsTargets: Options["targets"],
  ignoreBrowserslistConfig: boolean,
  configPath: string,
  browserslistEnv: string,
) {
  if (optionsTargets?.esmodules && optionsTargets.browsers) {
    console.warn(`
@babel/preset-env: esmodules and browsers targets have been specified together.
\`browsers\` target, \`${optionsTargets.browsers.toString()}\` will be ignored.
`);
  }

  return getTargets(optionsTargets as InputTargets, {
    ignoreBrowserslistConfig,
    configPath,
    browserslistEnv,
  });
}

function supportsStaticESM(caller: CallerMetadata | undefined) {
  // @ts-expect-error supportsStaticESM is not defined in CallerMetadata
  return !!caller?.supportsStaticESM;
}

function supportsDynamicImport(caller: CallerMetadata | undefined) {
  // @ts-expect-error supportsDynamicImport is not defined in CallerMetadata
  return !!caller?.supportsDynamicImport;
}

function supportsExportNamespaceFrom(caller: CallerMetadata | undefined) {
  // @ts-expect-error supportsExportNamespaceFrom is not defined in CallerMetadata
  return !!caller?.supportsExportNamespaceFrom;
}

function supportsTopLevelAwait(caller: CallerMetadata | undefined) {
  // @ts-expect-error supportsTopLevelAwait is not defined in CallerMetadata
  return !!caller?.supportsTopLevelAwait;
}

export default declarePreset((api, opts: Options) => {
  api.assertVersion(7);

  const babelTargets = api.targets();

  const {
    bugfixes,
    configPath,
    debug,
    exclude: optionsExclude,
    forceAllTransforms,
    ignoreBrowserslistConfig,
    include: optionsInclude,
    loose,
    modules,
    shippedProposals,
    spec,
    targets: optionsTargets,
    useBuiltIns,
    corejs: { version: corejs, proposals },
    browserslistEnv,
  } = normalizeOptions(opts);

  let targets = babelTargets;

  if (
    // @babel/core < 7.13.0 doesn't load targets (api.targets() always
    // returns {} thanks to @babel/helper-plugin-utils), so we always want
    // to fallback to the old targets behavior in this case.
    semver.lt(api.version, "7.13.0") ||
    // If any browserslist-related option is specified, fallback to the old
    // behavior of not using the targets specified in the top-level options.
    opts.targets ||
    opts.configPath ||
    opts.browserslistEnv ||
    opts.ignoreBrowserslistConfig
  ) {
    if (!process.env.BABEL_8_BREAKING) {
      // eslint-disable-next-line no-var
      var hasUglifyTarget = false;

      if (optionsTargets?.uglify) {
        hasUglifyTarget = true;
        delete optionsTargets.uglify;

        console.warn(`
The uglify target has been deprecated. Set the top level
option \`forceAllTransforms: true\` instead.
`);
      }
    }

    targets = getLocalTargets(
      optionsTargets,
      ignoreBrowserslistConfig,
      configPath,
      browserslistEnv,
    );
  }

  const transformTargets = (
    process.env.BABEL_8_BREAKING
      ? forceAllTransforms
      : forceAllTransforms || hasUglifyTarget
  )
    ? ({} as Targets)
    : targets;

  const include = transformIncludesAndExcludes(optionsInclude);
  const exclude = transformIncludesAndExcludes(optionsExclude);

  const compatData = getPluginList(shippedProposals, bugfixes);
  const shouldSkipExportNamespaceFrom =
    (modules === "auto" && api.caller?.(supportsExportNamespaceFrom)) ||
    (modules === false &&
      !isRequired("transform-export-namespace-from", transformTargets, {
        compatData,
        includes: include.plugins,
        excludes: exclude.plugins,
      }));
  const modulesPluginNames = getModulesPluginNames({
    modules,
    transformations: moduleTransformations,
    // TODO: Remove the 'api.caller' check eventually. Just here to prevent
    // unnecessary breakage in the short term for users on older betas/RCs.
    shouldTransformESM: modules !== "auto" || !api.caller?.(supportsStaticESM),
    shouldTransformDynamicImport:
      modules !== "auto" || !api.caller?.(supportsDynamicImport),
    shouldTransformExportNamespaceFrom: !shouldSkipExportNamespaceFrom,
    shouldParseTopLevelAwait:
      !api.caller || (api.caller(supportsTopLevelAwait) as boolean),
  });

  const pluginNames = filterItems(
    compatData,
    include.plugins,
    exclude.plugins,
    transformTargets,
    modulesPluginNames,
    getOptionSpecificExcludesFor({ loose }),
    pluginSyntaxMap,
  );
  if (shippedProposals) {
    addProposalSyntaxPlugins(pluginNames, proposalSyntaxPlugins);
  }
  removeUnsupportedItems(pluginNames, api.version);
  removeUnnecessaryItems(pluginNames, overlappingPlugins);

  const polyfillPlugins = getPolyfillPlugins({
    useBuiltIns,
    corejs,
    polyfillTargets: targets,
    include: include.builtIns,
    exclude: exclude.builtIns,
    proposals,
    shippedProposals,
    regenerator: pluginNames.has("transform-regenerator"),
    debug,
  });

  const pluginUseBuiltIns = useBuiltIns !== false;
  const plugins = Array.from(pluginNames)
    .map(pluginName => {
      if (
        pluginName === "transform-class-properties" ||
        pluginName === "transform-private-methods" ||
        pluginName === "transform-private-property-in-object"
      ) {
        return [
          getPlugin(pluginName),
          {
            loose: loose
              ? "#__internal__@babel/preset-env__prefer-true-but-false-is-ok-if-it-prevents-an-error"
              : "#__internal__@babel/preset-env__prefer-false-but-true-is-ok-if-it-prevents-an-error",
          },
        ];
      }
      if (pluginName === "syntax-import-attributes") {
        // For backward compatibility with the import-assertions plugin, we
        // allow the deprecated `assert` keyword.
        // TODO(Babel 8): Revisit this.
        return [getPlugin(pluginName), { deprecatedAssertSyntax: true }];
      }
      return [
        getPlugin(pluginName),
        { spec, loose, useBuiltIns: pluginUseBuiltIns },
      ];
    })
    .concat(polyfillPlugins);

  if (debug) {
    console.log("@babel/preset-env: `DEBUG` option");
    console.log("\nUsing targets:");
    console.log(JSON.stringify(prettifyTargets(targets), null, 2));
    console.log(`\nUsing modules transform: ${modules.toString()}`);
    console.log("\nUsing plugins:");
    pluginNames.forEach(pluginName => {
      logPlugin(pluginName, targets, compatData);
    });

    if (!useBuiltIns) {
      console.log(
        "\nUsing polyfills: No polyfills were added, since the `useBuiltIns` option was not set.",
      );
    }
  }

  return { plugins };
});
