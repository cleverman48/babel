var _init_a, _initProto;
const dec = () => {};
class Foo {
  static {
    [_init_a, _initProto] = babelHelpers.applyDecs2305(this, [[dec, 2, "a"], [dec, 0, "a"]], []).e;
  }
  a = (_initProto(this), _init_a(this, 123));
  a() {
    return 1;
  }
}
