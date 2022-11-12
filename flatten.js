// create an function that will take in an array containing elements
// including nested arrays and return a "flattened version"
// meaning combine all the elements in the arrays.
// use Array.isArray() to check if it is an array.
const flatten = function(array) {
  let flattenedArray = [];

  for (const element of array) {
    if (Array.isArray(element) === true) {
      flattenedArray.push(...element);
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;

};

module.exports = flatten;