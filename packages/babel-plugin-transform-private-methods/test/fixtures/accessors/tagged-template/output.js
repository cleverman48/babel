var _tag = /*#__PURE__*/new WeakMap();
class Foo {
  constructor() {
    babelHelpers.classPrivateFieldInitSpec(this, _tag, {
      get: _get_tag,
      set: void 0
    });
    babelHelpers.classPrivateFieldGet(this, _tag).bind(this)``;
  }
}
function _get_tag() {
  return () => this;
}
new Foo();
