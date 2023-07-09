"use strict";

let Base = /*#__PURE__*/function () {
  function Base() {
    babelHelpers.classCallCheck(this, Base);
  }
  babelHelpers.createClass(Base, [{
    key: "test",
    set: function (v) {
      throw new Error("gobbledygook");
    }
  }]);
  return Base;
}();
let Obj = /*#__PURE__*/function (_Base) {
  babelHelpers.inherits(Obj, _Base);
  var _super = babelHelpers.createSuper(Obj);
  function Obj() {
    babelHelpers.classCallCheck(this, Obj);
    return _super.apply(this, arguments);
  }
  babelHelpers.createClass(Obj, [{
    key: "call",
    value: function call() {
      return babelHelpers.get(babelHelpers.getPrototypeOf(Obj.prototype), "test", this).call(this);
    }
  }, {
    key: "test",
    value: function test() {
      throw new Error("gobbledygook");
    }
  }]);
  return Obj;
}(Base);
const obj = new Obj();
expect(() => {
  obj.call();

  // Assert that this throws, but that it's not
  // a gobbledygook error that is thrown
}).toThrow(TypeError);
