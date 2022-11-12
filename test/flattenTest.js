const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {

  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns [1, 4, 8, 12, 16, 20] for [1, 4, [8, 12], 16, [20]]", () => {
    assert.deepEqual(flatten([1, 4, [8, 12], 16, [20]]), [1, 4, 8, 12, 16, 20]);
  });


});
