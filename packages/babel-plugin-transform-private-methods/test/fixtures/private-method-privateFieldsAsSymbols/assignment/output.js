var _privateMethod = /*#__PURE__*/Symbol("privateMethod");
class Foo {
  constructor() {
    Object.defineProperty(this, _privateMethod, {
      value: _privateMethod2
    });
    this.publicField = babelHelpers.classPrivateFieldLooseBase(this, _privateMethod)[_privateMethod]();
  }
}
function _privateMethod2() {
  return 42;
}
