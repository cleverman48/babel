"use strict";

let Base = function Base() {};
Base.prototype.test = 1;
let Obj = /*#__PURE__*/function (_Base) {
  babelHelpers.inheritsLoose(Obj, _Base);
  function Obj() {
    return _Base.apply(this, arguments) || this;
  }
  var _proto = Obj.prototype;
  _proto.get = function get() {
    return _Base.prototype.test;
  };
  return Obj;
}(Base);
Obj.prototype.test = 2;
const obj = new Obj();
expect(obj.test).toBe(2);
expect(obj.get()).toBe(1);
