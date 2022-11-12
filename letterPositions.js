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
  return results;
};

module.exports = letterPositions;