babelHelpers.construct(Numbers, babelHelpers.toConsumableArray(nums));
babelHelpers.construct(Numbers, [1].concat(babelHelpers.toConsumableArray(nums)));
babelHelpers.construct(Numbers, babelHelpers.arrayWithoutHoles([1,, 3]));
