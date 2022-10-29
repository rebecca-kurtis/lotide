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

//function to build

const letterPositions = function(sentence) {
  const results = {};
  //logic to update results here
  //needs to return an array of the indicies

  for (let x = 0; x < sentence.length; x++) {
    if (sentence[x] !== " ") {

      if (results[sentence[x]]) {
        results[sentence[x]].push(x);
      } else {
        results[sentence[x]] = [x];
      }
    }
  }
  console.log(results);
  return results;
};


// Test code

letterPositions("hello hi");