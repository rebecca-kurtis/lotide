const findKey = require('../findKey');
const assert = require('chai').assert;


describe("#findKey", () => {

  it("returns 'noma' for how many stars", () => {
    assert.strictEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    }, x => x.stars === 2), "noma");
  });

  it("returns 'Snake' for how many legs", () => {
    assert.strictEqual(findKey({
      "Dog": { legs: 4 },
      "Bird": { legs: 2 },
      "Cow": { legs: 4 },
      "Snake": { legs: 0 }
    }, x => x.legs === 0), "Snake");
  });

});