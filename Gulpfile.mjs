import path from "path";
import fs from "fs";
import { cpus } from "os";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import plumber from "gulp-plumber";
import through from "through2";
import chalk from "chalk";
import filter from "gulp-filter";
import gulp from "gulp";
import { rollup } from "rollup";
import {
  babel as rollupBabel,
  getBabelOutputPlugin,
} from "@rollup/plugin-babel";
import rollupCommonJs from "@rollup/plugin-commonjs";
import rollupJson from "@rollup/plugin-json";
import rollupPolyfillNode from "rollup-plugin-polyfill-node";
import rollupNodeResolve from "@rollup/plugin-node-resolve";
import rollupReplace from "@rollup/plugin-replace";
import { terser as rollupTerser } from "rollup-plugin-terser";
import rollupDts from "rollup-plugin-dts";
import { Worker as JestWorker } from "jest-worker";
import { Glob } from "glob";
import { resolve as importMetaResolve } from "import-meta-resolve";

import rollupBabelSource from "./scripts/rollup-plugin-babel-source.js";
import rollupStandaloneInternals from "./scripts/rollup-plugin-standalone-internals.js";
import formatCode from "./scripts/utils/formatCode.js";
import { log } from "./scripts/utils/logger.cjs";
import { USE_ESM, commonJS } from "$repo-utils";

const { require, __dirname: monorepoRoot } = commonJS(import.meta.url);

const defaultPackagesGlob = "./@(codemods|packages|eslint)/*";
const defaultSourcesGlob = `${defaultPackagesGlob}/src/**/{*.js,*.cjs,!(*.d).ts}`;

const babelStandalonePluginConfigGlob =
  "./packages/babel-standalone/scripts/pluginConfig.json";

const buildTypingsWatchGlob = [
  "./packages/babel-types/lib/definitions/**/*.js",
  "./packages/babel-types/scripts/generators/*.js",
];

// env vars from the cli are always strings, so !!ENV_VAR returns true for "false"
function bool(value) {
  return value && value !== "false" && value !== "0";
}

/**
 * map source code path to the generated artifacts path
 * @example
 * mapSrcToLib("packages/babel-core/src/index.js")
 * // returns "packages/babel-core/lib/index.js"
 * @example
 * mapSrcToLib("packages/babel-template/src/index.ts")
 * // returns "packages/babel-template/lib/index.js"
 * @example
 * mapSrcToLib("packages/babel-template/src/index.d.ts")
 * // returns "packages/babel-template/lib/index.d.ts"
 * @param {string} srcPath
 * @returns {string}
 */
function mapSrcToLib(srcPath) {
  const parts = srcPath.replace(/(?<!\.d)\.ts$/, ".js").split("/");
  parts[2] = "lib";
  return parts.join("/");
}

function mapToDts(packageName) {
  return packageName.replace(
    /(?<=\\|\/|^)(packages|eslint|codemods)(?=\\|\/)/,
    "dts/$1"
  );
}

function getIndexFromPackage(name) {
  try {
    fs.statSync(`./${name}/src/index.ts`);
    return `${name}/src/index.ts`;
  } catch {
    return `${name}/src/index.js`;
  }
}

function errorsLogger() {
  return plumber({
    errorHandler(err) {
      log(err.stack);
    },
  });
}

function rename(fn) {
  return through.obj(function (file, enc, callback) {
    file.path = fn(file);
    callback(null, file);
  });
}

/**
 * @param {string} generator
 * @param {string} pkg
 * @param {string} filename
 * @param {string} message
 */
function generateHelpers(generator, dest, filename, message) {
  const stream = gulp
    .src(".", { base: monorepoRoot })
    .pipe(errorsLogger())
    .pipe(
      through.obj(async (file, enc, callback) => {
        const { default: generateCode } = await import(generator);

        file.path = filename;
        file.contents = Buffer.from(
          await formatCode(await generateCode(filename), dest + file.path)
        );
        log(`${chalk.green("✔")} Generated ${message}`);
        callback(null, file);
      })
    )
    .pipe(gulp.dest(dest, { mode: 0o644 }));

  return finish(stream);
}

