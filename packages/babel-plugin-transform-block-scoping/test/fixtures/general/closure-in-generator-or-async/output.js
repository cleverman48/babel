function* a() {
  var _loop = function* () {
    var x = yield "iteration";
    fn = function () {
      return x;
    };
  };
  do {
    var fn;
    yield* _loop();
  } while (false);
  return fn;
}
async function b() {
  var _loop2 = async function () {
    var x = await "iteration";
    fn = function () {
      return x;
    };
  };
  do {
    var fn;
    await _loop2();
  } while (false);
  return fn;
}
async function* c() {
  var _loop3 = async function* () {
    var x = yield "iteration";
    fn = function () {
      return x;
    };
  };
  do {
    var fn;
    yield* _loop3();
  } while (false);
  return fn;
}
