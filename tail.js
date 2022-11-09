//needs to return the tail of an array - everything except the first item
// it should not modify the array, just return a new array.
// an array with only one element should yield an empty array for its tail
// an empty array should yield an empty array for its tail.

const tail = function(data) {
  if (data.length === 1) {
    return [];
  }
  let newArray = data.slice([1]);
  return newArray;
};

module.exports = tail;
