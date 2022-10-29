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

// middle function should take in an array and return the middle-most element(s) of the given array.
// for arrays with one or two elements, there is no middle - return an empty array.
// for arrays with odd number of elements - an array of only the single middle element should be returned.
// for arrays with an even number of elements - an array containing the two middle elements should be returned.

const middle = function(data) {
  if (data.length <= 2) {
    return [];
  } else if (data.length % 2 !== 0) {
    return data[(data.length - 1) / 2];
  } else if (data.length % 2 === 0) {
    return [data[(data.length / 2) - 1], data[(data.length / 2)]];
  }
};


//Test Cases

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // => [4]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

