# Changelog

> **Tags:**
>
> - :boom: [Breaking Change]
> - :eyeglasses: [Spec Compliance]
> - :rocket: [New Feature]
> - :bug: [Bug Fix]
> - :memo: [Documentation]
> - :house: [Internal]
> - :nail_care: [Polish]

_Note: Gaps between patch versions are faulty, broken or test releases._

This file contains the changelog starting frm v7.15.0.

- See [CHANGELOG - v7.0.0 to v7.14.9](/.github/CHANGELOG-v7.0.0-v7.14.9.md) for v7.0.0 to v7.14.9 changes.
- See [CHANGELOG - v7 prereleases](/.github/CHANGELOG-v7-prereleases.md) for v7.0.0-alpha.1 to v7.0.0-rc.4 changes.
- See [CHANGELOG - v4](/.github/CHANGELOG-v4.md), [CHANGELOG - v5](/.github/CHANGELOG-v5.md), and [CHANGELOG - v6](/.github/CHANGELOG-v6.md) for v4.x-v6.x changes.
- See [CHANGELOG - 6to5](/.github/CHANGELOG-6to5.md) for the pre-4.0.0 version changelog.
- See [Babylon's CHANGELOG](packages/babel-parser/CHANGELOG.md) for the Babylon pre-7.0.0-beta.29 version changelog.
- See [`babel-eslint`'s releases](https://github.com/babel/babel-eslint/releases) for the changelog before `@babel/eslint-parser` 7.8.0.
- See [`eslint-plugin-babel`'s releases](https://github.com/babel/eslint-plugin-babel/releases) for the changelog before `@babel/eslint-plugin` 7.8.0.

<!-- DO NOT CHANGE THESE COMMENTS - See .github/actions/trigger-github-release/update-changelog.js -->
<!-- insert-new-changelog-here -->
## v7.22.8 (2023-07-06)

#### :leftwards_arrow_with_hook: Revert
* `babel-core`, `babel-traverse`
  * [#15754](https://github.com/babel/babel/pull/15754) Revert "Use `NodePath#hub` as part of the paths cache key" ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v7.22.7 (2023-07-06)

#### :bug: Bug Fix
* `babel-generator`
  * [#15719](https://github.com/babel/babel/pull/15719) fix: Avoid internally generating negative source maps columns ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-core`, `babel-traverse`
  * [#15725](https://github.com/babel/babel/pull/15725) Use `NodePath#hub` as part of the paths cache key ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* Other
  * [#15747](https://github.com/babel/babel/pull/15747) fix: export `meta` from `eslint-parser/experimental-worker` ([@JLHwung](https://github.com/JLHwung))

#### :house: Internal
* `babel-core`, `babel-traverse`
  * [#15702](https://github.com/babel/babel/pull/15702) Refactor visitors merging ([@nullableVoidPtr](https://github.com/nullableVoidPtr))
## v7.22.6 (2023-07-04)

#### :bug: Bug Fix
* `babel-compat-data`, `babel-helper-compilation-targets`, `babel-preset-env`
  * [#15727](https://github.com/babel/babel/pull/15727) Add opera mobile compat data ([@JLHwung](https://github.com/JLHwung))
* `babel-plugin-transform-optional-chaining`
  * [#15739](https://github.com/babel/babel/pull/15739) Fix transform of `delete a?.b` in function params ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-helper-split-export-declaration`, `babel-plugin-transform-modules-commonjs`
  * [#15736](https://github.com/babel/babel/pull/15736) fix: Default export for duplicate names ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-compat-data`, `babel-preset-env`
  * [#15726](https://github.com/babel/babel/pull/15726) update compat-data sources ([@JLHwung](https://github.com/JLHwung))
* `babel-helpers`, `babel-plugin-proposal-explicit-resource-management`, `babel-runtime-corejs3`, `babel-runtime`
  * [#15705](https://github.com/babel/babel/pull/15705) Fix handling of sync error in `@@asyncDispose` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-standalone`
  * [#15707](https://github.com/babel/babel/pull/15707) fix: Support transforming Explicit Resource Management in `stage-2` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-core`
  * [#15626](https://github.com/babel/babel/pull/15626) fix: Works correctly with `--frozen-intrinsics` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))

#### :house: Internal
* `babel-helper-create-class-features-plugin`, `babel-plugin-transform-classes`
  * [#15700](https://github.com/babel/babel/pull/15700) Minor class transform cleanups ([@JLHwung](https://github.com/JLHwung))

#### :microscope: Output optimization
* `babel-plugin-bugfix-v8-spread-parameters-in-optional-chaining`, `babel-plugin-transform-class-properties`, `babel-plugin-transform-optional-chaining`, `babel-plugin-transform-typescript`
  * [#15740](https://github.com/babel/babel/pull/15740) Compress output for optional chain with multiple `?.` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-proposal-destructuring-private`, `babel-plugin-proposal-do-expressions`, `babel-plugin-proposal-pipeline-operator`, `babel-plugin-transform-class-properties`, `babel-plugin-transform-nullish-coalescing-operator`, `babel-plugin-transform-optional-chaining`, `babel-plugin-transform-private-property-in-object`, `babel-traverse`
  * [#15741](https://github.com/babel/babel/pull/15741) Inject tmp vars in the params list of IIFEs when possible ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v7.22.5 (2023-06-08)

#### :bug: Bug Fix
* `babel-preset-env`, `babel-standalone`
  * [#15675](https://github.com/babel/babel/pull/15675) Fix using `syntax-unicode-sets-regex` in standalone ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :nail_care: Polish
* `babel-core`
  * [#15683](https://github.com/babel/babel/pull/15683) Suggest `-transform-` when resolving missing plugins ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v7.22.4 (2023-05-29)

#### :bug: Bug Fix
* `babel-traverse`
  * [#15649](https://github.com/babel/babel/pull/15649) Set `shorthand: false` when renaming an identifier inside an object property ([@coderaiser](https://github.com/coderaiser))

#### :house: Internal
* `babel-types`
  * [#15666](https://github.com/babel/babel/pull/15666) Add missing `attributes`/`assertions` to `VISITOR_KEYS` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-parser`
  * [#15667](https://github.com/babel/babel/pull/15667) Mark `assert` attributes with `extra.deprecatedAssertSyntax` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

## v7.22.3 (2023-05-27)

- Re-publish all the package published in 7.22.0 that hadn't been republished yet. We accidentally published them with a `package.json` file containing `"type": "script"` instead of `"type": "commonjs"` ([#15664](https://github.com/babel/babel/issues/15664)).

## v7.22.2 (2023-05-26)

#### :bug: Bug Fix
* `babel-plugin-transform-runtime`, `babel-preset-env`, `babel-runtime-corejs2`
  * [#15660](https://github.com/babel/babel/pull/15660) Fix importing symbol polyfill in `@babel/runtime-corejs2` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v7.22.1 (2023-05-26)

#### :bug: Bug Fix
* `babel-preset-env`
  * [#15658](https://github.com/babel/babel/pull/15658) Workaround for broken babel-preset-react-app ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v7.22.0 (2023-05-26)

#### :rocket: New Feature
* `babel-parser`, `babel-plugin-transform-typescript`
  * [#15497](https://github.com/babel/babel/pull/15497) [ts] Support `import ... =` and `export =` in scripts ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-compat-data`, `babel-core`, `babel-plugin-proposal-unicode-sets-regex`, `babel-plugin-transform-unicode-sets-regex`, `babel-preset-env`, `babel-standalone`
  * [#15636](https://github.com/babel/babel/pull/15636) Add `unicode-sets-regex` transform to `preset-env` ([@JLHwung](https://github.com/JLHwung))
* `babel-helpers`, `babel-plugin-proposal-explicit-resource-management`, `babel-plugin-transform-runtime`, `babel-runtime-corejs2`, `babel-runtime-corejs3`, `babel-runtime`, `babel-standalone`
  * [#15633](https://github.com/babel/babel/pull/15633) Implement transform support for `using` declarations ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-proposal-import-attributes-to-assertions`
  * [#15620](https://github.com/babel/babel/pull/15620) Create `@babel/plugin-proposal-import-attributes-to-assertions` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-core`, `babel-generator`, `babel-parser`, `babel-plugin-syntax-import-attributes`, `babel-preset-env`, `babel-standalone`, `babel-types`
  * [#15536](https://github.com/babel/babel/pull/15536) Add support for the updated import attributes proposal ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-generator`, `babel-parser`, `babel-traverse`, `babel-types`
  * [#15520](https://github.com/babel/babel/pull/15520) Parse `await using` declarations ([@JLHwung](https://github.com/JLHwung))
* `babel-core`, `babel-helper-create-regexp-features-plugin`, `babel-parser`
  * [#15638](https://github.com/babel/babel/pull/15638) Enable regexp unicode sets parsing by default ([@JLHwung](https://github.com/JLHwung))
* `babel-helpers`, `babel-plugin-proposal-decorators`, `babel-plugin-syntax-decorators`, `babel-runtime-corejs2`, `babel-runtime-corejs3`, `babel-runtime`
  * [#15570](https://github.com/babel/babel/pull/15570) Add decorators version `2023-05` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :nail_care: Polish
* `babel-plugin-transform-react-constant-elements`, `babel-plugin-transform-react-jsx`, `babel-traverse`, `babel-types`
  * [#15549](https://github.com/babel/babel/pull/15549) Improve type definitions for validators ([@liuxingbaoyu](https://github.com/liuxingbaoyu))

#### :house: Internal
* `babel-parser`
  * [#15630](https://github.com/babel/babel/pull/15630) Unify parsing of import/export modifiers (type/typeof/module) ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-compat-data`, `babel-helper-transform-fixture-test-runner`, `babel-node`, `babel-plugin-proposal-decorators`, `babel-plugin-proposal-duplicate-named-capturing-groups-regex`, `babel-plugin-transform-async-generator-functions`, `babel-plugin-transform-named-capturing-groups-regex`, `babel-plugin-transform-runtime`, `babel-preset-env`, `babel-runtime-corejs3`
  * [#15531](https://github.com/babel/babel/pull/15531) Allow polyfill providers to specify custom `@babel/runtime` pkg ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-core`, `babel-plugin-proposal-async-generator-functions`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-class-static-block`, `babel-plugin-proposal-decorators`, `babel-plugin-proposal-dynamic-import`, `babel-plugin-proposal-export-namespace-from`, `babel-plugin-proposal-function-sent`, `babel-plugin-proposal-json-strings`, `babel-plugin-proposal-logical-assignment-operators`, `babel-plugin-proposal-nullish-coalescing-operator`, `babel-plugin-proposal-numeric-separator`, `babel-plugin-proposal-object-rest-spread`, `babel-plugin-proposal-optional-catch-binding`, `babel-plugin-proposal-optional-chaining`, `babel-plugin-proposal-pipeline-operator`, `babel-plugin-proposal-private-methods`, `babel-plugin-proposal-private-property-in-object`, `babel-plugin-proposal-unicode-property-regex`, `babel-preset-env`, `babel-standalone`
  * [#15614](https://github.com/babel/babel/pull/15614) Rename `-proposal-`s that became standard to `-transform-` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

## v7.21.9 (2023-05-22)

#### :bug: Bug Fix
* `babel-parser`
  * [#15631](https://github.com/babel/babel/pull/15631) rescan gt token at the end of type args parsing ([@JLHwung](https://github.com/JLHwung))
* `babel-generator`
  * [#15569](https://github.com/babel/babel/pull/15569) Fix indentation when `retainLines` is `true` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-template`
  * [#15534](https://github.com/babel/babel/pull/15534) fix: Template `export { x }` stuck in infinite loop ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-compat-data`, `babel-preset-env`
  * [#15606](https://github.com/babel/babel/pull/15606) fix: enable transform-block-scoping with generators feature (#12806) ([@IlyaSemenov](https://github.com/IlyaSemenov))
## v7.21.8 (2023-05-02)

#### :eyeglasses: Spec Compliance
* `babel-parser`
  * [#15602](https://github.com/babel/babel/pull/15602) Remove `using await` restriction in explicitResourceManagement ([@JLHwung](https://github.com/JLHwung))

#### :bug: Bug Fix
* `babel-helper-create-class-features-plugin`, `babel-helper-create-regexp-features-plugin`
  * [#15605](https://github.com/babel/babel/pull/15605) Fix backward compat for semver checks in class&regexp feat plugins ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

## v7.21.6 (2023-04-29)

#### :bug: Bug Fix
* `babel-compat-data`
  * [#15598](https://github.com/babel/babel/pull/15598) fix: Not found `corejs3-shipped-proposals.json` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
## v7.21.5 (2023-04-28)

#### :eyeglasses: Spec Compliance
* `babel-generator`, `babel-parser`, `babel-types`
  * [#15539](https://github.com/babel/babel/pull/15539) fix: Remove `mixins` and `implements` for `DeclareInterface` and `InterfaceDeclaration` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))

#### :bug: Bug Fix
* `babel-core`, `babel-generator`, `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-react-jsx`
  * [#15515](https://github.com/babel/babel/pull/15515) fix: `)` position with `createParenthesizedExpressions` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-preset-env`
  * [#15580](https://github.com/babel/babel/pull/15580) Add syntax import meta to preset env ([@JLHwung](https://github.com/JLHwung))

#### :nail_care: Polish
* `babel-types`
  * [#15546](https://github.com/babel/babel/pull/15546) Improve the layout of generated validators ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-core`
  * [#15535](https://github.com/babel/babel/pull/15535) Use `lt` instead of `lte` to check TS version for .cts config ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :house: Internal
* `babel-core`
  * [#15575](https://github.com/babel/babel/pull/15575) Use synchronous `import.meta.resolve` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-helper-fixtures`, `babel-preset-typescript`
  * [#15568](https://github.com/babel/babel/pull/15568) Handle `.overrides` and `.env` when resolving plugins/presets from fixture options ([@JLHwung](https://github.com/JLHwung))
* `babel-helper-create-class-features-plugin`, `babel-helper-create-regexp-features-plugin`
  * [#15548](https://github.com/babel/babel/pull/15548) Use `semver` package to compare versions ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v7.21.4 (2023-03-31)

#### :bug: Bug Fix
* `babel-core`, `babel-helper-module-imports`, `babel-preset-typescript`
  * [#15478](https://github.com/babel/babel/pull/15478) Fix support for `import/export` in `.cts` files ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-generator`
  * [#15496](https://github.com/babel/babel/pull/15496) Fix compact printing of non-null assertion operators ([@rtsao](https://github.com/rtsao))

#### :nail_care: Polish
* `babel-helper-create-class-features-plugin`, `babel-plugin-proposal-class-properties`, `babel-plugin-transform-typescript`, `babel-traverse`
  * [#15427](https://github.com/babel/babel/pull/15427) Fix moving comments of removed nodes ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :house: Internal
* Other
  * [#15519](https://github.com/babel/babel/pull/15519) Update Prettier integration test ([@fisker](https://github.com/fisker))
* `babel-parser`
  * [#15510](https://github.com/babel/babel/pull/15510) refactor: introduce `lookaheadInLineCharCode` ([@JLHwung](https://github.com/JLHwung))
* `babel-code-frame`, `babel-highlight`
  * [#15499](https://github.com/babel/babel/pull/15499) Polish babel-code-frame highlight test ([@JLHwung](https://github.com/JLHwung))
## v7.21.3 (2023-03-14)

#### :eyeglasses: Spec Compliance
* `babel-parser`
  * [#15479](https://github.com/babel/babel/pull/15479) disallow mixins/implements in flow interface ([@JLHwung](https://github.com/JLHwung))

#### :bug: Bug Fix
* `babel-parser`
  * [#15423](https://github.com/babel/babel/pull/15423) [ts] Allow keywords in tuple labels ([@Harpica](https://github.com/Harpica))
* `babel-plugin-transform-typescript`
  * [#15489](https://github.com/babel/babel/pull/15489) Register `var` decls generated by `import ... =` TS transform ([@amoeller](https://github.com/amoeller))
  * [#15494](https://github.com/babel/babel/pull/15494) fix: Consider `export { type foo }` as type-only usage ([@magic-akari](https://github.com/magic-akari))

#### :nail_care: Polish
* `babel-traverse`, `babel-types`
  * [#15484](https://github.com/babel/babel/pull/15484) Skip node deprecation warnings when used by an old `@babel` package ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-generator`
  * [#15480](https://github.com/babel/babel/pull/15480) chore: Improve `jsonCompatibleStrings` deprecation ([@liuxingbaoyu](https://github.com/liuxingbaoyu))

#### :house: Internal
* [#15465](https://github.com/babel/babel/pull/15465) Add ESLint-readable package name ([@nzakas](https://github.com/nzakas))

#### :microscope: Output optimization
* `babel-plugin-transform-typescript`, `babel-preset-typescript`
  * [#15467](https://github.com/babel/babel/pull/15467) Optimize TS enums output ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
## v7.21.2 (2023-02-23)

#### :eyeglasses: Spec Compliance
* `babel-parser`
  * [#15439](https://github.com/babel/babel/pull/15439) fix: Throws on `new foo?.bar!()` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))

#### :nail_care: Polish
* `babel-traverse`, `babel-types`
  * [#15448](https://github.com/babel/babel/pull/15448) Reduce warnings for deprecated node aliases ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :house: Internal
* `babel-types`
  * [#15451](https://github.com/babel/babel/pull/15451) Update babel-types docs generator ([@JLHwung](https://github.com/JLHwung))

#### :microscope: Output optimization
* `babel-helper-module-transforms`, `babel-plugin-transform-modules-commonjs`
  * [#15449](https://github.com/babel/babel/pull/15449) Avoid unnecessary code for unused lazy imports ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v7.21.1 (2023-02-20)

#### :bug: Bug Fix
* `babel-core`, `babel-parser`
  * [#15440](https://github.com/babel/babel/pull/15440) Fix problems found while publishing 7.21.0 ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-generator`
  * [#15445](https://github.com/babel/babel/pull/15445) fix: Handling source maps without `sourcesContent` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))

#### :house: Internal
* [#15443](https://github.com/babel/babel/pull/15443) Use native GitHub markdown `Note` admonition ([@yardenshoham](https://github.com/yardenshoham))
## v7.21.0 (2023-02-20)

#### :rocket: New Feature
* `babel-core`, `babel-helper-create-class-features-plugin`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-private-methods`, `babel-plugin-proposal-private-property-in-object`
  * [#15435](https://github.com/babel/babel/pull/15435) feat: Implement `privateFieldsAsSymbols` assumption for classes ([@fwienber](https://github.com/fwienber))
* `babel-helper-create-regexp-features-plugin`, `babel-plugin-proposal-regexp-modifiers`, `babel-standalone`
  * [#15226](https://github.com/babel/babel/pull/15226) feat: Support regexp modifiers proposal ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-cli`, `babel-core`, `babel-generator`, `babel-plugin-transform-destructuring`, `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-react-jsx`, `babel-traverse`
  * [#15022](https://github.com/babel/babel/pull/15022) feat: Generate sourcemaps of friendly call frames ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-parser`, `babel-types`
  * [#15384](https://github.com/babel/babel/pull/15384) [ts] Support `const` modifier in type parameters ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-generator`, `babel-helpers`, `babel-parser`, `babel-plugin-proposal-decorators`, `babel-plugin-syntax-decorators`, `babel-runtime-corejs2`, `babel-runtime-corejs3`, `babel-runtime`
  * [#15405](https://github.com/babel/babel/pull/15405) Implement decorators as presented at `2023-01` TC39 meeting ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-parser`
  * [#15114](https://github.com/babel/babel/pull/15114) Parser option to allow `new.target` outside functions ([@overlookmotel](https://github.com/overlookmotel))
  * [#15320](https://github.com/babel/babel/pull/15320) Add `annexb: false` parser option to disable Annex B ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-core`
  * [#15283](https://github.com/babel/babel/pull/15283) feat: Support `.cts` as configuration file ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-generator`, `babel-parser`, `babel-plugin-transform-typescript`
  * [#15381](https://github.com/babel/babel/pull/15381) [ts] Support `export type * from` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :bug: Bug Fix
* `babel-plugin-transform-typescript`
  * [#15379](https://github.com/babel/babel/pull/15379) [ts5.0] Better inlining of constants in enums ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-core`
  * [#15366](https://github.com/babel/babel/pull/15366) handling circular/shared structures in deep-clone ([@azizghuloum](https://github.com/azizghuloum))
* `babel-helper-create-class-features-plugin`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-class-static-block`, `babel-plugin-proposal-private-methods`, `babel-plugin-transform-classes`, `babel-plugin-transform-new-target`
  * [#15406](https://github.com/babel/babel/pull/15406) Preserve class elements comments in class transform ([@JLHwung](https://github.com/JLHwung))
* `babel-parser`, `babel-plugin-transform-flow-comments`, `babel-plugin-transform-flow-strip-types`, `babel-types`
  * [#15414](https://github.com/babel/babel/pull/15414) [ts] Fix restrictions for optional parameters ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :nail_care: Polish
* `babel-parser`
  * [#15400](https://github.com/babel/babel/pull/15400) polish: improve "`await` as identifier" error in modules ([@JLHwung](https://github.com/JLHwung))

#### :house: Internal
* `babel-core`
  * [#15137](https://github.com/babel/babel/pull/15137) Improve CJS compat with ESM-based `@babel/core` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :microscope: Output optimization
* `babel-plugin-transform-typescript`
  * [#15418](https://github.com/babel/babel/pull/15418) [ts] Handle exponentiation operator in constant folding ([@ehoogeveen-medweb](https://github.com/ehoogeveen-medweb))

## v7.20.15 (2023-02-02)

#### :eyeglasses: Spec Compliance
* `babel-parser`
  * [#15391](https://github.com/babel/babel/pull/15391) Disallow await as bound name in using declaration ([@JLHwung](https://github.com/JLHwung))
* `babel-generator`, `babel-parser`, `babel-plugin-proposal-export-namespace-from`
  * [#15385](https://github.com/babel/babel/pull/15385) Disallows specifiers after export * as ns ([@JLHwung](https://github.com/JLHwung))

#### :bug: Bug Fix
* `babel-plugin-transform-block-scoping`
  * [#15398](https://github.com/babel/babel/pull/15398) fix: Loop was converted wrong ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-parser`
  * [#15377](https://github.com/babel/babel/pull/15377) fix: `new (foo?.bar)()` incorrectly throws exception `OptionalChainingNoNew` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
## v7.20.14 (2023-01-27)

#### :bug: Bug Fix
* `babel-plugin-transform-block-scoping`
  * [#15361](https://github.com/babel/babel/pull/15361) fix: Identifiers in the loop are not renamed ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-cli`, `babel-core`, `babel-generator`, `babel-helper-transform-fixture-test-runner`, `babel-plugin-transform-destructuring`, `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-react-jsx`, `babel-traverse`
  * [#15365](https://github.com/babel/babel/pull/15365) fix: Properly generate source maps for manually added multi-line content ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
## v7.20.13 (2023-01-21)

#### :bug: Bug Fix
* `babel-helpers`, `babel-plugin-proposal-decorators`, `babel-runtime-corejs2`, `babel-runtime-corejs3`, `babel-runtime`
  * [#15332](https://github.com/babel/babel/pull/15332) Ensure class decorators can access decorated non-static members ([@JLHwung](https://github.com/JLHwung))
* `babel-plugin-transform-typescript`
  * [#15349](https://github.com/babel/babel/pull/15349) fix: Preserve `import {type T} from 'x'` when `onlyRemoveTypeImports:true` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
  * [#15344](https://github.com/babel/babel/pull/15344) fix: Properties that are `abstract` should not be initialized. ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-parser`
  * [#15338](https://github.com/babel/babel/pull/15338) Allow negative number in ambient const initializer ([@JLHwung](https://github.com/JLHwung))

#### :leftwards_arrow_with_hook: Revert
* `babel-plugin-transform-react-inline-elements`, `babel-plugin-transform-react-jsx-development`, `babel-plugin-transform-react-jsx`
  * [#15355](https://github.com/babel/babel/pull/15355) Reverts "Re-use common JSX element transform for <>...</>" ([@JLHwung](https://github.com/JLHwung))
## v7.20.12 (2023-01-04)

#### :bug: Bug Fix
* `babel-traverse`
  * [#15224](https://github.com/babel/babel/pull/15224) Fix `TaggedTemplateLiteral` evaluation ([@nmn](https://github.com/nmn))
* `babel-helper-create-class-features-plugin`, `babel-plugin-proposal-class-properties`
  * [#15312](https://github.com/babel/babel/pull/15312) fix: `delete this` in static class properties initialization ([@SuperSodaSea](https://github.com/SuperSodaSea))

#### :nail_care: Polish
* `babel-traverse`
  * [#15313](https://github.com/babel/babel/pull/15313) Implement support for evaluating computed properties. ([@JBYoshi](https://github.com/JBYoshi))
## v7.20.11 (2022-12-23)

#### :eyeglasses: Spec Compliance
* `babel-helper-module-transforms`, `babel-plugin-proposal-dynamic-import`, `babel-plugin-transform-modules-amd`, `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-modules-systemjs`
  * [#15290](https://github.com/babel/babel/pull/15290) Return rejected promise when stringify import specifier throws ([@SuperSodaSea](https://github.com/SuperSodaSea))

#### :bug: Bug Fix
* `babel-plugin-transform-block-scoping`
  * [#15309](https://github.com/babel/babel/pull/15309) Fix for binding shadowing outer var with loop closure ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v7.20.10 (2022-12-23)

#### :bug: Bug Fix
* `babel-traverse`
  * [#15305](https://github.com/babel/babel/pull/15305) fix: `guessExecutionStatusRelativeTo` exception ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
## v7.20.9 (2022-12-23)

#### :bug: Bug Fix
* `babel-plugin-transform-block-scoping`
  * [#15303](https://github.com/babel/babel/pull/15303) fix: Do not throw exceptions when scope information is corrupted ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
## v7.20.8 (2022-12-22)

#### :bug: Bug Fix
* `babel-plugin-transform-block-scoping`
  * [#15301](https://github.com/babel/babel/pull/15301) fix: `transform-block-scoping` accesses properties of `null` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-plugin-proposal-class-properties`, `babel-traverse`
  * [#15294](https://github.com/babel/babel/pull/15294) Properly transpile exported classes that shadowed builtins ([@JLHwung](https://github.com/JLHwung))
## v7.20.7 (2022-12-22)

#### :eyeglasses: Spec Compliance
* `babel-helper-member-expression-to-functions`, `babel-helper-replace-supers`, `babel-plugin-proposal-class-properties`, `babel-plugin-transform-classes`
  * [#15223](https://github.com/babel/babel/pull/15223) fix: Deleting super property should throw ([@SuperSodaSea](https://github.com/SuperSodaSea))
* `babel-helpers`, `babel-plugin-proposal-class-properties`, `babel-plugin-transform-classes`, `babel-plugin-transform-object-super`
  * [#15241](https://github.com/babel/babel/pull/15241) fix: Throw correct error types from sed ant class TDZ helpers ([@SuperSodaSea](https://github.com/SuperSodaSea))

#### :bug: Bug Fix
* `babel-parser`, `babel-plugin-transform-typescript`
  * [#15209](https://github.com/babel/babel/pull/15209) fix: Support auto accessors with TypeScript annotations ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-traverse`
  * [#15287](https://github.com/babel/babel/pull/15287) Fix `.parentPath` after rename in `SwitchCase` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-transform-typescript`, `babel-traverse`
  * [#15284](https://github.com/babel/babel/pull/15284) fix: Ts import type and func with duplicate name ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-plugin-transform-block-scoping`
  * [#15278](https://github.com/babel/babel/pull/15278) Fix tdz analysis for reassigned captured for bindings ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-proposal-async-generator-functions`, `babel-preset-env`
  * [#15235](https://github.com/babel/babel/pull/15235) fix: Transform `for await` with shadowed variables ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-generator`, `babel-plugin-proposal-optional-chaining`
  * [#15258](https://github.com/babel/babel/pull/15258) fix: Correctly generate `(a ?? b) as T` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-plugin-transform-react-jsx`, `babel-types`
  * [#15233](https://github.com/babel/babel/pull/15233) fix: Emit correct sourcemap ranges for `JSXText` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-core`, `babel-helpers`, `babel-plugin-transform-computed-properties`, `babel-runtime-corejs2`, `babel-runtime-corejs3`, `babel-runtime`
  * [#15232](https://github.com/babel/babel/pull/15232) fix: Computed properties should keep original definition order ([@SuperSodaSea](https://github.com/SuperSodaSea))
* `babel-helper-member-expression-to-functions`, `babel-helper-replace-supers`, `babel-plugin-proposal-class-properties`, `babel-plugin-transform-classes`
  * [#15223](https://github.com/babel/babel/pull/15223) fix: Deleting super property should throw ([@SuperSodaSea](https://github.com/SuperSodaSea))
* `babel-generator`
  * [#15216](https://github.com/babel/babel/pull/15216) fix: Print newlines for leading Comments of `TSEnumMember` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))

#### :nail_care: Polish
* `babel-plugin-transform-block-scoping`, `babel-traverse`
  * [#15275](https://github.com/babel/babel/pull/15275) Improve relative execution tracking in fn exprs ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :house: Internal
* `babel-helper-define-map`, `babel-plugin-transform-property-mutators`
  * [#15274](https://github.com/babel/babel/pull/15274) Inline & simplify `@babel/helper-define-map` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-core`, `babel-plugin-proposal-class-properties`, `babel-plugin-transform-block-scoping`, `babel-plugin-transform-classes`, `babel-plugin-transform-destructuring`, `babel-plugin-transform-parameters`, `babel-plugin-transform-regenerator`, `babel-plugin-transform-runtime`, `babel-preset-env`, `babel-traverse`
  * [#15200](https://github.com/babel/babel/pull/15200) Rewrite `transform-block-scoping` plugin ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :running_woman: Performance
* `babel-helper-compilation-targets`
  * [#15228](https://github.com/babel/babel/pull/15228) perf: Speed up `getTargets` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
## v7.20.6 (2022-11-28)

#### :bug: Bug Fix
* `babel-helpers`
  * [#15231](https://github.com/babel/babel/pull/15231) Update `checkInRHS` helper min version ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v7.20.5 (2022-11-28)

#### :eyeglasses: Spec Compliance
* `babel-helpers`, `babel-plugin-transform-destructuring`, `babel-plugin-transform-modules-commonjs`, `babel-preset-env`, `babel-runtime-corejs2`, `babel-runtime-corejs3`, `babel-runtime`, `babel-traverse`
  * [#15183](https://github.com/babel/babel/pull/15183) Improve array destructuring spec compliance ([@SuperSodaSea](https://github.com/SuperSodaSea))
* `babel-cli`, `babel-helpers`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-class-static-block`, `babel-plugin-transform-classes`, `babel-plugin-transform-runtime`, `babel-preset-env`
  * [#15182](https://github.com/babel/babel/pull/15182) fix: apply toPropertyKey when defining class members ([@JLHwung](https://github.com/JLHwung))
* `babel-helper-create-class-features-plugin`, `babel-helpers`, `babel-plugin-proposal-decorators`, `babel-plugin-proposal-private-property-in-object`, `babel-preset-env`, `babel-runtime-corejs2`, `babel-runtime-corejs3`, `babel-runtime`
  * [#15133](https://github.com/babel/babel/pull/15133) fix: validate rhs of `in` when transpiling `#p in C` ([@JLHwung](https://github.com/JLHwung))

#### :bug: Bug Fix
* `babel-parser`
  * [#15225](https://github.com/babel/babel/pull/15225) Parse `using[foo]` as computed member expression ([@JLHwung](https://github.com/JLHwung))
  * [#15207](https://github.com/babel/babel/pull/15207) Export `ParseResult` type ([@davydof](https://github.com/davydof))
  * [#15198](https://github.com/babel/babel/pull/15198) fix: parse `import module, ...` ([@JLHwung](https://github.com/JLHwung))
* `babel-helper-wrap-function`, `babel-preset-env`, `babel-traverse`
  * [#15181](https://github.com/babel/babel/pull/15181) fix: Edge cases for async functions and `noNewArrow` assumption ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-plugin-transform-arrow-functions`, `babel-plugin-transform-parameters`, `babel-traverse`
  * [#15163](https://github.com/babel/babel/pull/15163) fix: Throw error when compiling `super()` in arrow functions with default / rest parameters ([@SuperSodaSea](https://github.com/SuperSodaSea))
* `babel-helpers`, `babel-node`, `babel-plugin-proposal-async-generator-functions`, `babel-plugin-transform-regenerator`, `babel-preset-env`, `babel-runtime-corejs2`, `babel-runtime-corejs3`, `babel-runtime`
  * [#15194](https://github.com/babel/babel/pull/15194) fix: Bump `regenerator` and add tests ([@SuperSodaSea](https://github.com/SuperSodaSea))
* `babel-helper-create-regexp-features-plugin`
  * [#15192](https://github.com/babel/babel/pull/15192) fix: Update `regjsparser` for `@babel/standalone` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-parser`, `babel-types`
  * [#15109](https://github.com/babel/babel/pull/15109) fix: Babel 8 types ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-generator`
  * [#15143](https://github.com/babel/babel/pull/15143) Don't print inner comments as leading when wrapping in `(``)` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-transform-block-scoping`, `babel-traverse`
  * [#15167](https://github.com/babel/babel/pull/15167) Register `switch`'s `discriminant` in the outer scope ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :nail_care: Polish
* `babel-generator`
  * [#15173](https://github.com/babel/babel/pull/15173) Improve generator behavior when `comments:false` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-plugin-transform-block-scoping`
  * [#15164](https://github.com/babel/babel/pull/15164) Only extract IDs for TDZ checks in assign when necessary ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :house: Internal
* `babel-core`, `babel-parser`
  * [#15202](https://github.com/babel/babel/pull/15202) Bump typescript to 4.9.3 ([@JLHwung](https://github.com/JLHwung))
## v7.20.4 (2022-11-08)

#### :bug: Bug Fix
* `babel-generator`
  * [#15160](https://github.com/babel/babel/pull/15160) Fix printing of comments before `=>` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-generator`, `babel-plugin-transform-typescript`
  * [#15144](https://github.com/babel/babel/pull/15144) Falback to printing inner comments as trailing ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v7.20.3 (2022-11-07)

#### :bug: Bug Fix
* `babel-generator`
  * [#15135](https://github.com/babel/babel/pull/15135) Don't convert line comments containing `*/` to block comments ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-plugin-transform-parameters`
  * [#15146](https://github.com/babel/babel/pull/15146) Fix compilation of parameters in async generators ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-parser`
  * [#15134](https://github.com/babel/babel/pull/15134) fix: support await as for-of-lhs ([@JLHwung](https://github.com/JLHwung))
## v7.20.2 (2022-11-04)

#### :bug: Bug Fix
* `babel-core`, `babel-helper-create-class-features-plugin`, `babel-helper-module-transforms`, `babel-helper-plugin-utils`, `babel-helper-simple-access`, `babel-node`, `babel-plugin-transform-block-scoping`, `babel-plugin-transform-classes`, `babel-plugin-transform-react-constant-elements`, `babel-preset-env`, `babel-standalone`, `babel-types`
  * [#15124](https://github.com/babel/babel/pull/15124) fix: `@babel/node` repl and enable `no-use-before-define` rule ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-plugin-transform-typescript`
  * [#15121](https://github.com/babel/babel/pull/15121) fix: `tsSatisfiesExpression` check with different duplicated `@babel/types` versions ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-parser`
  * [#15094](https://github.com/babel/babel/pull/15094) fix: `parser` typings for plugins ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-generator`
  * [#15118](https://github.com/babel/babel/pull/15118) Improve printing of [no LineTerminator here] with comments ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-proposal-decorators`, `babel-plugin-proposal-object-rest-spread`, `babel-plugin-transform-jscript`
  * [#15113](https://github.com/babel/babel/pull/15113) fix: wrap anonymous class expression within statement ([@JLHwung](https://github.com/JLHwung))
* `babel-plugin-transform-destructuring`
  * [#15104](https://github.com/babel/babel/pull/15104) fix: Destructuring exceptions `for ( let { } = 0 ; 0 ; ) ` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
## v7.20.1 (2022-11-01)

#### :bug: Bug Fix
* `babel-plugin-proposal-async-generator-functions`
  * [#15103](https://github.com/babel/babel/pull/15103) fix: Compile re-declare var in `init` and `body` of `for await` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-plugin-proposal-class-properties`, `babel-traverse`
  * [#15106](https://github.com/babel/babel/pull/15106) Do not mark `in` and `instanceof` as constant expressions ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-helpers`, `babel-plugin-proposal-duplicate-named-capturing-groups-regex`, `babel-plugin-transform-named-capturing-groups-regex`
  * [#15092](https://github.com/babel/babel/pull/15092) Support `indices.groups` when compiling named groups in regexps ([@ptomato](https://github.com/ptomato))
* `babel-parser`
  * [#15102](https://github.com/babel/babel/pull/15102) fix: Parse re-declare var in class static body  ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
  * [#15096](https://github.com/babel/babel/pull/15096) fix: `a satisfies b` as lval ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-helpers`, `babel-plugin-proposal-duplicate-named-capturing-groups-regex`
  * [#15090](https://github.com/babel/babel/pull/15090) Handle multiple named groups in wrapRegExp replace() ([@ptomato](https://github.com/ptomato))
* `babel-plugin-transform-async-to-generator`, `babel-plugin-transform-parameters`, `babel-preset-env`
  * [#15081](https://github.com/babel/babel/pull/15081) Move the generator body to a gen IIFE when compiling its params ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :house: Internal
* `babel-generator`
  * [#15080](https://github.com/babel/babel/pull/15080) Automatically print inner comments ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v7.20.0 (2022-10-27)

#### :rocket: New Feature
* `babel-compat-data`, `babel-helper-compilation-targets`, `babel-preset-env`
  * [#14944](https://github.com/babel/babel/pull/14944) Add `deno` compilation target ([@JLHwung](https://github.com/JLHwung))
* `babel-plugin-syntax-typescript`
  * [#14923](https://github.com/babel/babel/pull/14923) Expose `dts` option in `@babel/plugin-syntax-typescript` ([@oceandrama](https://github.com/oceandrama))
* `babel-generator`, `babel-parser`, `babel-plugin-syntax-explicit-resource-management`, `babel-plugin-transform-block-scoping`, `babel-plugin-transform-destructuring`, `babel-standalone`, `babel-traverse`, `babel-types`
  * [#14968](https://github.com/babel/babel/pull/14968) Parse `using` declaration (explicit resource management) ([@JLHwung](https://github.com/JLHwung))
* `babel-generator`, `babel-parser`, `babel-plugin-syntax-import-reflection`, `babel-standalone`, `babel-types`
  * [#14926](https://github.com/babel/babel/pull/14926) Parse import reflection ([@JLHwung](https://github.com/JLHwung))
* `babel-generator`, `babel-helper-skip-transparent-expression-wrappers`, `babel-parser`, `babel-plugin-transform-typescript`, `babel-traverse`, `babel-types`
  * [#14211](https://github.com/babel/babel/pull/14211) [ts] Add support for `expr satisfies Type` expressions ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :bug: Bug Fix
* `babel-generator`, `babel-parser`
  * [#15032](https://github.com/babel/babel/pull/15032) Fix handling of comments with decorators before `export` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-generator`
  * [#15008](https://github.com/babel/babel/pull/15008) Support more inner comments ([@JLHwung](https://github.com/JLHwung))

#### :house: Internal
* `babel-helpers`, `babel-node`, `babel-plugin-proposal-async-generator-functions`, `babel-plugin-transform-regenerator`, `babel-preset-env`, `babel-runtime-corejs2`, `babel-runtime-corejs3`, `babel-runtime`
  * [#15078](https://github.com/babel/babel/pull/15078) Update `regenerator-runtime` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v7.19.6 (2022-10-20)

#### :eyeglasses: Spec Compliance
* `babel-plugin-proposal-decorators`
  * [#15059](https://github.com/babel/babel/pull/15059) Ensure non-static decorators are applied when a class is instantiated. ([@JLHwung](https://github.com/JLHwung))

#### :bug: Bug Fix
* `babel-parser`
  * [#15062](https://github.com/babel/babel/pull/15062) Fix parsing of block comments nested in flow comments ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#15052](https://github.com/babel/babel/pull/15052) fix: improve module block program location tracking ([@JLHwung](https://github.com/JLHwung))
* `babel-plugin-transform-runtime`, `babel-runtime-corejs2`, `babel-runtime-corejs3`
  * [#15060](https://github.com/babel/babel/pull/15060) Ensure `@babel/runtime-corejs3/core-js/*.js` can be imported on Node.js 17+ ([@JLHwung](https://github.com/JLHwung))
* `babel-preset-env`, `babel-traverse`
  * [#15043](https://github.com/babel/babel/pull/15043) fix: preserve this for `super.*` template tags ([@liuxingbaoyu](https://github.com/liuxingbaoyu))

#### :nail_care: Polish
* `babel-generator`, `babel-plugin-transform-flow-comments`
  * [#15037](https://github.com/babel/babel/pull/15037) Improve generation of comments without location ([@liuxingbaoyu](https://github.com/liuxingbaoyu))

#### :memo: Documentation
* `babel-standalone`
  * [#15055](https://github.com/babel/babel/pull/15055) Fix missing `transformSync` function name ([@lomirus](https://github.com/lomirus))

#### :house: Internal
* `babel-parser`
  * [#15056](https://github.com/babel/babel/pull/15056) Use `startLoc.index` instead of carrying around `start` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* Other
  * [#15035](https://github.com/babel/babel/pull/15035) chore: Update yarn 3.2.4 ([@liuxingbaoyu](https://github.com/liuxingbaoyu))

#### :running_woman: Performance
* `babel-core`, `babel-standalone`
  * [#15023](https://github.com/babel/babel/pull/15023) Don't bundle unnecessary plugins in `@babel/standalone` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v7.19.5 (2022-10-10)

#### :bug: Bug Fix
* `babel-generator`
  * [#15031](https://github.com/babel/babel/pull/15031) Fix "Cannot read properties of undefined" regression ([@farewell-zy](https://github.com/farewell-zy))
## v7.19.4 (2022-10-10)

#### :eyeglasses: Spec Compliance
* `babel-plugin-transform-block-scoping`
  * [#15019](https://github.com/babel/babel/pull/15019) fix: check constant violation inside loops ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-helpers`, `babel-plugin-proposal-destructuring-private`, `babel-plugin-proposal-object-rest-spread`, `babel-plugin-transform-destructuring`
  * [#14985](https://github.com/babel/babel/pull/14985) Disallow rest object destructuring of null/undefined ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :bug: Bug Fix
* `babel-plugin-transform-react-jsx-development`, `babel-plugin-transform-typescript`, `babel-types`
  * [#14109](https://github.com/babel/babel/pull/14109) Fix: properly scope variables in TSModuleBlock ([@The-x-Theorist](https://github.com/The-x-Theorist))
* `babel-plugin-transform-destructuring`, `babel-plugin-transform-react-constant-elements`, `babel-traverse`
  * [#15027](https://github.com/babel/babel/pull/15027) fix: mark `var` declarations in loops as not constant ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-helper-string-parser`, `babel-parser`, `babel-types`
  * [#14964](https://github.com/babel/babel/pull/14964) Never throw for invalid escapes in tagged templates ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-generator`, `babel-parser`
  * [#14980](https://github.com/babel/babel/pull/14980) Improve module expression parsing/printing ([@JLHwung](https://github.com/JLHwung))
* `babel-plugin-transform-destructuring`
  * [#14984](https://github.com/babel/babel/pull/14984) Fix holes handling in optimized array destructuring ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :nail_care: Polish
* `babel-cli`, `babel-core`, `babel-generator`, `babel-helper-create-class-features-plugin`, `babel-helper-fixtures`, `babel-helper-simple-access`, `babel-helper-transform-fixture-test-runner`, `babel-helpers`, `babel-plugin-bugfix-safari-id-destructuring-collision-in-function-expression`, `babel-plugin-bugfix-v8-spread-parameters-in-optional-chaining`, `babel-plugin-external-helpers`, `babel-plugin-proposal-async-do-expressions`, `babel-plugin-proposal-async-generator-functions`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-class-static-block`, `babel-plugin-proposal-decorators`, `babel-plugin-proposal-destructuring-private`, `babel-plugin-proposal-do-expressions`, `babel-plugin-proposal-duplicate-named-capturing-groups-regex`, `babel-plugin-proposal-dynamic-import`, `babel-plugin-proposal-function-bind`, `babel-plugin-proposal-function-sent`, `babel-plugin-proposal-json-strings`, `babel-plugin-proposal-logical-assignment-operators`, `babel-plugin-proposal-nullish-coalescing-operator`, `babel-plugin-proposal-object-rest-spread`, `babel-plugin-proposal-optional-chaining`, `babel-plugin-proposal-partial-application`, `babel-plugin-proposal-pipeline-operator`, `babel-plugin-proposal-private-methods`, `babel-plugin-proposal-private-property-in-object`, `babel-plugin-proposal-record-and-tuple`, `babel-plugin-syntax-typescript`, `babel-plugin-transform-arrow-functions`, `babel-plugin-transform-async-to-generator`, `babel-plugin-transform-block-scoping`, `babel-plugin-transform-classes`, `babel-plugin-transform-computed-properties`, `babel-plugin-transform-destructuring`, `babel-plugin-transform-duplicate-keys`, `babel-plugin-transform-exponentiation-operator`, `babel-plugin-transform-flow-comments`, `babel-plugin-transform-flow-strip-types`, `babel-plugin-transform-for-of`, `babel-plugin-transform-function-name`, `babel-plugin-transform-jscript`, `babel-plugin-transform-modules-amd`, `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-modules-systemjs`, `babel-plugin-transform-modules-umd`, `babel-plugin-transform-new-target`, `babel-plugin-transform-object-super`, `babel-plugin-transform-parameters`, `babel-plugin-transform-proto-to-assign`, `babel-plugin-transform-react-constant-elements`, `babel-plugin-transform-react-inline-elements`, `babel-plugin-transform-react-jsx-development`, `babel-plugin-transform-react-jsx-self`, `babel-plugin-transform-react-jsx`, `babel-plugin-transform-react-pure-annotations`, `babel-plugin-transform-regenerator`, `babel-plugin-transform-runtime`, `babel-plugin-transform-shorthand-properties`, `babel-plugin-transform-spread`, `babel-plugin-transform-strict-mode`, `babel-plugin-transform-template-literals`, `babel-plugin-transform-typeof-symbol`, `babel-plugin-transform-typescript`, `babel-plugin-transform-unicode-escapes`, `babel-preset-env`, `babel-preset-react`, `babel-preset-typescript`, `babel-runtime-corejs2`, `babel-runtime-corejs3`, `babel-runtime`, `babel-traverse`
  * [#14979](https://github.com/babel/babel/pull/14979) Improve comments generation ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-cli`, `babel-core`, `babel-generator`, `babel-helper-fixtures`, `babel-helper-transform-fixture-test-runner`, `babel-plugin-transform-destructuring`, `babel-plugin-transform-modules-commonjs`, `babel-traverse`
  * [#14967](https://github.com/babel/babel/pull/14967) Improve source map generation ([@liuxingbaoyu](https://github.com/liuxingbaoyu))

#### :house: Internal
* Other
  * [#15001](https://github.com/babel/babel/pull/15001) Run test262 again ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-compat-data`, `babel-preset-env`
  * [#14976](https://github.com/babel/babel/pull/14976) Internally rename `proposal-*` to `transform-*` in preset-env ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v7.19.3 (2022-09-27)

#### :bug: Bug Fix
* `babel-plugin-proposal-decorators`
  * [#8566](https://github.com/babel/babel/pull/8566) Correctly update bindings of decorated class declarations ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-parser`
  * [#14974](https://github.com/babel/babel/pull/14974) fix: Normal parsing of `JSXText` following `JSXSpreadChild` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
  * [#14941](https://github.com/babel/babel/pull/14941) fix: Support local exports in TS `declare module`s ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
  * [#14940](https://github.com/babel/babel/pull/14940) fix: allow ts redeclaration with `import =` and `var` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-generator`
  * [#14962](https://github.com/babel/babel/pull/14962) Fix printing of Flow internal slot functions ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-cli`
  * [#14950](https://github.com/babel/babel/pull/14950) Emit `@babel/cli` source maps based on configuration files ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-plugin-transform-typescript`
  * [#14946](https://github.com/babel/babel/pull/14946) fix: ts exported vars are shadowed by `declare` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))

#### :nail_care: Polish
* `babel-core`
  * [#14954](https://github.com/babel/babel/pull/14954) Optional filename when preset uses fn test/include/exclude ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :house: Internal
* `babel-helper-compilation-targets`, `babel-helper-transform-fixture-test-runner`, `babel-parser`, `babel-preset-env`, `babel-traverse`
  * [#14961](https://github.com/babel/babel/pull/14961) chore: use `c8` for coverage testing ([@liuxingbaoyu](https://github.com/liuxingbaoyu))

#### :microscope: Output optimization
* `babel-plugin-transform-typescript`
  * [#14952](https://github.com/babel/babel/pull/14952) [ts] remove nested `declare namespace` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
## v7.19.2 (2022-09-15)

#### :bug: Bug Fix
* `babel-runtime-corejs2`
  * [#14937](https://github.com/babel/babel/pull/14937) fix: runtime-corejs 2 should depend on core-js@2 ([@JLHwung](https://github.com/JLHwung))
## v7.19.1 (2022-09-14)

#### :bug: Bug Fix
* `babel-core`
  * [#14930](https://github.com/babel/babel/pull/14930) Avoid fancy stack traces size computation ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-traverse`
  * [#14932](https://github.com/babel/babel/pull/14932) fix: isForAwaitStatement is broken ([@JLHwung](https://github.com/JLHwung))
* Other
  * [#14872](https://github.com/babel/babel/pull/14872) Use the built-in class fields and private methods rules in ESLint 8 ([@JLHwung](https://github.com/JLHwung))
* `babel-parser`
  * [#14920](https://github.com/babel/babel/pull/14920) [estree] attach comments after directives at the end of file ([@hegemonic](https://github.com/hegemonic))
  * [#14900](https://github.com/babel/babel/pull/14900) [ts] allow redeclaring a var/type with the same name as import ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-plugin-transform-typescript`
  * [#14913](https://github.com/babel/babel/pull/14913) fix: do not remove type import used in TS import= ([@JLHwung](https://github.com/JLHwung))
## v7.19.0 (2022-09-05)

#### :eyeglasses: Spec Compliance
* `babel-parser`
  * [#14666](https://github.com/babel/babel/pull/14666) Support private name in decorator member expression ([@JLHwung](https://github.com/JLHwung))
* `babel-helpers`, `babel-plugin-proposal-async-generator-functions`, `babel-preset-env`, `babel-runtime-corejs2`, `babel-runtime-corejs3`, `babel-runtime`
  * [#14877](https://github.com/babel/babel/pull/14877)  Remove one promise tick in yield* (tc39/ecma262#2819)  ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :rocket: New Feature
* `babel-generator`, `babel-helpers`, `babel-parser`, `babel-plugin-proposal-decorators`, `babel-plugin-syntax-decorators`, `babel-runtime-corejs2`, `babel-runtime-corejs3`, `babel-runtime`
  * [#14836](https://github.com/babel/babel/pull/14836) Add 2022-03 decorators version (stage 3) ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-parser`
  * [#14695](https://github.com/babel/babel/pull/14695) [parser] Make `decoratorsBeforeExport` default to `false` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-generator`, `babel-parser`
  * [#14744](https://github.com/babel/babel/pull/14744) Default to hash syntax for Record&Tuple ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-standalone`
  * [#14867](https://github.com/babel/babel/pull/14867) feat: add proposal-record-and-tuple to standalone ([@JLHwung](https://github.com/JLHwung))
* `babel-helper-create-regexp-features-plugin`, `babel-helpers`, `babel-plugin-proposal-duplicate-named-capturing-groups-regex`, `babel-plugin-transform-named-capturing-groups-regex`, `babel-standalone`
  * [#14805](https://github.com/babel/babel/pull/14805) Add support for the duplicate named capturing groups proposal ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :bug: Bug Fix
* `babel-helper-function-name`, `babel-helper-wrap-function`, `babel-plugin-transform-classes`
  * [#14897](https://github.com/babel/babel/pull/14897) Fix: class transform should not drop method definition when key contains non-BMP characters ([@JLHwung](https://github.com/JLHwung))
* `babel-plugin-transform-typescript`
  * [#14890](https://github.com/babel/babel/pull/14890) fix: TS plugin shouldn't remove `#privateField!` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-parser`
  * [#14819](https://github.com/babel/babel/pull/14819) fix: parse a&lt;b>>>c as a<(b>>>c) ([@JLHwung](https://github.com/JLHwung))
* `babel-helper-builder-react-jsx`
  * [#14886](https://github.com/babel/babel/pull/14886) Fix helper-builder-react-jsx compat with Babel 7.9 ([@JLHwung](https://github.com/JLHwung))

#### :nail_care: Polish
* `babel-core`
  * [#11612](https://github.com/babel/babel/pull/11612) Make error message prefixes more descriptive ([@eps1lon](https://github.com/eps1lon))
  * [#11554](https://github.com/babel/babel/pull/11554) Hide internal `@babel/core` functions in config errors ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :memo: Documentation
* [#14895](https://github.com/babel/babel/pull/14895) docs: remove david-dm from README ([@SukkaW](https://github.com/SukkaW))

#### :house: Internal
* `babel-standalone`
  * [#14863](https://github.com/babel/babel/pull/14863) ship @babel/standalone source maps ([@JLHwung](https://github.com/JLHwung))
* `babel-core`, `babel-parser`, `babel-traverse`
  * [#14880](https://github.com/babel/babel/pull/14880) Update typescript to 4.8 ([@JLHwung](https://github.com/JLHwung))
## v7.18.13 (2022-08-22)

#### :bug: Bug Fix
* `babel-generator`
  * [#14869](https://github.com/babel/babel/pull/14869) fix: jsx with `retainLines` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-core`
  * [#14843](https://github.com/babel/babel/pull/14843) Fix a race condition in `@babel/core` ([@JLHwung](https://github.com/JLHwung))
* `babel-plugin-transform-destructuring`
  * [#14841](https://github.com/babel/babel/pull/14841) fix: Destructuring exceptions in nested `for` expressions ([@liuxingbaoyu](https://github.com/liuxingbaoyu))

#### :nail_care: Polish
* `babel-traverse`
  * [#14833](https://github.com/babel/babel/pull/14833) Let `path.remove()` remove `IfStatement.alternate` ([@djpohly](https://github.com/djpohly))
  * [#14837](https://github.com/babel/babel/pull/14837) Add support for static evaluation of ?? operator ([@djpohly](https://github.com/djpohly))

#### :house: Internal
* [#14846](https://github.com/babel/babel/pull/14846) fix: Print build logs correctly ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
## v7.18.12 (2022-08-05)

#### :bug: Bug Fix
* `babel-plugin-transform-react-constant-elements`
  * [#14828](https://github.com/babel/babel/pull/14828) fix: react-cons-elem should not hoist router comp ([@JLHwung](https://github.com/JLHwung))
* `babel-generator`
  * [#14810](https://github.com/babel/babel/pull/14810) fix: Certain comments cause `generator` exceptions ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-plugin-transform-typescript`
  * [#14827](https://github.com/babel/babel/pull/14827) Fix: do not report global variables as injected binding  ([@JLHwung](https://github.com/JLHwung))
## v7.18.11 (2022-08-04)

#### :bug: Bug Fix
* `babel-helper-wrap-function`
  * [#14825](https://github.com/babel/babel/pull/14825) fix: helper-wrap-function compat with old traverse ([@JLHwung](https://github.com/JLHwung))

#### :house: Internal
* `babel-traverse`
  * [#14821](https://github.com/babel/babel/pull/14821) chore(traverse): fix some internal typescript types ([@danez](https://github.com/danez))
* `babel-parser`
  * [#14801](https://github.com/babel/babel/pull/14801) babel parser type improvements ([@zxbodya](https://github.com/zxbodya))
## v7.18.10 (2022-08-01)

#### :rocket: New Feature
* `babel-helper-string-parser`, `babel-types`
  * [#14757](https://github.com/babel/babel/pull/14757) feat: Automatically generate `cooked` for `templateElement` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))

#### :bug: Bug Fix
* `babel-parser`
  * [#14817](https://github.com/babel/babel/pull/14817) fix(parser): allow TS declare readonly fields with initializers ([@Josh-Cena](https://github.com/Josh-Cena))
* `babel-helper-string-parser`, `babel-parser`
  * [#14798](https://github.com/babel/babel/pull/14798) Fix position of errors in template literals after newlines ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-transform-typescript`
  * [#14774](https://github.com/babel/babel/pull/14774) fix: TS `declare class` in namespace should be removed ([@yimingjfe](https://github.com/yimingjfe))
* `babel-plugin-transform-react-jsx`
  * [#14759](https://github.com/babel/babel/pull/14759) fix: skip flattening spread object with __proto__ ([@JLHwung](https://github.com/JLHwung))
* `babel-generator`
  * [#14762](https://github.com/babel/babel/pull/14762) fix: Types containing comments generate invalid code ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-helper-wrap-function`, `babel-plugin-transform-async-to-generator`, `babel-traverse`
  * [#14752](https://github.com/babel/babel/pull/14752) Fix compiling async arrows in uncompiled class fields ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :house: Internal
* Other
  * [#14800](https://github.com/babel/babel/pull/14800) chore: Remove `.yarnrc` file ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
  * [#14802](https://github.com/babel/babel/pull/14802) chore: Fix coverage test ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
  * [#14671](https://github.com/babel/babel/pull/14671) feat: Make most `make` commands cross-platform ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
  * [#14790](https://github.com/babel/babel/pull/14790) enable typescript incremental builds ([@zxbodya](https://github.com/zxbodya))
* `babel-traverse`
  * [#14799](https://github.com/babel/babel/pull/14799) Restructure virtual types validator ([@JLHwung](https://github.com/JLHwung))
* `babel-cli`
  * [#14779](https://github.com/babel/babel/pull/14779) chore: expand prettier-e2e test and update typings/deps ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-parser`
  * [#14796](https://github.com/babel/babel/pull/14796) Make ParseError Much Simpler now that we can use TypeScript ([@tolmasky](https://github.com/tolmasky))
* `babel-core`, `babel-parser`
  * [#14785](https://github.com/babel/babel/pull/14785) chore: remove flow check scripts ([@JLHwung](https://github.com/JLHwung))
* `babel-cli`, `babel-core`, `babel-parser`, `babel-plugin-transform-unicode-escapes`, `babel-preset-env`, `babel-template`, `babel-traverse`
  * [#14783](https://github.com/babel/babel/pull/14783) Convert `@babel/parser` to TypeScript ([@JLHwung](https://github.com/JLHwung))
* `babel-helper-string-parser`, `babel-parser`
  * [#14772](https://github.com/babel/babel/pull/14772) Extract string parsing to a separate package ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-cli`, `babel-node`
  * [#14765](https://github.com/babel/babel/pull/14765) Enforce type checking on `babel-{cli,node}` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))

#### :microscope: Output optimization
* `babel-plugin-proposal-export-default-from`
  * [#14768](https://github.com/babel/babel/pull/14768) optimize: Simplify the `export-default-from` transform ([@magic-akari](https://github.com/magic-akari))
## v7.18.9 (2022-07-18)

#### :bug: Bug Fix
* `babel-plugin-transform-modules-systemjs`, `babel-types`
  * [#14763](https://github.com/babel/babel/pull/14763) fix: allow exporting `TSDeclareFunction` as default ([@zxbodya](https://github.com/zxbodya))
* `babel-generator`
  * [#14758](https://github.com/babel/babel/pull/14758) fix: `returnType` with comments generates incorrect code ([@liuxingbaoyu](https://github.com/liuxingbaoyu))

#### :nail_care: Polish
* `babel-cli`
  * [#14748](https://github.com/babel/babel/pull/14748) Print a message when the watcher of `babel-cli` is ready. ([@liuxingbaoyu](https://github.com/liuxingbaoyu))

#### :house: Internal
* `babel-core`, `babel-helper-remap-async-to-generator`, `babel-helpers`, `babel-parser`, `babel-plugin-transform-block-scoping`, `babel-preset-env`
  * [#13414](https://github.com/babel/babel/pull/13414) Prepare for compiling Babel to native ESM ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-helper-create-class-features-plugin`, `babel-helper-member-expression-to-functions`, `babel-helper-remap-async-to-generator`, `babel-helper-replace-supers`, `babel-helper-wrap-function`, `babel-helpers`, `babel-plugin-bugfix-v8-spread-parameters-in-optional-chaining`, `babel-plugin-proposal-decorators`, `babel-plugin-proposal-object-rest-spread`, `babel-plugin-proposal-optional-chaining`, `babel-plugin-transform-block-scoping`, `babel-plugin-transform-classes`, `babel-traverse`, `babel-types`
  * [#14739](https://github.com/babel/babel/pull/14739) Provide better parentPath typings ([@JLHwung](https://github.com/JLHwung))

#### :running_woman: Performance
* `babel-generator`
  * [#14701](https://github.com/babel/babel/pull/14701) perf: Improve generator perf ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
## v7.18.8 (2022-07-08)

#### :eyeglasses: Spec Compliance
* `babel-parser`, `babel-types`
  * [#14730](https://github.com/babel/babel/pull/14730) Misc fixes to `@babel/types` AST definitions ([@JLHwung](https://github.com/JLHwung))

#### :bug: Bug Fix
* `babel-plugin-transform-parameters`
  * [#14736](https://github.com/babel/babel/pull/14736) Inject IIFE when variables shadow binding in rest param ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-transform-classes`
  * [#14709](https://github.com/babel/babel/pull/14709) Fix compilation of nested `super(...)` calls ([@dbacarel](https://github.com/dbacarel))
* `babel-plugin-transform-for-of`, `babel-plugin-transform-spread`, `babel-traverse`, `babel-types`
  * [#14393](https://github.com/babel/babel/pull/14393) Support some TSTypes in the inferrer ([@JLHwung](https://github.com/JLHwung))
* `babel-helper-module-transforms`, `babel-plugin-transform-modules-commonjs`
  * [#14708](https://github.com/babel/babel/pull/14708) Unshadow `cjs` exports when transforming mutations ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :memo: Documentation
* [#14486](https://github.com/babel/babel/pull/14486) Fix test debugging instructions for contributors ([@conartist6](https://github.com/conartist6))

#### :house: Internal
* `babel-types`
  * [#14737](https://github.com/babel/babel/pull/14737) fix: deep clone shared AST field definitions ([@JLHwung](https://github.com/JLHwung))
* Other
  * [#14720](https://github.com/babel/babel/pull/14720) fix: support compiling monorepo on single-core CPU machines ([@JLHwung](https://github.com/JLHwung))
* `babel-helper-fixtures`, `babel-parser`
  * [#12619](https://github.com/babel/babel/pull/12619) Add json schema of fixture runner options ([@JLHwung](https://github.com/JLHwung))

#### :microscope: Output optimization
* `babel-plugin-transform-typescript`
  * [#14723](https://github.com/babel/babel/pull/14723) [optimizeConstEnums] Inline const enum if only exported as type ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v7.18.7 (2022-06-28)

#### :bug: Bug Fix
* `babel-types`
  * [#14706](https://github.com/babel/babel/pull/14706) fix: `@babel/types` exception in typescript project. ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
## v7.18.6 (2022-06-27)

#### :eyeglasses: Spec Compliance
* `babel-parser`
  * [#14650](https://github.com/babel/babel/pull/14650) [ts] Disallow property access after instantiation expression ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#14636](https://github.com/babel/babel/pull/14636) [ts] Allow `...<...>` followed by newline or binary operator ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-generator`, `babel-parser`, `babel-preset-env`, `babel-template`
  * [#14668](https://github.com/babel/babel/pull/14668) JSON modules should be imported with default ([@JLHwung](https://github.com/JLHwung))

#### :bug: Bug Fix
* `babel-helper-remap-async-to-generator`, `babel-plugin-proposal-async-generator-functions`
  * [#14391](https://github.com/babel/babel/pull/14391) Transform `await` in computed class keys ([@Yokubjon-J](https://github.com/Yokubjon-J))
* `babel-plugin-transform-parameters`
  * [#14694](https://github.com/babel/babel/pull/14694) fix: preserve function params type if possible ([@magic-akari](https://github.com/magic-akari))
* `babel-core`
  * [#14583](https://github.com/babel/babel/pull/14583) fix: Memory leak when deep cloning in `babel-core` ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-core`, `babel-helper-check-duplicate-nodes`, `babel-plugin-bugfix-safari-id-destructuring-collision-in-function-expression`, `babel-plugin-bugfix-v8-spread-parameters-in-optional-chaining`, `babel-plugin-proposal-destructuring-private`, `babel-plugin-proposal-optional-chaining`, `babel-plugin-transform-runtime`
  * [#14663](https://github.com/babel/babel/pull/14663) Fix `import { types } from "@babel/core"` with native ESM ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :house: Internal
* `babel-standalone`
  * [#14697](https://github.com/babel/babel/pull/14697) Add `proposal-unicode-sets-regex` to `@babel/standalone` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* Other
  * [#14687](https://github.com/babel/babel/pull/14687) chore: Update bench baselines ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-generator`, `babel-types`
  * [#14685](https://github.com/babel/babel/pull/14685) enable TS compiler option: strictBindCallApply ([@JLHwung](https://github.com/JLHwung))
* `babel-code-frame`, `babel-core`, `babel-generator`, `babel-helper-annotate-as-pure`, `babel-helper-builder-binary-assignment-operator-visitor`, `babel-helper-builder-react-jsx`, `babel-helper-check-duplicate-nodes`, `babel-helper-compilation-targets`, `babel-helper-create-class-features-plugin`, `babel-helper-create-regexp-features-plugin`, `babel-helper-define-map`, `babel-helper-explode-assignable-expression`, `babel-helper-fixtures`, `babel-helper-function-name`, `babel-helper-hoist-variables`, `babel-helper-member-expression-to-functions`, `babel-helper-module-imports`, `babel-helper-module-transforms`, `babel-helper-optimise-call-expression`, `babel-helper-plugin-test-runner`, `babel-helper-plugin-utils`, `babel-helper-remap-async-to-generator`, `babel-helper-replace-supers`, `babel-helper-simple-access`, `babel-helper-split-export-declaration`, `babel-helper-transform-fixture-test-runner`, `babel-helper-validator-option`, `babel-helper-wrap-function`, `babel-helpers`, `babel-highlight`, `babel-plugin-bugfix-v8-spread-parameters-in-optional-chaining`, `babel-plugin-external-helpers`, `babel-plugin-proposal-async-generator-functions`, `babel-plugin-proposal-class-static-block`, `babel-plugin-proposal-decorators`, `babel-plugin-proposal-destructuring-private`, `babel-plugin-proposal-function-bind`, `babel-plugin-proposal-function-sent`, `babel-plugin-proposal-json-strings`, `babel-plugin-proposal-object-rest-spread`, `babel-plugin-proposal-optional-chaining`, `babel-plugin-proposal-partial-application`, `babel-plugin-proposal-pipeline-operator`, `babel-plugin-proposal-private-property-in-object`, `babel-plugin-proposal-record-and-tuple`, `babel-plugin-syntax-typescript`, `babel-plugin-transform-block-scoped-functions`, `babel-plugin-transform-block-scoping`, `babel-plugin-transform-classes`, `babel-plugin-transform-computed-properties`, `babel-plugin-transform-destructuring`, `babel-plugin-transform-duplicate-keys`, `babel-plugin-transform-exponentiation-operator`, `babel-plugin-transform-flow-comments`, `babel-plugin-transform-flow-strip-types`, `babel-plugin-transform-for-of`, `babel-plugin-transform-function-name`, `babel-plugin-transform-modules-amd`, `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-modules-systemjs`, `babel-plugin-transform-modules-umd`, `babel-plugin-transform-object-super`, `babel-plugin-transform-parameters`, `babel-plugin-transform-property-mutators`, `babel-plugin-transform-proto-to-assign`, `babel-plugin-transform-react-constant-elements`, `babel-plugin-transform-react-display-name`, `babel-plugin-transform-react-inline-elements`, `babel-plugin-transform-react-jsx-compat`, `babel-plugin-transform-react-jsx-source`, `babel-plugin-transform-react-jsx`, `babel-plugin-transform-runtime`, `babel-plugin-transform-typescript`, `babel-plugin-transform-unicode-escapes`, `babel-preset-env`, `babel-preset-typescript`, `babel-standalone`, `babel-template`, `babel-traverse`, `babel-types`
  * [#14601](https://github.com/babel/babel/pull/14601) enable noImplicitAny ([@JLHwung](https://github.com/JLHwung))
* `babel-core`, `babel-helper-transform-fixture-test-runner`, `babel-plugin-transform-destructuring`
  * [#14659](https://github.com/babel/babel/pull/14659) Run Babel asynchronously in fixtures ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

## v7.18.5 (2022-06-13)

#### :bug: Bug Fix
* `babel-plugin-transform-new-target`
  * [#14611](https://github.com/babel/babel/pull/14611) fix: `new.target` with shadowed class name ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-plugin-transform-modules-systemjs`
  * [#14655](https://github.com/babel/babel/pull/14655) Fix named destructuring exports ([@underfin](https://github.com/underfin))

#### :memo: Documentation
* [#14332](https://github.com/babel/babel/pull/14332) docs: eslint-parser requireConfigFile behaviour ([@JLHwung](https://github.com/JLHwung))
* [#14619](https://github.com/babel/babel/pull/14619) Move v7 prereleases changelog to a separate file ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :house: Internal
* `babel-traverse`
  * [#14649](https://github.com/babel/babel/pull/14649) Rely on the call stack to clean up cache in `_guessExecutionStatusRelativeTo` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-core`
  * [#14641](https://github.com/babel/babel/pull/14641) Change limit of source map 3MB ([@vasicvuk](https://github.com/vasicvuk))
* Other
  * [#14627](https://github.com/babel/babel/pull/14627) Speedup e2e test on github ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
  * [#14248](https://github.com/babel/babel/pull/14248) chore: automate compat-data update ([@tony-go](https://github.com/tony-go))
* `babel-parser`
  * [#14592](https://github.com/babel/babel/pull/14592) feat: Automatically generate test results that do not exist ([@liuxingbaoyu](https://github.com/liuxingbaoyu))

#### :running_woman: Performance
* `babel-traverse`
  * [#14617](https://github.com/babel/babel/pull/14617) Fix `_guessExecutionStatusRelativeToDifferentFunctions` perf ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
## v7.18.4 (2022-05-29)

#### :eyeglasses: Spec Compliance
* `babel-types`
  * [#14591](https://github.com/babel/babel/pull/14591) fix: remove TSDeclareFunction from ExportDefaultDeclaration ([@JLHwung](https://github.com/JLHwung))

#### :bug: Bug Fix
* `babel-plugin-transform-typescript`
  * [#14610](https://github.com/babel/babel/pull/14610) Fix `@babel/transform-typescript` compatibility with Next.js ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-parser`
  * [#14604](https://github.com/babel/babel/pull/14604) [ts] FIx parsing of nested `extends` type in arrow type ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-helper-check-duplicate-nodes`, `babel-parser`
  * [#14595](https://github.com/babel/babel/pull/14595) fix: `loc.index` of some nodes is wrongly enumerable. ([@liuxingbaoyu](https://github.com/liuxingbaoyu))

#### :house: Internal
* `babel-plugin-transform-block-scoping`, `babel-plugin-transform-classes`, `babel-plugin-transform-modules-systemjs`
  * [#14599](https://github.com/babel/babel/pull/14599) refactor: avoid mutating AST nodes ([@JLHwung](https://github.com/JLHwung))
## v7.18.3 (2022-05-25)

#### :bug: Bug Fix
* `babel-runtime-corejs2`, `babel-runtime-corejs3`, `babel-runtime`
  * [#14588](https://github.com/babel/babel/pull/14588) Restore es5 compatibility in `@babel/runtime/regenerator` ([@jlowcs](https://github.com/jlowcs))
## v7.18.2 (2022-05-25)

#### :bug: Bug Fix
* `babel-plugin-transform-template-literals`
  * [#14582](https://github.com/babel/babel/pull/14582) fix: skip template literal transform for TSLiteralType ([@JLHwung](https://github.com/JLHwung))
* `babel-helpers`
  * [#14537](https://github.com/babel/babel/pull/14537) Support frozen built-ins in `@babel/runtime` ([@Jack-Works](https://github.com/Jack-Works))
* `babel-runtime-corejs2`, `babel-runtime-corejs3`, `babel-runtime`
  * [#14581](https://github.com/babel/babel/pull/14581) Define the global `regeneratorRuntime` in `@babel/runtime/regenerator` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-helper-environment-visitor`, `babel-helper-replace-supers`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-decorators`, `babel-traverse`, `babel-types`
  * [#14371](https://github.com/babel/babel/pull/14371) environmentVisitor should skip decorator expressions ([@JLHwung](https://github.com/JLHwung))

#### :memo: Documentation
* `babel-types`
  * [#14571](https://github.com/babel/babel/pull/14571) add Accessor alias description ([@JLHwung](https://github.com/JLHwung))

#### :house: Internal
* [#14541](https://github.com/babel/babel/pull/14541) Fix synchronization between main thread and worker ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
## v7.18.1 (2022-05-19)

#### :bug: Bug Fix
* `babel-plugin-transform-typescript`
  * [#14566](https://github.com/babel/babel/pull/14566) Fix TypeScript plugin compat with `@babel/types` versions ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-transform-for-of`
  * [#14564](https://github.com/babel/babel/pull/14564) fix: Duplicate declaration in transformed for...of ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
## v7.18.0 (2022-05-19)

#### :rocket: New Feature
* `babel-preset-env`
  * [#14556](https://github.com/babel/babel/pull/14556) feat: add import-assertions to shippedProposals ([@JLHwung](https://github.com/JLHwung))
* `babel-helper-create-class-features-plugin`, `babel-helper-define-map`, `babel-plugin-proposal-class-static-block`, `babel-plugin-proposal-destructuring-private`, `babel-plugin-proposal-object-rest-spread`, `babel-plugin-syntax-destructuring-private`, `babel-plugin-transform-destructuring`, `babel-plugin-transform-proto-to-assign`, `babel-plugin-transform-typescript`, `babel-standalone`, `babel-traverse`, `babel-types`
  * [#14304](https://github.com/babel/babel/pull/14304) Transform destructuring private ([@JLHwung](https://github.com/JLHwung))
* `babel-generator`, `babel-parser`, `babel-types`
  * [#14359](https://github.com/babel/babel/pull/14359) [ts 4.7] Support optional variance annotations ([@magic-akari](https://github.com/magic-akari))
* `babel-generator`, `babel-parser`
  * [#14476](https://github.com/babel/babel/pull/14476) [ts 4.7] Support `extends` constraints for `infer` ([@sosukesuzuki](https://github.com/sosukesuzuki))
* `babel-generator`, `babel-parser`, `babel-plugin-transform-typescript`, `babel-traverse`, `babel-types`
  * [#14457](https://github.com/babel/babel/pull/14457) [ts] Add support for instantiation expressions ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-helper-module-transforms`, `babel-plugin-transform-modules-amd`, `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-modules-umd`
  * [#14456](https://github.com/babel/babel/pull/14456) Pass filename to `importInterop` method ([@NickHeiner](https://github.com/NickHeiner))

#### :bug: Bug Fix
* `babel-types`
  * [#14551](https://github.com/babel/babel/pull/14551) Do not create multiple copies of comments when cloning nodes ([@liuxingbaoyu](https://github.com/liuxingbaoyu))
* `babel-parser`
  * [#14557](https://github.com/babel/babel/pull/14557) Fix parsing of `<` after object literals with the `jsx` plugin ([@JLHwung](https://github.com/JLHwung))
* `babel-plugin-transform-react-pure-annotations`
  * [#14528](https://github.com/babel/babel/pull/14528) fix: do not mark computed `React[...]` methods as pure ([@JLHwung](https://github.com/JLHwung))

#### :nail_care: Polish
* `babel-core`, `babel-helper-transform-fixture-test-runner`, `babel-helpers`, `babel-plugin-proposal-async-generator-functions`, `babel-plugin-transform-async-to-generator`, `babel-plugin-transform-block-scoping`, `babel-plugin-transform-classes`, `babel-plugin-transform-regenerator`, `babel-plugin-transform-runtime`, `babel-preset-env`, `babel-runtime-corejs2`, `babel-runtime-corejs3`, `babel-runtime`, `babel-standalone`
  * [#14538](https://github.com/babel/babel/pull/14538) Inline `regeneratorRuntime` as a normal helper ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :house: Internal
* `babel-core`, `babel-helper-create-class-features-plugin`, `babel-plugin-proposal-decorators`, `babel-plugin-transform-modules-systemjs`
  * [#14530](https://github.com/babel/babel/pull/14530) improve helper-create-class-features typings ([@JLHwung](https://github.com/JLHwung))
## v7.17.12 (2022-05-16)

#### :bug: Bug Fix
* `babel-plugin-transform-react-constant-elements`
  * [#14536](https://github.com/babel/babel/pull/14536) Never hoist JSX elts referencing vars from the current scope ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-generator`
  * [#14524](https://github.com/babel/babel/pull/14524) fix: perserve parentheses of lhs id with rhs unamed fn ([@JLHwung](https://github.com/JLHwung))
  * [#14532](https://github.com/babel/babel/pull/14532) Print necessary parentheses for functions in postfix expressions ([@xiawenqi](https://github.com/xiawenqi))
* `babel-plugin-transform-destructuring`
  * [#14494](https://github.com/babel/babel/pull/14494) Update scope info after destructuring transform ([@peey](https://github.com/peey))
* `babel-parser`
  * [#14522](https://github.com/babel/babel/pull/14522) fix: allow liberal named type-as imports ([@JLHwung](https://github.com/JLHwung))
* `babel-parser`, `babel-plugin-transform-destructuring`, `babel-types`
  * [#14500](https://github.com/babel/babel/pull/14500) Fix parsing ts type casts and nested patterns in destructuring ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :house: Internal
* `babel-plugin-proposal-decorators`, `babel-types`
  * [#14519](https://github.com/babel/babel/pull/14519) @babel/types builder improvements ([@JLHwung](https://github.com/JLHwung))
* `babel-core`
  * [#14490](https://github.com/babel/babel/pull/14490) Update to Jest 28 ([@JLHwung](https://github.com/JLHwung))
* `babel-core`, `babel-generator`, `babel-helper-create-class-features-plugin`, `babel-helper-create-regexp-features-plugin`, `babel-helper-module-transforms`, `babel-helper-plugin-utils`, `babel-parser`, `babel-plugin-bugfix-safari-id-destructuring-collision-in-function-expression`, `babel-plugin-bugfix-v8-spread-parameters-in-optional-chaining`, `babel-plugin-external-helpers`, `babel-plugin-proposal-async-do-expressions`, `babel-plugin-proposal-async-generator-functions`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-class-static-block`, `babel-plugin-proposal-decorators`, `babel-plugin-proposal-export-default-from`, `babel-plugin-proposal-export-namespace-from`, `babel-plugin-proposal-function-sent`, `babel-plugin-proposal-json-strings`, `babel-plugin-proposal-logical-assignment-operators`, `babel-plugin-proposal-nullish-coalescing-operator`, `babel-plugin-proposal-object-rest-spread`, `babel-plugin-proposal-optional-chaining`, `babel-plugin-proposal-partial-application`, `babel-plugin-proposal-pipeline-operator`, `babel-plugin-proposal-private-methods`, `babel-plugin-proposal-private-property-in-object`, `babel-plugin-proposal-record-and-tuple`, `babel-plugin-proposal-unicode-property-regex`, `babel-plugin-syntax-decorators`, `babel-plugin-syntax-destructuring-private`, `babel-plugin-syntax-flow`, `babel-plugin-syntax-import-assertions`, `babel-plugin-syntax-pipeline-operator`, `babel-plugin-syntax-record-and-tuple`, `babel-plugin-syntax-typescript`, `babel-plugin-transform-arrow-functions`, `babel-plugin-transform-async-to-generator`, `babel-plugin-transform-block-scoping`, `babel-plugin-transform-classes`, `babel-plugin-transform-computed-properties`, `babel-plugin-transform-destructuring`, `babel-plugin-transform-duplicate-keys`, `babel-plugin-transform-flow-comments`, `babel-plugin-transform-flow-strip-types`, `babel-plugin-transform-for-of`, `babel-plugin-transform-instanceof`, `babel-plugin-transform-jscript`, `babel-plugin-transform-literals`, `babel-plugin-transform-modules-amd`, `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-modules-systemjs`, `babel-plugin-transform-modules-umd`, `babel-plugin-transform-named-capturing-groups-regex`, `babel-plugin-transform-new-target`, `babel-plugin-transform-parameters`, `babel-plugin-transform-property-mutators`, `babel-plugin-transform-proto-to-assign`, `babel-plugin-transform-react-constant-elements`, `babel-plugin-transform-react-jsx`, `babel-plugin-transform-reserved-words`, `babel-plugin-transform-runtime`, `babel-plugin-transform-spread`, `babel-plugin-transform-template-literals`, `babel-plugin-transform-typeof-symbol`, `babel-plugin-transform-typescript`, `babel-preset-env`, `babel-preset-flow`, `babel-preset-react`, `babel-preset-typescript`, `babel-traverse`, `babel-types`
  * [#14499](https://github.com/babel/babel/pull/14499) Provide plugin/preset typings from plugin-utils ([@JLHwung](https://github.com/JLHwung))
## v7.17.11 (2022-04-29)

#### :bug: Bug Fix
* `babel-runtime-corejs2`
  * [#14509](https://github.com/babel/babel/pull/14509) fix: `@babel/runtime-corejs2` should depend on core-js 2 ([@JLHwung](https://github.com/JLHwung))
## v7.17.10 (2022-04-29)

#### :bug: Bug Fix
* `babel-cli`, `babel-core`, `babel-generator`, `babel-helper-transform-fixture-test-runner`
  * [#14479](https://github.com/babel/babel/pull/14479) [cli] Avoid `SourceMapGenerator` for simple map concatenation ([@jridgewell](https://github.com/jridgewell))

#### :nail_care: Polish
* `babel-cli`, `babel-core`, `babel-generator`, `babel-helper-fixtures`, `babel-helper-transform-fixture-test-runner`
  * [#14506](https://github.com/babel/babel/pull/14506) Do not add sourcemap markings for indentation ([@jridgewell](https://github.com/jridgewell))
* `babel-plugin-proposal-pipeline-operator`, `babel-traverse`
  * [#14424](https://github.com/babel/babel/pull/14424) Update detection of pure nodes (`Scope#isPure`) ([@JLHwung](https://github.com/JLHwung))

#### :house: Internal
* `babel-core`
  * [#14493](https://github.com/babel/babel/pull/14493) Remove git.io shortlinks from repo ([@Andoryuuta](https://github.com/Andoryuuta))
* Other
  * [#14462](https://github.com/babel/babel/pull/14462) fix: build standalone on windows ([@liuxingbaoyu](https://github.com/liuxingbaoyu))

#### :running_woman: Performance
* `babel-cli`, `babel-core`, `babel-generator`
  * [#14497](https://github.com/babel/babel/pull/14497) Switch to `@jridgewell/gen-mapping` for sourcemap generation ([@jridgewell](https://github.com/jridgewell))
## v7.17.9 (2022-04-06)

#### :bug: Bug Fix
* `babel-parser`, `babel-standalone`
  * [#14427](https://github.com/babel/babel/pull/14427) Restore numeric seaprators support in `@babel/standalone` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-traverse`
  * [#14403](https://github.com/babel/babel/pull/14403) Fix NodePath.referencesImport for  JSXMemberExpression ([@swandir](https://github.com/swandir))
* `babel-plugin-proposal-decorators`
  * [#14396](https://github.com/babel/babel/pull/14396) [2021-12] Support class decorators in export declarations ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#14387](https://github.com/babel/babel/pull/14387) fix: forward accessor proxy getter results ([@JLHwung](https://github.com/JLHwung))
* `babel-parser`
  * [#14384](https://github.com/babel/babel/pull/14384) fix: parse type parameters within correct context ([@JLHwung](https://github.com/JLHwung))
* `babel-generator`, `babel-parser`
  * [#14378](https://github.com/babel/babel/pull/14378) Parenthesize non-simple decorator expression ([@JLHwung](https://github.com/JLHwung))
* `babel-plugin-transform-classes`, `babel-plugin-transform-modules-commonjs`, `babel-preset-env`
  * [#14366](https://github.com/babel/babel/pull/14366) Align named imports behavior in `.mjs` and `.js` files ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-helper-create-class-features-plugin`, `babel-plugin-proposal-class-properties`
  * [#14351](https://github.com/babel/babel/pull/14351) [setPublicClassFields] Use define for static `name`/`length` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :nail_care: Polish
* `babel-plugin-proposal-decorators`
  * [#14398](https://github.com/babel/babel/pull/14398) Add missing semicolons in 2021-12 decorators output ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :memo: Documentation
* [#14397](https://github.com/babel/babel/pull/14397) Mention how to report vulns in Babel dependencies ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :house: Internal
* Other
  * [#14419](https://github.com/babel/babel/pull/14419) Use `jest-light-runner` from npm ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-cli`
  * [#14385](https://github.com/babel/babel/pull/14385) Fix flaky @babel/cli test ([@JLHwung](https://github.com/JLHwung))
* `babel-helper-function-name`, `babel-helper-get-function-arity`
  * [#14389](https://github.com/babel/babel/pull/14389) Inline `@babel/helper-get-function-arity` package ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-helpers`
  * [#14343](https://github.com/babel/babel/pull/14343) Remove unused `@babel/helpers` code ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-core`, `babel-highlight`, `babel-parser`
  * [#14377](https://github.com/babel/babel/pull/14377) refactor: replace deprecated String.prototype.substr() ([@CommanderRoot](https://github.com/CommanderRoot))
## v7.17.8 (2022-03-18)

#### :eyeglasses: Spec Compliance
* `babel-helpers`, `babel-plugin-proposal-decorators`
  * [#14353](https://github.com/babel/babel/pull/14353) Update decorators to match latest spec ([@pzuraq](https://github.com/pzuraq))
  * [#14339](https://github.com/babel/babel/pull/14339) Decorators misc fixes ([@JLHwung](https://github.com/JLHwung))

#### :bug: Bug Fix
* `babel-plugin-transform-modules-systemjs`
  * [#14057](https://github.com/babel/babel/pull/14057) [systemjs] Fix nested `let`/`const` shadowing imported bindings ([@The-x-Theorist](https://github.com/The-x-Theorist))
* `babel-parser`
  * [#14362](https://github.com/babel/babel/pull/14362) Allow keywords in TS qualified types ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :leftwards_arrow_with_hook: Revert
* `babel-parser`
  * [#14367](https://github.com/babel/babel/pull/14367) Defer `<T>() => {}` TSX error to Babel 8 ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v7.17.7 (2022-03-14)

#### :eyeglasses: Spec Compliance
* `babel-generator`, `babel-parser`
  * [#14135](https://github.com/babel/babel/pull/14135) [tsx] raise error on single arrow type argument without comma ([@ozanhonamlioglu](https://github.com/ozanhonamlioglu))

#### :bug: Bug Fix
* `babel-helper-compilation-targets`
  * [#14294](https://github.com/babel/babel/pull/14294) Avoid `resolveTargets` call if `browsers` is an empty array ([@dev-itsheng](https://github.com/dev-itsheng))
* `babel-helper-module-transforms`, `babel-helper-simple-access`, `babel-plugin-transform-modules-amd`, `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-modules-umd`
  * [#14341](https://github.com/babel/babel/pull/14341) Fix update expression for exported bigints ([@magic-akari](https://github.com/magic-akari))
* `babel-parser`
  * [#14344](https://github.com/babel/babel/pull/14344) Allow variable and function with the same name in static blocks ([@Yokubjon-J](https://github.com/Yokubjon-J))
  * [#14327](https://github.com/babel/babel/pull/14327) Remove length restriction from JSX entities, and ignore `Object.prototype` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#14293](https://github.com/babel/babel/pull/14293) fix(ts): skip func-type param start on parsing ([@JLHwung](https://github.com/JLHwung))
* `babel-helpers`, `babel-plugin-proposal-decorators`
  * [#14335](https://github.com/babel/babel/pull/14335) Fix static/proto initializers when there aren't class fields ([@JLHwung](https://github.com/JLHwung))
  * [#14334](https://github.com/babel/babel/pull/14334) fix: push `newClass` only when class is decorated ([@JLHwung](https://github.com/JLHwung))
* `babel-generator`
  * [#14309](https://github.com/babel/babel/pull/14309) Fix `import type/typeof` printing with no specifiers ([@The-x-Theorist](https://github.com/The-x-Theorist))
* `babel-helper-module-transforms`, `babel-plugin-transform-modules-commonjs`
  * [#14313](https://github.com/babel/babel/pull/14313) Fix duplicate exports initialization with many exports ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-helper-member-expression-to-functions`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-private-methods`, `babel-plugin-transform-classes`, `babel-plugin-transform-object-super`
  * [#14311](https://github.com/babel/babel/pull/14311) fix: support bigints in update expressions for private fields ([@magic-akari](https://github.com/magic-akari))
* `babel-register`
  * [#14303](https://github.com/babel/babel/pull/14303) Fix babel register cache invalidation ([@cha0s](https://github.com/cha0s))

#### :nail_care: Polish
* `babel-parser`
  * [#14338](https://github.com/babel/babel/pull/14338) Report single error for invalid num seps in unicode escapes ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :house: Internal
* `babel-generator`, `babel-parser`
  * [#14320](https://github.com/babel/babel/pull/14320) Type-safe ParseErrors ([@tolmasky](https://github.com/tolmasky))
* `babel-plugin-transform-destructuring`
  * [#14236](https://github.com/babel/babel/pull/14236) Improve `transform-destructuring` typings ([@JLHwung](https://github.com/JLHwung))
* Other
  * [#14180](https://github.com/babel/babel/pull/14180) Convert ESLint plugins to CommonJS ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v7.17.6 (2022-02-21)

#### :eyeglasses: Spec Compliance
* `babel-helper-module-transforms`
  * [#14287](https://github.com/babel/babel/pull/14287) Make module namespace sort compare function consistent ([@devsnek](https://github.com/devsnek))

#### :bug: Bug Fix
* `babel-cli`
  * [#14281](https://github.com/babel/babel/pull/14281) cli: handle multiple input sources in watch mode ([@JLHwung](https://github.com/JLHwung))

#### :microscope: Output optimization
* `babel-plugin-transform-react-constant-elements`
  * [#12975](https://github.com/babel/babel/pull/12975) `allowMutablePropsOnTags`: cache JSX constant elements with function props ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-proposal-pipeline-operator`, `babel-standalone`
  * [#14278](https://github.com/babel/babel/pull/14278) [hack pipes] Inline topic token when possible ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-helper-create-class-features-plugin`, `babel-plugin-proposal-class-static-block`, `babel-plugin-proposal-decorators`, `babel-preset-env`
  * [#14275](https://github.com/babel/babel/pull/14275) Avoid IIFE for single-expression class static blocks ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v7.17.5 (2022-02-17)

#### :bug: Bug Fix
* `babel-core`
  * [#14283](https://github.com/babel/babel/pull/14283) Make source maps plain objects for use with `t.valueToNode` ([@thebanjomatic](https://github.com/thebanjomatic))
  * [#14282](https://github.com/babel/babel/pull/14282) Fix merging sourcemaps on Windows ([@jridgewell](https://github.com/jridgewell))
## v7.17.4 (2022-02-15)

#### :bug: Bug Fix
* `babel-core`
  * [#14274](https://github.com/babel/babel/pull/14274) Fix infinite recursion when merge sourcemaps ([@jridgewell](https://github.com/jridgewell))
## v7.17.3 (2022-02-15)

#### :bug: Bug Fix
* `babel-plugin-transform-react-jsx-development`, `babel-plugin-transform-react-jsx`
  * [#14271](https://github.com/babel/babel/pull/14271) jsx-development: do not emit `this` within ts module block ([@JLHwung](https://github.com/JLHwung))
* `babel-plugin-transform-destructuring`
  * [#14240](https://github.com/babel/babel/pull/14240) Fix destructuring with holes in assign pattern ([@magic-akari](https://github.com/magic-akari))

#### :house: Internal
* `babel-cli`, `babel-core`, `babel-generator`, `babel-helper-transform-fixture-test-runner`
  * [#14253](https://github.com/babel/babel/pull/14253) Convert all SourceMapConsumers to TraceMaps ([@jridgewell](https://github.com/jridgewell))

#### :microscope: Output optimization
* `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-class-static-block`, `babel-plugin-proposal-decorators`, `babel-plugin-proposal-private-methods`, `babel-plugin-proposal-private-property-in-object`, `babel-plugin-transform-new-target`, `babel-plugin-transform-parameters`, `babel-traverse`
  * [#14268](https://github.com/babel/babel/pull/14268) Skip unnecessary temp vars in `path.insertAfter` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v7.17.2 (2022-02-08)

#### :bug: Bug Fix
* `babel-helpers`, `babel-plugin-proposal-decorators`
  * [#14244](https://github.com/babel/babel/pull/14244) Fix 2021-12 decorators application order ([@JLHwung](https://github.com/JLHwung))
* `babel-core`
  * [#14241](https://github.com/babel/babel/pull/14241) Fix reinstantiation of inherited plugins ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#14246](https://github.com/babel/babel/pull/14246) Merge multi-source output sourcemaps ([@jridgewell](https://github.com/jridgewell))
## v7.17.1 (2022-02-03)

#### :bug: Bug Fix
* `babel-helper-create-class-features-plugin`
  * [#14231](https://github.com/babel/babel/pull/14231) Restore class fields transform compat with old `@babel/types` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v7.17.0 (2022-02-02)

#### :rocket: New Feature
* `babel-cli`, `babel-core`
  * [#14065](https://github.com/babel/babel/pull/14065) Allow plugins/presets to indicate external dependencies ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-core`, `babel-parser`, `babel-traverse`
  * [#14174](https://github.com/babel/babel/pull/14174) Expose `.index` on Position to internally track nodes location ([@tolmasky](https://github.com/tolmasky))
* `babel-generator`, `babel-parser`, `babel-plugin-proposal-pipeline-operator`, `babel-plugin-syntax-pipeline-operator`
  * [#13973](https://github.com/babel/babel/pull/13973) proposal-pipe: Add support for `^^` and `@@` topics ([@js-choi](https://github.com/js-choi))
* `babel-traverse`
  * [#13940](https://github.com/babel/babel/pull/13940) Add new method to check if node is null or not ([@danez](https://github.com/danez))
* `babel-generator`, `babel-parser`, `babel-plugin-syntax-destructuring-private`, `babel-standalone`
  * [#13931](https://github.com/babel/babel/pull/13931) Parse destructuring private fields ([@JLHwung](https://github.com/JLHwung))
* `babel-helper-create-class-features-plugin`, `babel-helpers`, `babel-plugin-proposal-decorators`, `babel-plugin-syntax-decorators`, `babel-runtime-corejs2`, `babel-runtime-corejs3`, `babel-runtime`, `babel-standalone`, `babel-types`
  * [#14004](https://github.com/babel/babel/pull/14004) Add new decorators transform ([@pzuraq](https://github.com/pzuraq))
* `babel-generator`, `babel-parser`, `babel-traverse`, `babel-types`
  * [#13681](https://github.com/babel/babel/pull/13681) Add the `decoratorsAutoAccessors` parser plugin ([@pzuraq](https://github.com/pzuraq))
* `babel-core`, `babel-helper-create-regexp-features-plugin`, `babel-plugin-proposal-unicode-sets-regex`, `babel-plugin-syntax-unicode-sets-regex`, `babel-plugin-transform-dotall-regex`
  * [#14125](https://github.com/babel/babel/pull/14125) Add transform support for the "regexp unicode sets" proposal ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-parser`
  * [#14086](https://github.com/babel/babel/pull/14086) Add parser support for the "regexp unicode sets" proposal ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-register`
  * [#14087](https://github.com/babel/babel/pull/14087) Expose `@babel/register/experimental-worker` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :bug: Bug Fix
* `babel-parser`
  * [#14145](https://github.com/babel/babel/pull/14145) Reinterpret << when parsing TS type arguments ([@JLHwung](https://github.com/JLHwung))
* `babel-plugin-transform-runtime`
  * [#14187](https://github.com/babel/babel/pull/14187) Normalize absolute paths on Windows ([@atti187](https://github.com/atti187))

#### :memo: Documentation
* [#14223](https://github.com/babel/babel/pull/14223) Remove Babel 6 from SECURITY.md ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :house: Internal
* `babel-helper-fixtures`, `babel-parser`
  * [#14201](https://github.com/babel/babel/pull/14201) Fuzz test location-related parser options ([@tolmasky](https://github.com/tolmasky))
* `babel-compat-data`
  * [#14208](https://github.com/babel/babel/pull/14208) Update compat data (specifically for rhino 1.7.14) ([@phulin](https://github.com/phulin))
* Other
  * [#14190](https://github.com/babel/babel/pull/14190) chore: run tscheck on babel 8 breaking test ([@JLHwung](https://github.com/JLHwung))

#### :running_woman: Performance
* `babel-cli`, `babel-core`
  * [#14209](https://github.com/babel/babel/pull/14209) Switch to `@ampproject/remapping` to merge source maps ([@jridgewell](https://github.com/jridgewell))
## v7.16.12 (2022-01-22)

#### :bug: Bug Fix
* `babel-core`
  * [#14192](https://github.com/babel/babel/pull/14192) Avoid dynamic import when it's not needed ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-parser`
  * [#14194](https://github.com/babel/babel/pull/14194) fix: incorrect `in` parsing in arrow ConciseBody ([@JLHwung](https://github.com/JLHwung))

## v7.16.10 (2022-01-19)

#### :bug: Bug Fix
* `babel-highlight`
  * [#14165](https://github.com/babel/babel/pull/14165) Avoid infinite loop when highlighting an empty input ([@blankPen](https://github.com/blankPen))
* `babel-traverse`
  * [#14164](https://github.com/babel/babel/pull/14164) Handle logical assignment in super property transforms ([@magic-akari](https://github.com/magic-akari))
  * [#14162](https://github.com/babel/babel/pull/14162) Fix the transform of `super.foo--`/`super[foo]--` (and prefix) ([@magic-akari](https://github.com/magic-akari))
* `babel-core`
  * [#14110](https://github.com/babel/babel/pull/14110) Respect `package.json#exports` when resolving plugins ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#14153](https://github.com/babel/babel/pull/14153) Disable "Reentrant plugin detected" error in async mode ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :house: Internal
* `babel-plugin-transform-runtime`
  * [#14157](https://github.com/babel/babel/pull/14157) Remove workaround for `_typeof` in runtime build script ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-parser`
  * [#14130](https://github.com/babel/babel/pull/14130) Improve errors location tracking ([@tolmasky](https://github.com/tolmasky))

#### :microscope: Output optimization
* `babel-helper-create-class-features-plugin`, `babel-preset-env`
  * [#14169](https://github.com/babel/babel/pull/14169) Skip class fields transform when not necessary for private methods ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v7.16.9 (2022-01-11)

#### :bug: Bug Fix
* `babel-register`
  * [#14136](https://github.com/babel/babel/pull/14136) Restore `@babel/register` compat with `@babel/core@7.5.x` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v7.16.8 (2022-01-10)

#### :bug: Bug Fix
* `babel-generator`, `babel-plugin-syntax-typescript`, `babel-plugin-transform-parameters`
  * [#14113](https://github.com/babel/babel/pull/14113) Print trailing comma after a single TS generic in arrow fns ([@ozanhonamlioglu](https://github.com/ozanhonamlioglu))
* `babel-traverse`
  * [#14105](https://github.com/babel/babel/pull/14105) fix: forward stop signal to parent path ([@JLHwung](https://github.com/JLHwung))
* `babel-register`
  * [#14107](https://github.com/babel/babel/pull/14107) Don't mutate `@babel/register` options ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-transform-modules-commonjs`
  * [#14097](https://github.com/babel/babel/pull/14097) Register binding for newly created vars for commonjs transforms ([@The-x-Theorist](https://github.com/The-x-Theorist))
* `babel-plugin-transform-typescript`
  * [#14093](https://github.com/babel/babel/pull/14093) Fix TypeScript Enum self-references ([@magic-akari](https://github.com/magic-akari))

#### :nail_care: Polish
* `babel-generator`
  * [#14094](https://github.com/babel/babel/pull/14094) Always print directives with double quotes when minified ([@overlookmotel](https://github.com/overlookmotel))

#### :house: Internal
* `babel-helper-fixtures`, `babel-plugin-proposal-record-and-tuple`, `babel-preset-env`
  * [#14118](https://github.com/babel/babel/pull/14118) Always use the plugin/preset name in fixtures options ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :microscope: Output optimization
* `babel-helper-remap-async-to-generator`, `babel-helper-wrap-function`, `babel-plugin-transform-async-to-generator`
  * [#14122](https://github.com/babel/babel/pull/14122) Optimize `transform-async-to-generator` output ([@magic-akari](https://github.com/magic-akari))
## v7.16.7 (2021-12-31)

#### :eyeglasses: Spec Compliance
* `babel-parser`
  * [#14049](https://github.com/babel/babel/pull/14049) fix: check preceding line break before exclamation ([@JLHwung](https://github.com/JLHwung))

#### :bug: Bug Fix
* `babel-plugin-transform-runtime`, `babel-runtime-corejs2`, `babel-runtime-corejs3`, `babel-runtime`
  * [#14081](https://github.com/babel/babel/pull/14081) Import the correct `./typeof.js` helper in `@babel/runtime` ([@exb](https://github.com/exb))
* `babel-helpers`
  * [#14072](https://github.com/babel/babel/pull/14072) Fix derived classes in Chrome <= 36 ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-helper-function-name`, `babel-plugin-transform-function-name`
  * [#14047](https://github.com/babel/babel/pull/14047) Fix unicode handling in generated function names ([@The-x-Theorist](https://github.com/The-x-Theorist))

#### :nail_care: Polish
* `babel-core`
  * [#14067](https://github.com/babel/babel/pull/14067) Allow `$schema` property in json config files ([@The-x-Theorist](https://github.com/The-x-Theorist))
## v7.16.6 (2021-12-14)

#### :bug: Bug Fix
* `babel-parser`
  * [#14055](https://github.com/babel/babel/pull/14055) fix: handle tokens for invalid template element ([@JLHwung](https://github.com/JLHwung))
## v7.16.5 (2021-12-13)

#### :eyeglasses: Spec Compliance
* `babel-cli`, `babel-core`, `babel-helpers`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-decorators`, `babel-plugin-transform-classes`, `babel-plugin-transform-jscript`, `babel-plugin-transform-parameters`, `babel-plugin-transform-runtime`, `babel-plugin-transform-spread`, `babel-plugin-transform-typescript`, `babel-preset-env`
  * [#12115](https://github.com/babel/babel/pull/12115) Mark class prototype as read-only ([@wentout](https://github.com/wentout))

#### :bug: Bug Fix
* `babel-plugin-transform-parameters`
  * [#14032](https://github.com/babel/babel/pull/14032) Fix: default rest argument array elements as undefined ([@The-x-Theorist](https://github.com/The-x-Theorist))
* `babel-plugin-transform-arrow-functions`, `babel-traverse`
  * [#14036](https://github.com/babel/babel/pull/14036) Don't resolve shadowed `arguments` variables from functions ([@The-x-Theorist](https://github.com/The-x-Theorist))
* `babel-parser`
  * [#14039](https://github.com/babel/babel/pull/14039) maintain estree string literal shape when cloned ([@JLHwung](https://github.com/JLHwung))
* `babel-traverse`
  * [#14016](https://github.com/babel/babel/pull/14016) Fix duplicate declaration error on ambient class declarations ([@The-x-Theorist](https://github.com/The-x-Theorist))
* `babel-generator`
  * [#14014](https://github.com/babel/babel/pull/14014) Support flow function type annotation with no parent ([@krosenberg](https://github.com/krosenberg))
* `babel-plugin-transform-react-jsx`
  * [#14012](https://github.com/babel/babel/pull/14012) Fix JSX pragma anywhere in comment ([@The-x-Theorist](https://github.com/The-x-Theorist))
* `babel-helper-create-class-features-plugin`, `babel-helper-environment-visitor`, `babel-helper-member-expression-to-functions`, `babel-helper-module-transforms`, `babel-helper-replace-supers`, `babel-plugin-transform-classes`, `babel-traverse`
  * [#14005](https://github.com/babel/babel/pull/14005) Fix handling of `this`&co in computed keys in arrows transform ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :nail_care: Polish
* `babel-parser`
  * [#13968](https://github.com/babel/babel/pull/13968) Recover from shorthand assign exprs ([@JLHwung](https://github.com/JLHwung))
  * [#13975](https://github.com/babel/babel/pull/13975) fix: update UnexpectedPrivateField error message ([@JLHwung](https://github.com/JLHwung))

#### :memo: Documentation
* `babel-compat-data`, `babel-helper-annotate-as-pure`, `babel-helper-builder-binary-assignment-operator-visitor`, `babel-helper-builder-react-jsx`, `babel-helper-compilation-targets`, `babel-helper-create-class-features-plugin`, `babel-helper-create-regexp-features-plugin`, `babel-helper-define-map`, `babel-helper-explode-assignable-expression`, `babel-helper-fixtures`, `babel-helper-function-name`, `babel-helper-get-function-arity`, `babel-helper-hoist-variables`, `babel-helper-member-expression-to-functions`, `babel-helper-module-imports`, `babel-helper-module-transforms`, `babel-helper-optimise-call-expression`, `babel-helper-plugin-test-runner`, `babel-helper-plugin-utils`, `babel-helper-remap-async-to-generator`, `babel-helper-replace-supers`, `babel-helper-simple-access`, `babel-helper-skip-transparent-expression-wrappers`, `babel-helper-split-export-declaration`, `babel-helper-transform-fixture-test-runner`, `babel-helper-validator-identifier`, `babel-helper-validator-option`, `babel-helper-wrap-function`, `babel-plugin-bugfix-safari-id-destructuring-collision-in-function-expression`, `babel-plugin-bugfix-v8-spread-parameters-in-optional-chaining`, `babel-plugin-proposal-async-do-expressions`, `babel-plugin-proposal-record-and-tuple`, `babel-plugin-syntax-async-do-expressions`, `babel-plugin-syntax-module-blocks`, `babel-plugin-transform-react-jsx-development`, `babel-plugin-transform-react-pure-annotations`, `babel-runtime-corejs2`, `babel-runtime-corejs3`, `babel-runtime`
  * [#14006](https://github.com/babel/babel/pull/14006) Regenerate monorepo READMEs ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :house: Internal
* `babel-cli`, `babel-code-frame`, `babel-core`, `babel-generator`, `babel-helper-annotate-as-pure`, `babel-helper-compilation-targets`, `babel-helper-create-class-features-plugin`, `babel-helper-create-regexp-features-plugin`, `babel-helper-fixtures`, `babel-helper-module-imports`, `babel-helper-optimise-call-expression`, `babel-helper-plugin-test-runner`, `babel-helper-transform-fixture-test-runner`, `babel-helper-validator-identifier`, `babel-helper-validator-option`, `babel-helpers`, `babel-highlight`, `babel-node`, `babel-parser`, `babel-plugin-bugfix-safari-id-destructuring-collision-in-function-expression`, `babel-plugin-bugfix-v8-spread-parameters-in-optional-chaining`, `babel-plugin-external-helpers`, `babel-plugin-proposal-async-do-expressions`, `babel-plugin-proposal-async-generator-functions`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-class-static-block`, `babel-plugin-proposal-decorators`, `babel-plugin-proposal-do-expressions`, `babel-plugin-proposal-dynamic-import`, `babel-plugin-proposal-export-default-from`, `babel-plugin-proposal-export-namespace-from`, `babel-plugin-proposal-function-bind`, `babel-plugin-proposal-function-sent`, `babel-plugin-proposal-json-strings`, `babel-plugin-proposal-logical-assignment-operators`, `babel-plugin-proposal-nullish-coalescing-operator`, `babel-plugin-proposal-numeric-separator`, `babel-plugin-proposal-object-rest-spread`, `babel-plugin-proposal-optional-catch-binding`, `babel-plugin-proposal-optional-chaining`, `babel-plugin-proposal-partial-application`, `babel-plugin-proposal-pipeline-operator`, `babel-plugin-proposal-private-methods`, `babel-plugin-proposal-private-property-in-object`, `babel-plugin-proposal-record-and-tuple`, `babel-plugin-proposal-throw-expressions`, `babel-plugin-proposal-unicode-property-regex`, `babel-plugin-syntax-decorators`, `babel-plugin-syntax-typescript`, `babel-plugin-transform-arrow-functions`, `babel-plugin-transform-async-to-generator`, `babel-plugin-transform-block-scoped-functions`, `babel-plugin-transform-block-scoping`, `babel-plugin-transform-classes`, `babel-plugin-transform-computed-properties`, `babel-plugin-transform-destructuring`, `babel-plugin-transform-dotall-regex`, `babel-plugin-transform-duplicate-keys`, `babel-plugin-transform-exponentiation-operator`, `babel-plugin-transform-flow-comments`, `babel-plugin-transform-flow-strip-types`, `babel-plugin-transform-for-of`, `babel-plugin-transform-function-name`, `babel-plugin-transform-instanceof`, `babel-plugin-transform-jscript`, `babel-plugin-transform-member-expression-literals`, `babel-plugin-transform-modules-amd`, `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-modules-systemjs`, `babel-plugin-transform-modules-umd`, `babel-plugin-transform-named-capturing-groups-regex`, `babel-plugin-transform-new-target`, `babel-plugin-transform-object-super`, `babel-plugin-transform-parameters`, `babel-plugin-transform-property-literals`, `babel-plugin-transform-property-mutators`, `babel-plugin-transform-proto-to-assign`, `babel-plugin-transform-react-constant-elements`, `babel-plugin-transform-react-display-name`, `babel-plugin-transform-react-inline-elements`, `babel-plugin-transform-react-jsx-compat`, `babel-plugin-transform-react-jsx-development`, `babel-plugin-transform-react-jsx-self`, `babel-plugin-transform-react-jsx-source`, `babel-plugin-transform-react-jsx`, `babel-plugin-transform-react-pure-annotations`, `babel-plugin-transform-regenerator`, `babel-plugin-transform-reserved-words`, `babel-plugin-transform-runtime`, `babel-plugin-transform-shorthand-properties`, `babel-plugin-transform-spread`, `babel-plugin-transform-sticky-regex`, `babel-plugin-transform-strict-mode`, `babel-plugin-transform-template-literals`, `babel-plugin-transform-typeof-symbol`, `babel-plugin-transform-typescript`, `babel-plugin-transform-unicode-escapes`, `babel-plugin-transform-unicode-regex`, `babel-preset-env`, `babel-preset-flow`, `babel-preset-react`, `babel-preset-typescript`, `babel-register`, `babel-standalone`, `babel-template`, `babel-traverse`, `babel-types`
  * [#13966](https://github.com/babel/babel/pull/13966) Run tests in a native Node.js ESM environment ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-parser`
  * [#13982](https://github.com/babel/babel/pull/13982) Extend `hasPlugin` to accept plugin-configuration array pairs ([@js-choi](https://github.com/js-choi))
* `babel-helpers`
  * [#13996](https://github.com/babel/babel/pull/13996) Don't use ESM for `require`d files in `@babel/helpers` tests ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-proposal-object-rest-spread`, `babel-traverse`
  * [#13948](https://github.com/babel/babel/pull/13948) Convert proposal-object-rest-spread to TS ([@JLHwung](https://github.com/JLHwung))
* `babel-parser`, `babel-plugin-bugfix-safari-id-destructuring-collision-in-function-expression`, `babel-plugin-bugfix-v8-spread-parameters-in-optional-chaining`, `babel-plugin-proposal-optional-chaining`, `babel-preset-react`, `babel-preset-typescript`
  * [#13978](https://github.com/babel/babel/pull/13978) Only bundle the release build, and don't import `src` in tests ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* Other
  * [#13976](https://github.com/babel/babel/pull/13976) Fail CI when `@babel/runtime` ESM tests fail ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :running_woman: Performance
* `babel-parser`
  * [#13919](https://github.com/babel/babel/pull/13919) Improve template tokenizing ([@JLHwung](https://github.com/JLHwung))

#### :microscope: Output optimization
* `babel-helpers`, `babel-plugin-proposal-async-generator-functions`, `babel-plugin-transform-runtime`, `babel-preset-env`, `babel-runtime-corejs2`, `babel-runtime`
  * [#13837](https://github.com/babel/babel/pull/13837) minify `helpers-generated.ts` ([@lightmare](https://github.com/lightmare))
## v7.16.4 (2021-11-16)

#### :eyeglasses: Spec Compliance
* `babel-helper-remap-async-to-generator`, `babel-plugin-transform-async-to-generator`
  * [#13961](https://github.com/babel/babel/pull/13961) Wait the correct number of ticks on nested `await` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-parser`
  * [#13929](https://github.com/babel/babel/pull/13929) Refactor bindingProperty parsing ([@JLHwung](https://github.com/JLHwung))

#### :bug: Bug Fix
* `babel-parser`
  * [#13957](https://github.com/babel/babel/pull/13957) Add `assertions` to `ExportNamedDeclaration` without `from` ([@sosukesuzuki](https://github.com/sosukesuzuki))
  * [#13951](https://github.com/babel/babel/pull/13951) Throw on duplicate `__proto__` props followed by assignment ([@The-x-Theorist](https://github.com/The-x-Theorist))
* `babel-plugin-proposal-async-generator-functions`, `babel-plugin-proposal-decorators`, `babel-plugin-transform-runtime`, `babel-preset-env`
  * [#12827](https://github.com/babel/babel/pull/12827) Add file extension when using `absoluteRuntime` ([@mbehzad](https://github.com/mbehzad))

#### :nail_care: Polish
* `babel-parser`
  * [#13960](https://github.com/babel/babel/pull/13960) Always expose `expressionValue` in `DirectiveLiteral` nodes ([@tolmasky](https://github.com/tolmasky))
## v7.16.3 (2021-11-09)

#### :bug: Bug Fix
* `babel-helpers`
  * [#13862](https://github.com/babel/babel/pull/13862) fix(helpers): match `Reflect.get` behaviour ([@lightmare](https://github.com/lightmare))
* `babel-plugin-transform-parameters`, `babel-traverse`
  * [#13941](https://github.com/babel/babel/pull/13941) Support transforming params of arrow functions in class fields ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-parser`
  * [#13928](https://github.com/babel/babel/pull/13928) fix: incorrect await rejection following arrow function in parameters (Closes [#13872](https://github.com/babel/babel/issues/13872)) ([@The-x-Theorist](https://github.com/The-x-Theorist))
* Other
  * [#13918](https://github.com/babel/babel/pull/13918) Fix `parserOverride` support in `@babel/eslint-parser` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :house: Internal
* `babel-parser`
  * [#13891](https://github.com/babel/babel/pull/13891) Simplifiy tracking of valid JSX positions ([@JLHwung](https://github.com/JLHwung))
  * [#13892](https://github.com/babel/babel/pull/13892) extract tt.lt and tt.gt from tt.relation ([@JLHwung](https://github.com/JLHwung))
* `babel-helper-compilation-targets`, `babel-preset-env`
  * [#13914](https://github.com/babel/babel/pull/13914) Update browserslist ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v7.16.2 (2021-11-01)

#### :bug: Bug Fix
* `babel-plugin-bugfix-safari-id-destructuring-collision-in-function-expression`
  * [#13910](https://github.com/babel/babel/pull/13910) skip id-destructuring bugfix when binding info is not found ([@JLHwung](https://github.com/JLHwung))

#### :house: Internal
* `babel-parser`
  * [#13905](https://github.com/babel/babel/pull/13905) babel-parser: add missing assertions type ([@sosukesuzuki](https://github.com/sosukesuzuki))
## v7.16.1 (2021-10-30)

#### :bug: Bug Fix
* `babel-plugin-transform-typescript`
  * [#13900](https://github.com/babel/babel/pull/13900) Fix binding access for plugin-transform-typescript ([@PeachScript](https://github.com/PeachScript))

#### :house: Internal
* [#13898](https://github.com/babel/babel/pull/13898) Skip ESLint 8 tests on publish ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

## v7.16.0 (2021-10-30)

#### :eyeglasses: Spec Compliance

- `babel-helpers`, `babel-plugin-proposal-async-generator-functions`, `babel-runtime-corejs2`, `babel-runtime-corejs3`, `babel-runtime`
  - [#13824](https://github.com/babel/babel/pull/13824) Await promises from sync iterators with `for-await` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :rocket: New Feature

- `babel-generator`, `babel-parser`, `babel-plugin-transform-typescript`, `babel-types`
  - [#13802](https://github.com/babel/babel/pull/13802) Support TypeScript 4.5 type-only import/export specifiers ([@sosukesuzuki](https://github.com/sosukesuzuki))
- `babel-parser`
  - [#13887](https://github.com/babel/babel/pull/13887) feat: support `startColumn` option ([@JLHwung](https://github.com/JLHwung))
- `babel-helper-fixtures`, `babel-helper-transform-fixture-test-runner`, `babel-parser`, `babel-plugin-syntax-typescript`, `babel-preset-typescript`
  - [#13838](https://github.com/babel/babel/pull/13838) Handle `.mts` and `.cts` files in `@babel/preset-typescript` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
- Other
  - [#13782](https://github.com/babel/babel/pull/13782) Add ESLint 8 support to `@babel/eslint-parser` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
- `babel-generator`, `babel-parser`, `babel-plugin-proposal-pipeline-operator`, `babel-plugin-syntax-pipeline-operator`
  - [#13749](https://github.com/babel/babel/pull/13749) Caret topic (pipe operator) ([@js-choi](https://github.com/js-choi))
- `babel-compat-data`, `babel-generator`, `babel-parser`, `babel-preset-env`, `babel-types`
  - [#13713](https://github.com/babel/babel/pull/13713) Enable class static blocks by default ([@sosukesuzuki](https://github.com/sosukesuzuki))
- `babel-helper-skip-transparent-expression-wrappers`, `babel-plugin-proposal-optional-chaining`
  - [#13687](https://github.com/babel/babel/pull/13687) add `skipTransparentExprWrapperNodes` helper ([@lightmare](https://github.com/lightmare))
- `babel-traverse`, `babel-types`
  - [#13666](https://github.com/babel/babel/pull/13666) Add aliases for Standardized, TypeScript, and Flow ([@jridgewell](https://github.com/jridgewell))

#### :bug: Bug Fix

- `babel-parser`, `babel-plugin-transform-typescript`
  - [#13876](https://github.com/babel/babel/pull/13876) [ts] Support private methods overloads ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
- `babel-plugin-transform-typescript`
  - [#13865](https://github.com/babel/babel/pull/13865) fix: allow enum member without initializer after non-literal member ([@lightmare](https://github.com/lightmare))
- `babel-core`, `babel-helper-create-class-features-plugin`, `babel-plugin-transform-typescript`
  - [#13854](https://github.com/babel/babel/pull/13854) Don't transform `declare class` in plugin-proposal-class-properties ([@forivall](https://github.com/forivall))
- `babel-compat-data`, `babel-plugin-bugfix-safari-id-destructuring-collision-in-function-expression`, `babel-plugin-bugfix-v8-spread-parameters-in-optional-chaining`, `babel-plugin-transform-react-constant-elements`, `babel-preset-env`, `babel-traverse`
  - [#13842](https://github.com/babel/babel/pull/13842) Implement @babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression ([@JLHwung](https://github.com/JLHwung))
- `babel-plugin-proposal-async-generator-functions`, `babel-traverse`
  - [#13813](https://github.com/babel/babel/pull/13813) Restore traversal context after enter / traverse ([@JLHwung](https://github.com/JLHwung))
- `babel-traverse`, `babel-types`
  - [#13832](https://github.com/babel/babel/pull/13832) Mark static block as FunctionParent ([@JLHwung](https://github.com/JLHwung))
- `babel-generator`
  - [#13825](https://github.com/babel/babel/pull/13825) Fix missing inner comments in function expressions ([@overlookmotel](https://github.com/overlookmotel))

#### :house: Internal

- _Every package_
  - [#13772](https://github.com/babel/babel/pull/13772) Use `workspace:^` to specify `@babel/` dependencies ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
- Other
  - [#13856](https://github.com/babel/babel/pull/13856) Update to Yarn 3.1 ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  - [#13867](https://github.com/babel/babel/pull/13867) Test on Node.js 17 ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
- `babel-helper-fixtures`, `babel-plugin-proposal-class-properties`, `babel-plugin-transform-runtime`, `babel-preset-react`
  - [#13858](https://github.com/babel/babel/pull/13858) Force loading plugins/presets from the monorepo in tests ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
- `babel-types`
  - [#13844](https://github.com/babel/babel/pull/13844) [ts] precise return type on `createTypeAnnotationBasedOnTypeof` (babel-types) ([@lightmare](https://github.com/lightmare))
- `babel-helpers`
  - [#13841](https://github.com/babel/babel/pull/13841) minor: remove ineffectual helper names filter ([@lightmare](https://github.com/lightmare))
- `babel-core`, `babel-plugin-transform-react-jsx-development`, `babel-plugin-transform-react-jsx`, `babel-types`
  - [#13820](https://github.com/babel/babel/pull/13820) Improve transform-react-jsx typings ([@JLHwung](https://github.com/JLHwung))

#### :running_woman: Performance

- `babel-types`
  - [#13843](https://github.com/babel/babel/pull/13843) Simplify (transpiled) babel-types builder wrappers ([@lightmare](https://github.com/lightmare))

## v7.15.8 (2021-10-06)

#### :eyeglasses: Spec Compliance

- `babel-helper-module-transforms`, `babel-plugin-transform-modules-amd`, `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-modules-umd`
  - [#13788](https://github.com/babel/babel/pull/13788) Sort module export names ([@JLHwung](https://github.com/JLHwung))
- `babel-parser`
  - [#13769](https://github.com/babel/babel/pull/13769) Tokenize keywords-like identifier as new tokens ([@JLHwung](https://github.com/JLHwung))

#### :bug: Bug Fix

- `babel-generator`
  - [#13821](https://github.com/babel/babel/pull/13821) Fix missing inner comments in class expressions ([@overlookmotel](https://github.com/overlookmotel))
- `babel-generator`, `babel-parser`, `babel-plugin-proposal-pipeline-operator`
  - [#13803](https://github.com/babel/babel/pull/13803) Collect comments around parentheses in expressions ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
- `babel-plugin-transform-typescript`
  - [#13800](https://github.com/babel/babel/pull/13800) fix: remove imported types from export ([@JLHwung](https://github.com/JLHwung))

#### :nail_care: Polish

- `babel-core`
  - [#13814](https://github.com/babel/babel/pull/13814) Improve debug logging for IgnoreList ([@paleite](https://github.com/paleite))
- `babel-node`
  - [#13784](https://github.com/babel/babel/pull/13784) [@babel/node] Forward the signal SIGTERM as well ([@julienw](https://github.com/julienw))

#### :house: Internal

- [#13808](https://github.com/babel/babel/pull/13808) Update parser plugins for TypeScript tests ([@sosukesuzuki](https://github.com/sosukesuzuki))
- [#13795](https://github.com/babel/babel/pull/13795) Fix Gulpfile path separator issue on Windows ([@NotWearingPants](https://github.com/NotWearingPants))

#### :running_woman: Performance

- `babel-code-frame`
  - [#13812](https://github.com/babel/babel/pull/13812) Optimization of string splitting ([@shoonia](https://github.com/shoonia))

## v7.15.7 (2021-09-17)

#### :bug: Bug Fix

- `babel-parser`
  - [#13771](https://github.com/babel/babel/pull/13771) fix(babel-parser): Allow line break before `assert` return type ([@JuniorTour](https://github.com/JuniorTour))
  - [#13755](https://github.com/babel/babel/pull/13755) [estree] Fix conversion of `PrivateName` in `MemberExpression` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
- `babel-standalone`
  - [#13754](https://github.com/babel/babel/pull/13754) Move pipeline operator to Stage 2 ([@sdegutis](https://github.com/sdegutis))
- Other
  - [#13767](https://github.com/babel/babel/pull/13767) Fix `regexpu-core` bundling in `@babel/standalone` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  - [#13751](https://github.com/babel/babel/pull/13751) [eslint-parser] Represent `static` using a `Keyword` token ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
- `babel-helper-validator-identifier`
  - [#13759](https://github.com/babel/babel/pull/13759) Update Identifier definitions to Unicode 14 ([@JLHwung](https://github.com/JLHwung))

#### :house: Internal

- `babel-parser`
  - [#13768](https://github.com/babel/babel/pull/13768) Store token type as number ([@JLHwung](https://github.com/JLHwung))
- `babel-helper-module-transforms`, `babel-plugin-transform-modules-commonjs`
  - [#13739](https://github.com/babel/babel/pull/13739) Throw a better error when transforming imported bindings in types ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
- Other
  - [#13140](https://github.com/babel/babel/pull/13140) Update to Yarn 3 ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  - [#13744](https://github.com/babel/babel/pull/13744) chore: add constraint for duplicate dependency declarations ([@merceyz](https://github.com/merceyz))
- `babel-helper-transform-fixture-test-runner`
  - [#13741](https://github.com/babel/babel/pull/13741) Replace the deprecated `produceCachedData` option used in `vm` module with `script.createCachedData()` ([@wafuwafu13](https://github.com/wafuwafu13))

## v7.15.6 (2021-09-09)

#### :eyeglasses: Spec Compliance

- `babel-parser`, `babel-plugin-proposal-pipeline-operator`
  - [#13668](https://github.com/babel/babel/pull/13668) Fix right precedence of Hack pipes ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :bug: Bug Fix

- `babel-parser`, `babel-plugin-proposal-pipeline-operator`
  - [#13668](https://github.com/babel/babel/pull/13668) Fix right precedence of Hack pipes ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
- `babel-plugin-proposal-object-rest-spread`
  - [#13711](https://github.com/babel/babel/pull/13711) fix: Duplicate function call in variable destructuring ([@dan-kez](https://github.com/dan-kez))
- `babel-types`
  - [#13733](https://github.com/babel/babel/pull/13733) id in import attributes should not be referenced ([@JLHwung](https://github.com/JLHwung))
- `babel-parser`
  - [#13731](https://github.com/babel/babel/pull/13731) fix(babel-parser): Fix end of `range` of `SequenceExpression` ([@sosukesuzuki](https://github.com/sosukesuzuki))

#### :house: Internal

- `babel-helper-transform-fixture-test-runner`
  - [#13738](https://github.com/babel/babel/pull/13738) Use `@types/node` for `vm` module ([@wafuwafu13](https://github.com/wafuwafu13))
- `babel-preset-env`
  - [#13737](https://github.com/babel/babel/pull/13737) Remove duplicate `dependency` and `devDependency` in preset-env ([@fyzhu](https://github.com/fyzhu))

## v7.15.5 (2021-09-04)

#### :eyeglasses: Spec Compliance

- `babel-parser`
  - [#13727](https://github.com/babel/babel/pull/13727) Disallow `#a in #b in c` and similar expressions ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :leftwards_arrow_with_hook: Revert

- `babel-core`
  - [#13732](https://github.com/babel/babel/pull/13732) Revert "fix: non breaking align options naming" ([@fedeci](https://github.com/fedeci))

## v7.15.4 (2021-09-02)

#### :eyeglasses: Spec Compliance

- `babel-helper-create-class-features-plugin`, `babel-helpers`, `babel-plugin-bugfix-v8-spread-parameters-in-optional-chaining`, `babel-plugin-proposal-async-generator-functions`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-private-methods`, `babel-plugin-proposal-private-property-in-object`, `babel-preset-env`, `babel-runtime-corejs2`, `babel-runtime-corejs3`, `babel-runtime`
  - [#13601](https://github.com/babel/babel/pull/13601) Disallow reinitializing private elements ([@komyg](https://github.com/komyg))

#### :bug: Bug Fix

- [#13638](https://github.com/babel/babel/pull/13638) [eslint] Allow `"latest"` as `ecmaVersion` ([@fisker](https://github.com/fisker))
- `babel-traverse`, `babel-types`
  - [#13723](https://github.com/babel/babel/pull/13723) `getBindingIdentifiers` should return params for private methods ([@JLHwung](https://github.com/JLHwung))
- `babel-types`
  - [#13715](https://github.com/babel/babel/pull/13715) [babel 8] fix: stricter rest element builder check ([@JLHwung](https://github.com/JLHwung))
- `babel-helper-compilation-targets`
  - [#13697](https://github.com/babel/babel/pull/13697) fix: pass `browserslistEnv` to `resolveTargets` ([@meskill](https://github.com/meskill))
- `babel-helper-create-class-features-plugin`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-private-property-in-object`
  - [#13656](https://github.com/babel/babel/pull/13656) fix: fix static private field shadowed by local variable ([@colinaaa](https://github.com/colinaaa))
- `babel-plugin-transform-typescript`
  - [#13664](https://github.com/babel/babel/pull/13664) [ts] Fix transform for nested namespaces shorthand syntax ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
- `babel-parser`
  - [#13680](https://github.com/babel/babel/pull/13680) fix(babel-parser): delete `static` property from class static block for TS ([@sosukesuzuki](https://github.com/sosukesuzuki))
  - [#13695](https://github.com/babel/babel/pull/13695) fix: assure left bracket is not consumed after dot ([@JLHwung](https://github.com/JLHwung))
- `babel-core`
  - [#13532](https://github.com/babel/babel/pull/13532) fix: non breaking align options naming ([@fedeci](https://github.com/fedeci))

#### :memo: Documentation

- `babel-parser`
  - [#13691](https://github.com/babel/babel/pull/13691) add missing ExportNamespaceSpecifier in spec.md ([@flyinox](https://github.com/flyinox))

#### :house: Internal

- `babel-helper-create-class-features-plugin`, `babel-plugin-proposal-class-static-block`, `babel-plugin-proposal-private-property-in-object`, `babel-plugin-syntax-class-static-block`, `babel-plugin-syntax-private-property-in-object`, `babel-plugin-syntax-top-level-await`, `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-modules-systemjs`, `babel-preset-env`, `babel-standalone`
  - [#13717](https://github.com/babel/babel/pull/13717) archive stage 4 parser plugins ([@JLHwung](https://github.com/JLHwung))

#### :running_woman: Performance

- `babel-core`, `babel-generator`, `babel-helper-annotate-as-pure`, `babel-helper-builder-binary-assignment-operator-visitor`, `babel-helper-builder-react-jsx`, `babel-helper-define-map`, `babel-helper-explode-assignable-expression`, `babel-helper-function-name`, `babel-helper-get-function-arity`, `babel-helper-hoist-variables`, `babel-helper-member-expression-to-functions`, `babel-helper-module-imports`, `babel-helper-module-transforms`, `babel-helper-optimise-call-expression`, `babel-helper-remap-async-to-generator`, `babel-helper-replace-supers`, `babel-helper-simple-access`, `babel-helper-skip-transparent-expression-wrappers`, `babel-helper-split-export-declaration`, `babel-helper-wrap-function`, `babel-helpers`, `babel-preset-env`, `babel-template`, `babel-traverse`
  - [#13685](https://github.com/babel/babel/pull/13685) Use named imports for babel types ([@JLHwung](https://github.com/JLHwung))
- `babel-cli`, `babel-helper-define-map`, `babel-helpers`, `babel-node`, `babel-parser`, `babel-plugin-proposal-async-generator-functions`, `babel-plugin-proposal-decorators`, `babel-plugin-transform-classes`, `babel-plugin-transform-for-of`, `babel-plugin-transform-modules-systemjs`, `babel-plugin-transform-parameters`, `babel-traverse`, `babel-types`
  - [#13609](https://github.com/babel/babel/pull/13609) perf: partially replace `.concat` with `.push` ([@fedeci](https://github.com/fedeci))

## v7.15.3 (2021-08-11)

#### :eyeglasses: Spec Compliance

- `babel-helpers`, `babel-plugin-transform-classes`
  - [#13571](https://github.com/babel/babel/pull/13571) Derived constructors should not be allowed to return primitives ([@dhrubesh](https://github.com/dhrubesh))

#### :bug: Bug Fix

- `babel-parser`
  - [#13659](https://github.com/babel/babel/pull/13659) Fix parse error when using named import "as" with flow parser ([@doing-art](https://github.com/doing-art))
  - [#13655](https://github.com/babel/babel/pull/13655) [flow] Fix parsing of arrows in conditional expressions in parentheses ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  - [#13645](https://github.com/babel/babel/pull/13645) Disallow `<T>(a => b)` when parsing Flow ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  - [#13657](https://github.com/babel/babel/pull/13657) fix(parser): add `attachComment` to `ParserOptions` type ([@sosukesuzuki](https://github.com/sosukesuzuki))

#### :house: Internal

- [#13643](https://github.com/babel/babel/pull/13643) Use `@babel/eslint-parser/experimental-worker` for our own repo ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :running_woman: Performance

- `babel-parser`
  - [#13652](https://github.com/babel/babel/pull/13652) perf: minor tokenizer tweaks ([@lightmare](https://github.com/lightmare))
- `babel-register`
  - [#13654](https://github.com/babel/babel/pull/13654) Reduce stat calls in register ([@overlookmotel](https://github.com/overlookmotel))

## v7.15.2 (2021-08-08)

#### :bug: Bug Fix

- `babel-parser`
  - [#13653](https://github.com/babel/babel/pull/13653) Add `.errors` to the `@babel/parser` return type definitions ([@sosukesuzuki](https://github.com/sosukesuzuki))
  - [#13641](https://github.com/babel/babel/pull/13641) Fix array destructuring elision parsing in TS arrow functions ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

## v7.15.1 (2021-08-05)

#### :leftwards_arrow_with_hook: Revert

- `babel-plugin-transform-react-display-name`
  - [#13637](https://github.com/babel/babel/pull/13637) Revert "Add display name after create context (#13501)" ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

## v7.15.0 (2021-08-04)

#### :eyeglasses: Spec Compliance

- `babel-parser`
  - [#13523](https://github.com/babel/babel/pull/13523) feat(ts): raise error for abstract property with initializer ([@fedeci](https://github.com/fedeci))

#### :rocket: New Feature

- `babel-parser`
  - [#13229](https://github.com/babel/babel/pull/13229) Add `attachComment` parser option to disable comment attachment ([@JLHwung](https://github.com/JLHwung))
- `babel-standalone`
  - [#13476](https://github.com/babel/babel/pull/13476) standalone: update `preset-stage-*` ([@sosukesuzuki](https://github.com/sosukesuzuki))
  - [#13555](https://github.com/babel/babel/pull/13555) feat: support hack pipeline in `@babel/standalone` ([@JLHwung](https://github.com/JLHwung))
- `babel-parser`, `babel-preset-env`
  - [#13387](https://github.com/babel/babel/pull/13387) Enable top-level `await` parsing by default ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
- `babel-plugin-transform-typescript`, `babel-preset-typescript`
  - [#13324](https://github.com/babel/babel/pull/13324) Support TypeScript const enums ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
- `babel-plugin-transform-typescript`
  - [#13528](https://github.com/babel/babel/pull/13528) feat(typescript): implement namespace alias ([@colinaaa](https://github.com/colinaaa))
- `babel-core`, `babel-helper-create-class-features-plugin`, `babel-helper-module-transforms`, `babel-plugin-transform-modules-commonjs`
  - [#13290](https://github.com/babel/babel/pull/13290) feat: add `noIncompleteNsImportDetection` assumption to `plugin-transform-modules-commonjs` ([@fedeci](https://github.com/fedeci))
- `babel-plugin-transform-react-display-name`
  - [#13501](https://github.com/babel/babel/pull/13501) Add display name after create context ([@JLHwung](https://github.com/JLHwung))
- `babel-parser`, `babel-plugin-proposal-pipeline-operator`, `babel-plugin-syntax-pipeline-operator`
  - [#13416](https://github.com/babel/babel/pull/13416) Hack-pipe proposal with `%` topic token ([@js-choi](https://github.com/js-choi))
- `babel-generator`, `babel-parser`, `babel-plugin-proposal-pipeline-operator`, `babel-plugin-syntax-pipeline-operator`, `babel-traverse`, `babel-types`
  - [#13191](https://github.com/babel/babel/pull/13191) Add support for the "Hack" pipeline proposal ([@js-choi](https://github.com/js-choi))
- `babel-plugin-transform-runtime`
  - [#13398](https://github.com/babel/babel/pull/13398) Expose `@babel/eslint-parser/experimental-worker` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
- `babel-compat-data`, `babel-helper-compilation-targets`, `babel-preset-env`
  - [#13448](https://github.com/babel/babel/pull/13448) Add support for rhino as a compilation target ([@gausie](https://github.com/gausie))
- `babel-compat-data`, `babel-parser`, `babel-preset-env`
  - [#13554](https://github.com/babel/babel/pull/13554) Enable ergonomic brand checks (`#priv in`) by default ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :bug: Bug Fix

- `babel-parser`, `babel-plugin-transform-typescript`
  - [#13513](https://github.com/babel/babel/pull/13513) [ts] support optional chain call with generic ([@lala7573](https://github.com/lala7573))
- `babel-plugin-transform-typescript`
  - [#13605](https://github.com/babel/babel/pull/13605) Handle typescript function overloading in a default export ([@tony-go](https://github.com/tony-go))
- `babel-parser`
  - [#13536](https://github.com/babel/babel/pull/13536) Fix `%==` parsing in hack pipes ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  - [#13426](https://github.com/babel/babel/pull/13426) parser: Fix Hack/smart-pipe error positions ([@js-choi](https://github.com/js-choi))
  - [#13622](https://github.com/babel/babel/pull/13622) fix(ts): raise error for `export default interface {}` ([@a-tarasyuk](https://github.com/a-tarasyuk))

#### :memo: Documentation

- [#13607](https://github.com/babel/babel/pull/13607) chore(doc): add jest specific pckg command ([@tony-go](https://github.com/tony-go))

---

- See [CHANGELOG - v7.0.0 to v7.14.9](/.github/CHANGELOG-v7.0.0-v7.14.9.md) for v7.0.0 to v7.14.9 changes.
- See [CHANGELOG - v7 prereleases](/.github/CHANGELOG-v7-prereleases.md) for v7.0.0-alpha.1 to v7.0.0-rc.4 changes.

We have to split the v7 changelog in multiple files otherwise it's too big to render on GitHub.
