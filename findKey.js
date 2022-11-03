const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

//findKey takes in an object and a callback
//it should scan the object
//and return the first key for which the callback returns a truthy values
// if no key is found then it should return undefined.


const findKey = function (object, callback) {

  for (const key in object) {
    let target = object[key];
    let comparisonResult = callback(target);

    if (comparisonResult) {
      return key;
    }
  }
};
// Testing code

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"

assertEqual(findKey({
  "Dog": { legs: 4 },
  "Bird": { legs: 2 },
  "Cow": { legs: 4 },
  "Snake": { legs: 0 }
}, x => x.legs === 2), "Bird"); // => "Bird"

assertEqual(findKey({
  "Dog": { legs: 4 },
  "Bird": { legs: 2 },
  "Cow": { legs: 4 },
  "Snake": { legs: 0 }
}, x => x.legs === 0), "Bird"); // => "Snake"