/**
 *
 * @typedef {("asserts" | "builders" | "constants" | "validators")} TypesHelperKind
 * @param {TypesHelperKind} helperKind
 * @param {string} filename
 */
async function generateTypeHelpers(helperKind, filename = "index.ts") {
  return generateHelpers(
    `./packages/babel-types/scripts/generators/${helperKind}.js`,
    `./packages/babel-types/src/${helperKind}/generated/`,
    filename,
    `@babel/types -> ${helperKind}`
  );
}

/**
 *
 * @typedef {("asserts" | "validators")} TraverseHelperKind
 * @param {TraverseHelperKind} helperKind
 */
function generateTraverseHelpers(helperKind) {
  return generateHelpers(
    `./packages/babel-traverse/scripts/generators/${helperKind}.js`,
    `./packages/babel-traverse/src/path/generated/`,
    `${helperKind}.d.ts`,
    `@babel/traverse -> ${helperKind}`
  );
}

async function generateRuntimeHelpers() {
  await generateHelpers(
    `./packages/babel-helpers/scripts/generate-regenerator-runtime.js`,
    `./packages/babel-helpers/src/helpers`,
    "regeneratorRuntime.js",
    "@babel/helpers -> regeneratorRuntime"
  );

  return generateHelpers(
    `./packages/babel-helpers/scripts/generate-helpers.js`,
    `./packages/babel-helpers/src/`,
    "helpers-generated.ts",
    "@babel/helpers"
  );
}

const kebabToCamel = str => str.replace(/-[a-z]/g, c => c[1].toUpperCase());

function generateStandalone() {
  const dest = "./packages/babel-standalone/src/generated/";
  return gulp
    .src(babelStandalonePluginConfigGlob, { base: monorepoRoot })
    .pipe(
      through.obj(async (file, enc, callback) => {
        log("Generating @babel/standalone files");
        const pluginConfig = JSON.parse(file.contents);
        let imports = `import makeNoopPlugin from "../make-noop-plugin";`;
        let exportDecls = "";
        let exportsList = "";
        let allList = "";

        for (const plugin of pluginConfig.noopPlugins) {
          const camelPlugin = kebabToCamel(plugin);
          exportDecls += `${camelPlugin} = makeNoopPlugin(),`;
          allList += `"${plugin}": ${camelPlugin},`;
        }

        for (const plugin of pluginConfig.externalPlugins) {
          const camelPlugin = kebabToCamel(plugin);
          imports += `import ${camelPlugin} from "@babel/plugin-${plugin}";`;
          exportsList += `${camelPlugin},`;
          allList += `"${plugin}": ${camelPlugin},`;
        }

        const fileContents = `/*
 * This file is auto-generated! Do not modify it directly.
 * To re-generate run 'yarn gulp generate-standalone'
 */
${imports}
export const ${exportDecls.slice(0, -1)};
export {${exportsList}};
export const all: { [k: string]: any } = {${allList}};`;
        file.path = "plugins.ts";
        file.contents = Buffer.from(
          await formatCode(fileContents, dest + file.path)
        );
        callback(null, file);
      })
    )
    .pipe(gulp.dest(dest));
}

function finish(stream) {
  return new Promise((resolve, reject) => {
    stream.on("end", resolve);
    stream.on("finish", resolve);
    stream.on("error", reject);
  });
}

function getFiles(glob, { include, exclude }) {
  let stream = gulp.src(glob, { base: monorepoRoot });

  if (exclude) {
    const filters = exclude.map(p => `!**/${p}/**`);
    filters.unshift("**");
    stream = stream.pipe(filter(filters));
  }
  if (include) {
    const filters = include.map(p => `**/${p}/**`);
    stream = stream.pipe(filter(filters));
  }

  return stream;
}

