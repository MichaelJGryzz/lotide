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

/*
const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

console.log('Result:', result1); // Print output of countOnly for debugging

assertEqual(result1["Jason"], 1); // Pass; Jason appears once
assertEqual(result1["Karima"], undefined); // Pass; Karima does not appear
assertEqual(result1["Fang"], 2); // Pass; Fang appears twice
assertEqual(result1["Agouhanna"], undefined); // Pass; Agouhanna is marked false, do not count
assertEqual(result1["Michael"], undefined); // Pass; string does not exist in input array
assertEqual(result1["Diana"], undefined); // Pass; string does not exist in input array*/