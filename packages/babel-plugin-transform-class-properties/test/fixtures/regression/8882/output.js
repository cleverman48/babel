const classes = [];
for (let i = 0; i <= 10; ++i) {
  var _class, _bar;
  let _i;
  classes.push((_bar = /*#__PURE__*/new WeakMap(), _i = i, (_class = class A {
    constructor() {
      babelHelpers.defineProperty(this, _i, `computed field ${i}`);
      babelHelpers.classPrivateFieldInitSpec(this, _bar, {
        writable: true,
        value: `private field ${i}`
      });
    }
    getBar() {
      return babelHelpers.classPrivateFieldGet(this, _bar);
    }
  }, babelHelpers.defineProperty(_class, "foo", `static field ${i}`), _class)));
}