function createWorker(useWorker) {
  const numWorkers = Math.ceil(Math.max(cpus().length, 1) / 2) - 1;
  if (
    numWorkers === 0 ||
    !useWorker ||
    // For some reason, on CircleCI the workers hang indefinitely.
    process.env.CIRCLECI
  ) {
    return require("./babel-worker.cjs");
  }
  const worker = new JestWorker(require.resolve("./babel-worker.cjs"), {
    numWorkers,
    exposedMethods: ["transform"],
  });
  worker.getStdout().pipe(process.stdout);
  worker.getStderr().pipe(process.stderr);
  return worker;
}

async function buildBabel(useWorker, ignore = []) {
  const worker = createWorker(useWorker);
  const files = new Glob(defaultSourcesGlob, {
    ignore: ignore.map(p => `./${p.src}/**`),
    posix: true,
  });

  const promises = [];
  for await (const file of files) {
    // @example ./packages/babel-parser/src/index.js
    const dest = "./" + mapSrcToLib(file);
    promises.push(
      worker.transform(file, dest, {
        sourceMaps: !file.endsWith(".d.ts"),
      })
    );
  }
  return Promise.allSettled(promises)
    .then(results => {
      results.forEach(result => {
        if (result.status == "rejected") {
          if (process.env.WATCH_SKIP_BUILD) {
            console.error(result.reason);
          } else {
            throw result.reason;
          }
        }
      });
    })
    .finally(() => {
      worker.end?.();
    });
}

/**
 * Resolve a nested dependency starting from the given file
 */
function resolveChain(baseUrl, ...packages) {
  const require = createRequire(baseUrl);

  return packages.reduce(
    (base, pkg) =>
      path.dirname(require.resolve(pkg + "/package.json", { paths: [base] })),
    path.dirname(fileURLToPath(baseUrl))
  );
}

// If this build is part of a pull request, include the pull request number in
// the version number.
let versionSuffix = "";
if (process.env.CIRCLE_PR_NUMBER) {
  versionSuffix = "+pr." + process.env.CIRCLE_PR_NUMBER;
}

const babelVersion =
  require("./packages/babel-core/package.json").version + versionSuffix;
