// Require Chai
const assert = require('chai').assert;

// Require flatten function
const flatten = require('../flatten');


// Mocha and Chai based Test Code:
describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5] for [1, 2, [3, 4], 5]", () => {
    const nestedArray1 = [1, 2, [3, 4], 5];
    const expectedArray1 = [1, 2, 3, 4, 5];
    assert.deepEqual(flatten(nestedArray1), expectedArray1);
  });
  it("returns [1, 2, 3, 4, 5, 6, 7, 8] for [[1, 2], [3, 4], 5, [6, 7, 8]]", () => {
    const nestedArray2 = [[1, 2], [3, 4], 5, [6, 7, 8]];
    const expectedArray2 = [1, 2, 3, 4, 5, 6, 7, 8];
    assert.deepEqual(flatten(nestedArray2), expectedArray2);
  });
});