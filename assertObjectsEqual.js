const eqObjects = require('./eqObjects');
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

// Function implementation

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;

  if (Object.keys(actual).length !== Object.keys(expected).length) {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} is not equal to ${inspect(expected)}`);
    return;
  }

  for (const key of Object.keys(actual)) {
    if (!eqObjects(actual[key], expected[key])) {
      console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} is not equal to ${inspect(expected)}`);
      return;
    }
  } console.log(`✅✅✅  Assertion Passed: ${inspect(actual)} is equal to ${inspect(expected)}`);
  return;

};



//test code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false