function buildRollup(packages, buildStandalone) {
  const sourcemap = process.env.NODE_ENV === "production";
  return Promise.all(
    packages.map(
      async ({
        src,
        format,
        input,
        dest,
        name,
        filename,
        envName = "rollup",
      }) => {
        const pkgJSON = require("./" + src + "/package.json");
        const version = pkgJSON.version + versionSuffix;
        const { dependencies = {}, peerDependencies = {} } = pkgJSON;
        const external = [
          ...Object.keys(dependencies),
          ...Object.keys(peerDependencies),
          // @babel/compat-data sub exports
          /@babel\/compat-data\/.*/,
          // Ideally they should be constructed from package.json exports
          // required by modules-commonjs
          /babel-plugin-dynamic-import-node\/utils/,
          // required by preset-env
          /@babel\/preset-modules\/.*/,
        ];

        log(`Compiling '${chalk.cyan(input)}' with rollup ...`);
        const bundle = await rollup({
          input,
          external: buildStandalone ? [] : external,
          // all node modules are resolved as if they were placed in the n_m folder of package root
          preserveSymlinks: true,
          onwarn(warning, warn) {
            switch (warning.code) {
              case "CIRCULAR_DEPENDENCY":
              case "SOURCEMAP_ERROR": // Rollup warns about the babel-polyfills source maps
                return;
              case "UNUSED_EXTERNAL_IMPORT":
                warn(warning);
                return;
              case "MISSING_EXPORT":
                // Rollup warns about using babel.default at
                // https://github.com/babel/babel-polyfills/blob/4ac92be5b70b13e3d8a34614d8ecd900eb3f40e4/packages/babel-helper-define-polyfill-provider/src/types.js#L5
                // We can safely ignore this warning, and let Rollup replace it with undefined.
                if (
                  warning.exporter === "packages/babel-core/src/index.ts" &&
                  warning.missing === "default" &&
                  [
                    "@babel/helper-define-polyfill-provider",
                    "babel-plugin-polyfill-corejs2",
                    "babel-plugin-polyfill-corejs3",
                    "babel-plugin-polyfill-regenerator",
                  ].some(pkg => warning.importer.includes(pkg))
                ) {
                  return;
                }
            }

            // We use console.warn here since it prints more info than just "warn",
            // in case we want to stop throwing for a specific message.
            console.warn(warning);

            // https://github.com/babel/babel/pull/12011#discussion_r540434534
            throw new Error("Rollup aborted due to warnings above");
          },
          plugins: [
            buildStandalone && rollupStandaloneInternals(),
            rollupBabelSource(),
            rollupReplace({
              preventAssignment: true,
              values: {
                "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
                BABEL_VERSION: JSON.stringify(babelVersion),
                VERSION: JSON.stringify(version),
              },
            }),
            rollupCommonJs({
              include: [
                // Bundle node_modules only when building standalone
                buildStandalone ? /node_modules/ : "./node_modules/*/*.js",
                "packages/babel-runtime/regenerator/**",
                "packages/babel-runtime/helpers/*.js",
                "packages/babel-preset-env/data/*.js",
                // Rollup doesn't read export maps, so it loads the cjs fallback
                "packages/babel-compat-data/*.js",
                // Used by @babel/standalone
                "packages/babel-compat-data/scripts/data/legacy-plugin-aliases.js",
                "packages/*/src/**/*.cjs",
              ],
              dynamicRequireTargets: [
                // https://github.com/mathiasbynens/regexpu-core/blob/ffd8fff2e31f4597f6fdfee75d5ac1c5c8111ec3/rewrite-pattern.js#L48
                resolveChain(
                  import.meta.url,
                  "./packages/babel-helper-create-regexp-features-plugin",
                  "regexpu-core",
                  "regenerate-unicode-properties"
                ) + "/**/*.js",
              ],
              // Never delegate to the native require()
              ignoreDynamicRequires: false,
              // Align with the Node.js behavior
              defaultIsModuleExports: true,
            }),
            rollupBabel({
              envName,
              babelrc: false,
              babelHelpers: "bundled",
              extends: "./babel.config.js",
              extensions: [".ts", ".js", ".mjs", ".cjs"],
              ignore: ["packages/babel-runtime/helpers/*.js"],
            }),
            rollupNodeResolve({
              extensions: [".ts", ".js", ".mjs", ".cjs", ".json"],
              browser: buildStandalone,
              exportConditions: buildStandalone ? ["browser"] : [],
              // It needs to be set to 'false' when using rollupNodePolyfills
              // https://github.com/rollup/plugins/issues/772
              preferBuiltins: !buildStandalone,
            }),
            rollupJson(),
            src === "packages/babel-parser" &&
              getBabelOutputPlugin({
                configFile: false,
                babelrc: false,
                plugins: [
                  function babelPluginInlineConstNumericObjects({ types: t }) {
                    return {
                      visitor: {
                        VariableDeclarator(path) {
                          const { node } = path;
                          if (
                            !t.isIdentifier(node.id) ||
                            !t.isObjectExpression(node.init)
                          ) {
                            return;
                          }

                          const binding = path.scope.getBinding(node.id.name);
                          if (!binding.constant) return;

                          const vals = new Map();
                          for (const { key, value } of node.init.properties) {
                            if (!t.isIdentifier(key)) return;
                            if (!t.isNumericLiteral(value)) return;
                            vals.set(key.name, value.value);
                          }

                          let all = true;
                          binding.referencePaths.forEach(({ parentPath }) => {
                            const { node } = parentPath;
                            if (
                              !t.isMemberExpression(node) ||
                              !t.isIdentifier(node.property) ||
                              node.computed ||
                              !vals.has(node.property.name)
                            ) {
                              all = false;
                              return;
                            }
                            parentPath.replaceWith(
                              t.numericLiteral(vals.get(node.property.name))
                            );
                          });

                          if (all) path.remove();
                        },
                      },
                    };
                  },
                ],
              }),
            buildStandalone &&
              rollupPolyfillNode({
                sourceMap: sourcemap,
                include: "**/*.{js,mjs,cjs,ts}",
              }),
          ].filter(Boolean),
          acorn: {
            // babel-cli/src/babel/index.ts has shebang
            allowHashBang: true,
          },
        });

        const outputFile = path.join(src, dest, filename || "index.js");
        await bundle.write({
          file: outputFile,
          format,
          name,
          sourcemap: sourcemap,
          exports: "named",
          interop(id) {
            // We have manually applied commonjs-esm interop to the source
            // for library not in this monorepo
            // https://github.com/babel/babel/pull/12795
            if (!id.startsWith("@babel/")) return false;

            // Some syntax plugins have been archived
            if (id.includes("plugin-syntax")) {
              const srcPath = new URL(
                "./packages/" + id.replace("@babel/", "babel-"),
                import.meta.url
              );
              if (!fs.existsSync(srcPath)) return false;
            }

            if (id.includes("@babel/preset-modules")) {
              return false;
            }

            return true;
          },
        });

        // Only minify @babel/standalone
        if (!buildStandalone) {
          return;
        }

        if (!process.env.IS_PUBLISH) {
          log(
            chalk.yellow(
              `Skipped minification of '${chalk.cyan(
                outputFile
              )}' because not publishing`
            )
          );
          return undefined;
        }
        log(`Minifying '${chalk.cyan(outputFile)}'...`);

        await bundle.write({
          file: outputFile.replace(/\.js$/, ".min.js"),
          format,
          name,
          sourcemap: sourcemap,
          exports: "named",
          plugins: [
            rollupTerser({
              // workaround https://bugs.webkit.org/show_bug.cgi?id=212725
              output: {
                ascii_only: true,
              },
              numWorkers: process.env.CIRCLECI ? 1 : undefined,
            }),
          ],
        });
      }
    )
  );
}

