// middle function should take in an array and return the middle-most element(s) of the given array.
// for arrays with one or two elements, there is no middle - return an empty array.
// for arrays with odd number of elements - an array of only the single middle element should be returned.
// for arrays with an even number of elements - an array containing the two middle elements should be returned.

const middle = function(data) {
  if (data.length <= 2) {
    return [];
  } else if (data.length % 2 !== 0) {
    return [data[(data.length - 1) / 2]];
  } else if (data.length % 2 === 0) {
    return [data[(data.length / 2) - 1], data[(data.length / 2)]];
  }
};

module.exports = middle;