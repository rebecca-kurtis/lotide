const head = require('../head');
const assertEqual = require('../assertEqual');

console.log(head([1, 2, 3, 4, 5]));
console.log(head([]));
console.log(head(["a", "b", "c", "d"]));


assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]),);