function buildRollupDts(packages) {
  async function build(input, output, banner) {
    log(`Bundling '${chalk.cyan(output)}' with rollup ...`);

    const bundle = await rollup({
      input,
      plugins: [rollupDts()],
    });

    await bundle.write({
      file: output,
      format: "es",
      banner,
    });
  }

  const tasks = packages.map(async packageName => {
    const input = `${mapToDts(packageName)}/src/index.d.ts`;
    const output = `${packageName}/lib/index.d.ts`;

    await build(input, output);
  });

  tasks.push(
    build(
      "packages/babel-parser/typings/babel-parser.source.d.ts",
      "packages/babel-parser/typings/babel-parser.d.ts",
      "// This file is auto-generated! Do not modify it directly.\n/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/consistent-type-imports, prettier/prettier */"
    )
  );

  return Promise.all(tasks);
}

function copyDts(packages) {
  return getFiles(`${defaultPackagesGlob}/src/**/*.d.ts`, { include: packages })
    .pipe(rename(file => path.resolve(file.base, mapToDts(file.relative))))
    .pipe(gulp.dest(monorepoRoot));
}

function* libBundlesIterator() {
  const noBundle = new Set([
    // @rollup/plugin-commonjs will mess up with babel-helper-fixtures
    "babel-helper-fixtures",
    // babel-standalone is handled by rollup-babel-standalone task
    "babel-standalone",
    // todo: Rollup hangs on allowHashBang: true with babel-cli/src/babel/index.ts hashbang
    "babel-cli",
    // todo: @rollup/node-resolve 'browsers' option does not work when package.json contains `exports`
    // https://github.com/rollup/plugins/tree/master/packages/node-resolve#browser
    "babel-register",
    "babel-core",
    "babel-plugin-transform-runtime",
    // @babel/node invokes internal lib/_babel-node.js
    "babel-node",
    // todo: test/helpers/define-helper requires internal lib/helpers access
    "babel-helpers",
    // multiple exports
    "babel-plugin-transform-react-jsx",
  ]);
  for (const packageDir of ["packages", "codemods"]) {
    for (const dir of fs.readdirSync(new URL(packageDir, import.meta.url))) {
      if (noBundle.has(dir)) continue;

      const src = `${packageDir}/${dir}`;

      let pkgJSON;
      try {
        pkgJSON = JSON.parse(
          fs.readFileSync(new URL(`${src}/package.json`, import.meta.url))
        );
      } catch (err) {
        if (err.code !== "ENOENT" && err.code !== "ENOTDIR") throw err;
        continue;
      }
      if (pkgJSON.main) {
        yield {
          src,
          format: USE_ESM ? "esm" : "cjs",
          dest: "lib",
          input: getIndexFromPackage(src),
        };
      } else if (pkgJSON.bin) {
        for (const binPath of Object.values(pkgJSON.bin)) {
          const filename = binPath.slice(binPath.lastIndexOf("/") + 1);
          const input =
            dir === "babel-cli" && filename === "babel.js"
              ? `${src}/src/babel/index.ts`
              : `${src}/src/${filename.slice(0, -3) + ".ts"}`;
          yield {
            src,
            format: USE_ESM ? "esm" : "cjs",
            dest: "lib",
            filename,
            input,
          };
        }
      }
    }
  }
}

