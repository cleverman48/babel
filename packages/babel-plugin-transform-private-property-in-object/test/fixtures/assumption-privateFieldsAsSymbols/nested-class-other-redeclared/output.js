var _foo = /*#__PURE__*/Symbol("foo");
var _bar = /*#__PURE__*/Symbol("bar");
class Foo {
  constructor() {
    Object.defineProperty(this, _foo, {
      writable: true,
      value: 1
    });
    Object.defineProperty(this, _bar, {
      writable: true,
      value: 1
    });
  }
  test() {
    var _bar2 = /*#__PURE__*/Symbol("bar");
    class Nested {
      constructor() {
        Object.defineProperty(this, _bar2, {
          writable: true,
          value: 2
        });
      }
      test() {
        Object.prototype.hasOwnProperty.call(babelHelpers.checkInRHS(this), _foo);
        Object.prototype.hasOwnProperty.call(babelHelpers.checkInRHS(this), _bar2);
      }
    }
    Object.prototype.hasOwnProperty.call(babelHelpers.checkInRHS(this), _foo);
    Object.prototype.hasOwnProperty.call(babelHelpers.checkInRHS(this), _bar);
  }
}
