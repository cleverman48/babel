var Foo = /*#__PURE__*/function (_Bar) {
  "use strict";

  babelHelpers.inherits(Foo, _Bar);
  var _super = babelHelpers.createSuper(Foo);
  function Foo() {
    var _thisSuper, _thisSuper2, _this;
    babelHelpers.classCallCheck(this, Foo);
    var t = () => babelHelpers.get((_thisSuper = babelHelpers.assertThisInitialized(_this), babelHelpers.getPrototypeOf(Foo.prototype)), "test", _thisSuper).call(_thisSuper);
    babelHelpers.get((_thisSuper2 = babelHelpers.assertThisInitialized(_this), babelHelpers.getPrototypeOf(Foo.prototype)), "foo", _thisSuper2).call(_thisSuper2);
    return _this = _super.call(this);
  }
  return babelHelpers.createClass(Foo);
}(Bar);
