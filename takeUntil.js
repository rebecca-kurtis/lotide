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

//Test code

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

// Expected output : [ 1, 2, 5, 7, 2 ]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//Expected output: [ 'I\'ve', 'been', 'to', 'Hollywood' ]

const example1 = ["this", "is", "a", "list"];
assertArraysEqual(takeUntil(example1, x => x === "is"), ["a", "list"]); //false

const data3 = [1, 5, 10, 15, 20, 25, 30, 35, 40];
assertArraysEqual(takeUntil(data3, x => x < 20), [1, 5, 10, 15,]); //true

const example2 = ["my", "name", "is", "Rebecca", ",", "not", "Fred"];
assertArraysEqual(takeUntil(example2, x => x === ","), ["my", "name", "is", "Rebecca",]); //false