const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const head = function(data) {
  // create a function which returns the first item in the array as the element itself
  // an array with only one element should still yield that one element as its head
  // an empty array should yield undefined as its head.

  if (data.length >= 1) {
    return data[0];
  } else return undefined;

};
console.log(head([1,2,3,4,5]));

console.log(head([]));

console.log(head(["a", "b", "c", "d"]));



assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]),);