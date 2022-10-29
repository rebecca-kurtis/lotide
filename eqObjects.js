const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function (array1, array2) {
  for (let x = 0; x < array1.length; x++ ) {
      if (array1[x] !== array2[x]) {
        return false;}
  } 
  return true;
};

// Returns true if both objects have identical keys with identical values. 
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false; 
  };
  
  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key], object2[key]) === true) {
      return eqArrays(true);
    } else if (object1[key] !== object2[key] ){
      return false;
    } 
  } return true;
};


//Test code

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true); // => true


const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
eqArrays(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
eqArrays(eqObjects(cd, cd2), false);