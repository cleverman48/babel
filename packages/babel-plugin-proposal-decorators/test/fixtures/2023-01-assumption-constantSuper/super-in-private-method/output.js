var _call_x, _initProto;
const dec = () => {};
class Foo extends Bar {
  static {
    [_call_x, _initProto] = babelHelpers.applyDecs2301(this, [[dec, 2, "x", function () {
      return Bar.prototype.foo.call(this);
    }]], [], _ => #x in _).e;
  }
  constructor(...args) {
    super(...args);
    _initProto(this);
  }
  #x = _call_x;
}
