// Require Chai
const assert = require('chai').assert;

// Require countLetters function
const countLetters = require('../countLetters');

// Helper function to check of two objects are equal by comparing both keys and values
const equalObjects = function(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if both objects have same number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check if values for each key are the same in both objects
  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

// Mocha and Chai based Test Code:
describe("#countLetters", () => {
  it("returns { L: 2, H: 1 } for 'LHL'", () => {
    const expectedOutput = { L: 2, H: 1 };
    assert.strictEqual(equalObjects(countLetters('LHL'), expectedOutput), true);
  });

  it("returns correct counts for 'lighthouse in the house'", () => {
    const expectedOutput = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };
    assert.strictEqual(equalObjects(countLetters('lighthouse in the house'), expectedOutput), true);
  });

  it("returns { M: 1, i: 1, c: 1, h: 1, a: 1, e: 1, l: 1 } for 'Michael'", () => {
    const expectedOutput = { M: 1, i: 1, c: 1, h: 1, a: 1, e: 1, l: 1 };
    assert.strictEqual(equalObjects(countLetters('Michael'), expectedOutput), true);
  });
});