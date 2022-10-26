const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

};

// function should take in a sentence as a string and then return a count of each of the letters in that sentence

const countLetters = function(sentence) {
  const result = {};

  for (const letter of sentence) {
    if (letter !== " ") {

      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  console.log(result);
  return result;
};

//Test code
countLetters("lighthouse in the house");
countLetters("rebecca");
countLetters("cheese");


