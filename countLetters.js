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

module.exports = countLetters;

