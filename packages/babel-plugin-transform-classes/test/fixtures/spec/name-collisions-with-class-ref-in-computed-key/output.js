var Foo = /*#__PURE__*/function (_Bar) {
  "use strict";

  babelHelpers.inherits(Foo, _Bar);
  var _super = babelHelpers.createSuper(Foo);
  function Foo() {
    var _thisSuper, _this;
    babelHelpers.classCallCheck(this, Foo);
    _this = _super.call(this);
    var X = /*#__PURE__*/function (_ref) {
      function X() {
        babelHelpers.classCallCheck(this, X);
      }
      babelHelpers.createClass(X, [{
        key: _ref,
        value: function value() {}
      }]);
      return X;
    }((() => {
      var _Foo;
      babelHelpers.get((_thisSuper = babelHelpers.assertThisInitialized(_this), babelHelpers.getPrototypeOf(Foo.prototype)), "method", _thisSuper).call(_thisSuper);
    })());
    return _this;
  }
  return babelHelpers.createClass(Foo);
}(Bar);
