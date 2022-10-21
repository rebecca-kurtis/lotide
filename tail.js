const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

//needs to return the tail of an array - everything except the first item 
// it should not modify the array, just return a new array. 
// an array with only one element should yield an empty array for its tail 
// an empty array should yield an empty array for its tail. 

const tail = function (data) {
//console.log(newArray);
if (data.length === 1) {
  return [];
} 
let newArray = data.slice([1])
return newArray; 
}





// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const emptyArray = [];
const oneElement = ["hello"];
console.log(words);
console.log(tail(emptyArray));
console.log(tail(oneElement));