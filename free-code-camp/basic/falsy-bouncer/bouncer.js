const bouncer = arr => arr.filter(el => Boolean(el));

bouncer([1, null, NaN, 2, undefined]);