/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

}; */

const eqArrays = function (array1, array2) {
  for (let x = 0; x < array1.length; x++ ) {
      if (array1[x] !== array2[x]) {
        return console.log(`❌❌❌ ${array1} is not equal to ${array2}`);}
  } 
  return console.log(`✅✅✅ ${array1} is equal to ${array2}`);
}; 

eqArrays([1, 2, 3], [1, 2, 3]); // => should PASS

eqArrays([1, 2, 3], [3, 2, 1]); // => should PASS
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => should PASS

