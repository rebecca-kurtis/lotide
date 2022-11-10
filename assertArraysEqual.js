const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {

  const isEqual = eqArrays(array1, array2);
  assertEqual(isEqual, true);

};


module.exports = assertArraysEqual;