"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Test = void 0;
var Test = /*#__PURE__*/function () {
  function Test() {
    babelHelpers.classCallCheck(this, Test);
  }
  babelHelpers.createClass(Test, [{
    key: "invite",
    value: function invite() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var privacy = options.privacy || "Private";
      console.log(this);
    }
  }]);
  return Test;
}();
exports.Test = Test;
