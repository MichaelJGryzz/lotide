// Require Chai
const assert = require('chai').assert;

// Require head function
const countOnly = require('../countOnly');

// Provided array of names
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];


// Mocha and Chai based Test Code:
describe("#countOnly", () => {
  const result1 = countOnly(firstNames, {
    Jason: true,
    Karima: true,
    Fang: true,
    Agouhanna: false,
  });
  it("returns 1 for Jason", () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it("returns undefined for Karima", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
  it("returns 2 for Fang", () => {
    assert.strictEqual(result1["Fang"], 2);
  });
  it("returns undefined for Agouhanna", () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
  it("returns undefined for Michael", () => {
    assert.strictEqual(result1["Michael"], undefined);
  });
  it("returns undefined for Diana", () => {
    assert.strictEqual(result1["Diana"], undefined);
  });
});