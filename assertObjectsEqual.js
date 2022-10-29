const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  } return true;
};


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
