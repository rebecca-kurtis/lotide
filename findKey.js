//findKey takes in an object and a callback
//it should scan the object
//and return the first key for which the callback returns a truthy values
// if no key is found then it should return undefined.


const findKey = function(object, callback) {

  for (const key in object) {
    let target = object[key];
    let comparisonResult = callback(target);

    if (comparisonResult) {
      return key;
    }
  }
};

module.exports = findKey;