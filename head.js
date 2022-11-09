const head = function(data) {
  // create a function which returns the first item in the array as the element itself
  // an array with only one element should still yield that one element as its head
  // an empty array should yield undefined as its head.

  if (data.length >= 1) {
    return data[0];
  } else return undefined;

};

module.exports = head;