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

// create an function that will take in an array containing elements
// including nested arrays and return a "flattened version"
// meaning combine all the elements in the arrays.
// use Array.isArray() to check if it is an array.
const flatten = function(array) {
  let flattenedArray = [];

  for (const element of array) {
    if (Array.isArray(element) === true) {
    //  flattenedArray = array.join(element);
      flattenedArray.push(...element);
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;

};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 4, [8, 12], 16, [20]])); // => [1, 4, 8, 12, 16, 20]