// takeUntil will take in two parameters
// the array to work with, and the callback
// it will return a slice of the array with elements taken from the beginning
// it should keep going until the call back returns a truthy value.
// the callback should only be provided one value: the item in the array
//it will keep collecting items until the callback returns a truthy value


const takeUntil = function(array, callback) {
  let index = 0;
  for (let item of array) {
    if (callback(item)) {
      return array.slice(0, index);
    }
    index++;
  }
  return;

};

module.exports = takeUntil;