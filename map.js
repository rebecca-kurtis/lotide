// Test code

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

// map function will take in two arguements:
// an array to map and a callback function
// and will return a new array based on the results of the callback function

const words = ["monstera", "pothos", "hoya", "cactus", "begonia"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Test cases

const results1 = map(words, word => word[0]);
console.log(results1);

const example1 = ["this", "is", "a", "list"];
assertArraysEqual(map(example1, example => example[0]), ["t", "i", "a", "l"]); //true

const example2 = ["how", "are", "you", "doing"];
assertArraysEqual(map(example2, example => example[0]), ["h", "r", "y", "d"]); // fail

const example3 = ["my", "dog", "is", "a", "yorkie"];
assertArraysEqual(map(example3, example => example[0]), ["m", "d", "i", "a", "y"]); //true