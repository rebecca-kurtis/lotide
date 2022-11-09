const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS

assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should Fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should Fail

assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]); //should pass
assertArraysEqual([1, 2, 4], [1, 2, 3, 4]); //should fail