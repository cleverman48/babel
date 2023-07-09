var oldReflect = this.Reflect;
var oldHTMLElement = this.HTMLElement;
try {
  // Pretend that `Reflect.construct` isn't supported.
  this.Reflect = undefined;
  this.HTMLElement = function () {
    // Here, `this.HTMLElement` is this function, not the original HTMLElement
    // constructor. `this.constructor` should be this function too, but isn't.
    constructor = this.constructor;
  };
  var constructor;
  var CustomElement = /*#__PURE__*/function (_HTMLElement) {
    "use strict";

    babelHelpers.inherits(CustomElement, _HTMLElement);
    var _super = babelHelpers.createSuper(CustomElement);
    function CustomElement() {
      babelHelpers.classCallCheck(this, CustomElement);
      return _super.apply(this, arguments);
    }
    return babelHelpers.createClass(CustomElement);
  }( /*#__PURE__*/babelHelpers.wrapNativeSuper(HTMLElement));
  ;
  new CustomElement();
  expect(constructor).toBe(CustomElement);
} finally {
  // Restore original env
  this.Reflect = oldReflect;
  this.HTMLElement = oldHTMLElement;
}
