const map = require('../map');
const assert = require('chai').assert;

describe("#map", () => {

  it("returns [ 'm', 'p', 'h', 'c', 'b' ] for words", () => {
    const words = ["monstera", "pothos", "hoya", "cactus", "begonia"];
    assert.deepEqual(map(words, word => word[0]), ['m', 'p', 'h', 'c', 'b']);
  });

  it("returns [ 't', 'i', 'a', 'l' ] for example1", () => {
    const example1 = ["this", "is", "a", "list"];
    assert.deepEqual(map(example1, example => example[0]), ["t", "i", "a", "l"]);
  });

  it("returns [ 'h', 'a', 'y', 'd' ] for example2", () => {
    const example2 = ["how", "are", "you", "doing"];
    assert.deepEqual(map(example2, example => example[0]), ["h", "a", "y", "d"]);
  });

});