const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {

  it("returns 1 for 'Jason']", () => {
    const firstName = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    result1 = countOnly(firstName, { "Jason": true });
    assert.strictEqual(result1["Jason"], 1);
  });

  it("returns undefined for 'Karima']", () => {
    const firstName = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    result1 = countOnly(firstName, { "Karima": true });
    assert.strictEqual(result1["Karima"], undefined);
  });

  it("returns 2 for 'Fang']", () => {
    const firstName = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    result1 = countOnly(firstName, { "Fang": true });
    assert.strictEqual(result1["Fang"], 2);
  });

  it("returns undefined for 'Agouhanna']", () => {
    const firstName = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    result1 = countOnly(firstName, { "Agouhanna": false });
    assert.strictEqual(result1["Agouhanna"], undefined);
  });

});