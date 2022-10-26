const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function(array1, array2) {
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      console.log(`❌❌❌ ${array1} is not equal to ${array2}`);
      return;
    }
  }
  console.log(`✅✅✅ ${array1} is equal to ${array2}`);
  return;
};

const without = function(source, itemsToRemove) {
  let newArray = [];

  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      newArray.push(item);
    }
  }

  return newArray;
};

//Test cases
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([1, 2, 4, 5, 7, 9], [4, 7, 9])); // => [1, 2, 5]
console.log(without(["1", "2", "3", "4", "5"], [1, 2, "3", "5"])); // => ["1", "2", "4"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);