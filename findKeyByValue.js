// function takes in an object and a value.
// it should scan the object and return the first key which contains a given value
// if no key with that given value is found, then it should return undefined.

const findKeyByValue = function(object, value) {

  for (const element in object) {
    if (object[element] === value) {
      return element;
    }
  }

};

module.exports = findKeyByValue;