let libBundles;
if (bool(process.env.BABEL_8_BREAKING)) {
  libBundles = Array.from(libBundlesIterator());
} else {
  libBundles = [
    "packages/babel-parser",
    "packages/babel-plugin-proposal-destructuring-private",
    "packages/babel-plugin-transform-object-rest-spread",
    "packages/babel-plugin-transform-optional-chaining",
    "packages/babel-preset-react",
    "packages/babel-plugin-transform-destructuring",
    "packages/babel-preset-typescript",
    "packages/babel-helper-member-expression-to-functions",
    "packages/babel-plugin-bugfix-v8-spread-parameters-in-optional-chaining",
    "packages/babel-plugin-bugfix-safari-id-destructuring-collision-in-function-expression",
  ].map(src => ({
    src,
    format: USE_ESM ? "esm" : "cjs",
    dest: "lib",
    input: getIndexFromPackage(src),
  }));
}

const cjsBundles = [
  // This is used by @babel/register and @babel/eslint-parser
  { src: "packages/babel-parser" },
];

const dtsBundles = ["packages/babel-types"];

const standaloneBundle = [
  {
    src: "packages/babel-standalone",
    format: "umd",
    name: "Babel",
    filename: "babel.js",
    dest: "",
    version: babelVersion,
    envName: "standalone",
    input: getIndexFromPackage("packages/babel-standalone"),
  },
];

gulp.task("generate-type-helpers", () => {
  log("Generating @babel/types and @babel/traverse dynamic functions");

  return Promise.all([
    generateTypeHelpers("asserts"),
    generateTypeHelpers("builders"),
    generateTypeHelpers("builders", "uppercase.js"),
    generateTypeHelpers("constants"),
    generateTypeHelpers("validators"),
    generateTypeHelpers("ast-types"),
    generateTraverseHelpers("asserts"),
    generateTraverseHelpers("validators"),
  ]);
});

gulp.task("generate-runtime-helpers", () => {
  log("Generating @babel/helpers runtime helpers");

  return generateRuntimeHelpers();
});

gulp.task("generate-standalone", () => generateStandalone());

gulp.task("build-rollup", () => buildRollup(libBundles));
gulp.task("rollup-babel-standalone", () => buildRollup(standaloneBundle, true));
gulp.task(
  "build-babel-standalone",
  gulp.series("generate-standalone", "rollup-babel-standalone")
);

gulp.task("copy-dts", () => copyDts(dtsBundles));
gulp.task(
  "bundle-dts",
  gulp.series("copy-dts", () => buildRollupDts(dtsBundles))
);

gulp.task("build-babel", () => buildBabel(true, /* exclude */ libBundles));

