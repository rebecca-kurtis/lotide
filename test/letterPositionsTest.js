const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {

  it("returns {h: [ 0, 6 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ], i: [ 7 ]} for 'hello hi'", () => {
    assert.deepEqual(letterPositions("hello hi"), { h: [0, 6], e: [1], l: [2, 3], o: [4], i: [7] });
  });

  it("returns {h: [ 0], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ]} for 'hello'", () => {
    assert.deepEqual(letterPositions("hello"), { h: [0], e: [1], l: [2, 3], o: [4] });
  });

  it("returns {b: [ 0, 2 ], o: [ 1 ]} for 'bob'", () => {
    assert.deepEqual(letterPositions("bob"), { b: [0, 2], o: [1] });
  });

});