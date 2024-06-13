// Require Chai
const assert = require('chai').assert;

// Require takeUntil function
const takeUntil = require('../takeUntil');


// Mocha and Chai based Test Code:
describe("#takeUntil", () => {
  // Test Case # 1: Slice when you encounter a number less than 0
  it("returns [ 1, 2, 5, 7, 2 ] for data1", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    assert.deepEqual(results1, [ 1, 2, 5, 7, 2 ]);
  });
  // Test Case # 2: Slice when you encounter a comma
  it("returns [ 'I\'ve', 'been', 'to', 'Hollywood' ] for data2", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ',');
    assert.deepEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });
});