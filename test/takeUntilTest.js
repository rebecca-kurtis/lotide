const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

describe("#map", () => {

  it("returns [ 1, 2, 5, 7, 2 ] from [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
  });

  it("returns [ 'I\'ve', 'been', 'to', 'Hollywood' ] from 'I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood'", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.deepEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);
  });

  it("returns [ 'my', 'name', 'is', 'Rebecca' ] from ['my', 'name', 'is', 'Rebecca', ',',', 'not', 'Fred'", () => {
    const example2 = ["my", "name", "is", "Rebecca", ",", "not", "Fred"];
    assert.deepEqual(takeUntil(example2, x => x === ","), ["my", "name", "is", "Rebecca",]);
  });

});