gulp.task("build-vendor", async () => {
  const input = fileURLToPath(
    importMetaResolve("import-meta-resolve", import.meta.url)
  );
  const output = "./packages/babel-core/src/vendor/import-meta-resolve.js";

  const bundle = await rollup({
    input,
    onwarn(warning, warn) {
      if (warning.code === "CIRCULAR_DEPENDENCY") return;
      warn(warning);
    },
    plugins: [
      rollupCommonJs({ defaultIsModuleExports: true }),
      rollupNodeResolve({
        extensions: [".js", ".mjs", ".cjs", ".json"],
        preferBuiltins: true,
      }),
      {
        // Remove the node: prefix from imports, so that it works in old Node.js version
        // TODO(Babel 8): This can be removed.
        transform: code => code.replace(/(?<=from ["'"])node:/g, ""),
      },
    ],
  });

  await bundle.write({
    file: output,
    format: "es",
    sourcemap: false,
    exports: "named",
    banner: String.raw`
/****************************************************************************\
 *                         NOTE FROM BABEL AUTHORS                          *
 * This file is inlined from https://github.com/wooorm/import-meta-resolve, *
 * because we need to compile it to CommonJS.                               *
\****************************************************************************/

/*
${fs.readFileSync(path.join(path.dirname(input), "license"), "utf8")}*/
`,
  });

  fs.writeFileSync(
    output.replace(".js", ".d.ts"),
    `export function resolve(specifier: string, parent: string): string;`
  );
});

gulp.task("build-cjs-bundles", () => {
  if (!USE_ESM) {
    log(
      chalk.yellow(
        "Skipping CJS-compat bundles for ESM-based builds, because not compiling to ESM"
      )
    );
    return Promise.resolve();
  }
  return Promise.all(
    cjsBundles.map(async ({ src, external = [] }) => {
      const input = `./${src}/lib/index.js`;
      const output = `./${src}/lib/index.cjs`;

      const bundle = await rollup({
        input,
        external,
        onwarn(warning, warn) {
          if (warning.code === "CIRCULAR_DEPENDENCY") return;
          warn(warning);
        },
        plugins: [
          rollupCommonJs({ defaultIsModuleExports: true }),
          rollupNodeResolve({
            extensions: [".js", ".mjs", ".cjs", ".json"],
            preferBuiltins: true,
          }),
        ],
      });

      await bundle.write({
        file: output,
        format: "cjs",
        sourcemap: false,
      });
    })
  );
});

gulp.task(
  "build",
  gulp.series(
    "build-vendor",
    gulp.parallel("build-rollup", "build-babel"),
    gulp.parallel("generate-type-helpers", "generate-runtime-helpers"),
    // rebuild @babel/types and @babel/helpers since
    // type-helpers and generated helpers may be changed
    "build-babel",
    gulp.parallel("generate-standalone", "build-cjs-bundles")
  )
);

gulp.task("default", gulp.series("build"));

// First build on worker processes for compilation speed
gulp.task("build-no-bundle", () => buildBabel(true));
// Incremental builds take place in main process
gulp.task("build-no-bundle-watch", () => buildBabel(false));

gulp.task(
  "build-dev",
  gulp.series(
    "build-vendor",
    "build-no-bundle",
    gulp.parallel(
      "generate-standalone",
      "generate-runtime-helpers",
      gulp.series(
        "generate-type-helpers",
        // rebuild @babel/types since type-helpers may be changed
        "build-no-bundle",
        "build-cjs-bundles"
      )
    )
  )
);

function watch() {
  gulp.watch(defaultSourcesGlob, gulp.task("build-no-bundle-watch"));
  gulp.watch(babelStandalonePluginConfigGlob, gulp.task("generate-standalone"));
  gulp.watch(buildTypingsWatchGlob, gulp.task("generate-type-helpers"));
  gulp.watch(
    [
      "./packages/babel-helpers/src/helpers/*.js",
      "!./packages/babel-helpers/src/helpers/regeneratorRuntime.js",
    ],
    gulp.task("generate-runtime-helpers")
  );
  if (USE_ESM) {
    gulp.watch(
      cjsBundles.map(({ src }) => `./${src}/lib/**.js`),
      gulp.task("build-cjs-bundles")
    );
  }
}

gulp.task(
  "watch",
  process.env.WATCH_SKIP_BUILD ? watch : gulp.series("build-dev", watch)
);
