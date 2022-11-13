const without = require('../without');
const assert = require('chai').assert;

describe("#without", () => {

  it("returns [2, 3] from ([1, 2, 3], [1])", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("returns ['1', '2'] from (['1', '2', '3'], [1, 2, '3'])", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it("returns [1, 2, 5] from ([1, 2, 4, 5, 7, 9], [4, 7, 9])", () => {
    assert.deepEqual(without([1, 2, 4, 5, 7, 9], [4, 7, 9]), [1, 2, 5]);
  });

});