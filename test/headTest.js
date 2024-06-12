// Require Chai
const assert = require('chai').assert;

// Require head function
const head   = require('../head');


// Mocha and Chai based Test Code:
describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
});


// Require function assertEqual
//const assertEqual = require("../assertEqual");

// Require function head
//const head = require("../head");

// Test Code for head function
//assertEqual(head([5, 6, 7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//assertEqual(head([10]), 9);
//assertEqual(head([10]), undefined);