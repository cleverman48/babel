var _a = /*#__PURE__*/babelHelpers.classPrivateFieldLooseKey("a");
class C {
  static testIf(o) {
    if (o !== null && o !== void 0 && babelHelpers.classPrivateFieldLooseBase(o, _a)[_a].b.c.d) {
      return true;
    }
    return false;
  }
  static testConditional(o) {
    return (o === null || o === void 0 ? void 0 : babelHelpers.classPrivateFieldLooseBase(o, _a)[_a].b)?.c.d ? true : false;
  }
  static testLoop(o) {
    while (o !== null && o !== void 0 && babelHelpers.classPrivateFieldLooseBase(o, _a)[_a].b.c.d) {
      for (; (o === null || o === void 0 ? void 0 : babelHelpers.classPrivateFieldLooseBase(o, _a)[_a].b.c)?.d;) {
        let i = 0;
        do {
          i++;
          if (i === 2) {
            return true;
          }
        } while ((o === null || o === void 0 ? void 0 : babelHelpers.classPrivateFieldLooseBase(o, _a)[_a].b)?.c.d);
      }
    }
    return false;
  }
  static testNegate(o) {
    return !!(o === null || o === void 0 ? void 0 : babelHelpers.classPrivateFieldLooseBase(o, _a)[_a].b)?.c.d;
  }
  static testIfDeep(o) {
    var _o$obj;
    if (((_o$obj = o.obj) === null || _o$obj === void 0 ? void 0 : babelHelpers.classPrivateFieldLooseBase(_o$obj, _a)[_a].b)?.c.d) {
      return true;
    }
    return false;
  }
  static testConditionalDeep(o) {
    var _o$obj2;
    return ((_o$obj2 = o.obj) === null || _o$obj2 === void 0 ? void 0 : babelHelpers.classPrivateFieldLooseBase(_o$obj2, _a)[_a].b)?.c.d ? true : false;
  }
  static testLoopDeep(o) {
    while ((_o$obj3 = o.obj) !== null && _o$obj3 !== void 0 && babelHelpers.classPrivateFieldLooseBase(_o$obj3, _a)[_a].b.c.d) {
      var _o$obj3;
      for (; ((_o$obj4 = o.obj) === null || _o$obj4 === void 0 ? void 0 : babelHelpers.classPrivateFieldLooseBase(_o$obj4, _a)[_a].b.c)?.d;) {
        var _o$obj4;
        let i = 0;
        do {
          var _o$obj5;
          i++;
          if (i === 2) {
            return true;
          }
        } while (((_o$obj5 = o.obj) === null || _o$obj5 === void 0 ? void 0 : babelHelpers.classPrivateFieldLooseBase(_o$obj5, _a)[_a].b)?.c.d);
      }
    }
    return false;
  }
  static testNegateDeep(o) {
    var _o$obj6;
    return !!((_o$obj6 = o.obj) === null || _o$obj6 === void 0 ? void 0 : babelHelpers.classPrivateFieldLooseBase(_o$obj6, _a)[_a].b)?.c.d;
  }
  static testLogicalInIf(o) {
    if ((o === null || o === void 0 ? void 0 : babelHelpers.classPrivateFieldLooseBase(o, _a)[_a].b)?.c.d && (o === null || o === void 0 ? void 0 : babelHelpers.classPrivateFieldLooseBase(o, _a)[_a])?.b.c.d) {
      return true;
    }
    return false;
  }
  static testLogicalInReturn(o) {
    return (o === null || o === void 0 ? void 0 : babelHelpers.classPrivateFieldLooseBase(o, _a)[_a].b)?.c.d && (o === null || o === void 0 ? void 0 : babelHelpers.classPrivateFieldLooseBase(o, _a)[_a])?.b.c.d;
  }
  static testNullishCoalescing(o) {
    if ((o === null || o === void 0 ? void 0 : babelHelpers.classPrivateFieldLooseBase(o, _a)[_a].b)?.c.non_existent ?? (o === null || o === void 0 ? void 0 : babelHelpers.classPrivateFieldLooseBase(o, _a)[_a].b)?.c.d) {
      return (o === null || o === void 0 ? void 0 : babelHelpers.classPrivateFieldLooseBase(o, _a)[_a].b)?.c.non_existent ?? (o === null || o === void 0 ? void 0 : babelHelpers.classPrivateFieldLooseBase(o, _a)[_a].b)?.c.d;
    }
    return (o === null || o === void 0 ? void 0 : babelHelpers.classPrivateFieldLooseBase(o, _a)[_a].b)?.c.non_existent ?? o;
  }
}
Object.defineProperty(C, _a, {
  writable: true,
  value: {
    b: {
      c: {
        d: 2
      }
    }
  }
});
C.test();
C.testNullish();
