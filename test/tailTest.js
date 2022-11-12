const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {

  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });

  it("returns [] for []", () => {
    const emptyArray = [];
    assert.deepEqual(tail(emptyArray), []);
  });

  it("returns ['hello'] for []", () => {
    const oneElement = ["hello"];
    assert.deepEqual(tail(oneElement), []);
  });

  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

});
