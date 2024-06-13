// Require Chai
const assert = require('chai').assert;

// Require without function
const without = require('..//without');


// Mocha and Chai based Test Code:
describe("#without", () => {
  // Test Case # 1:
  it("returns [2, 3] for [1, 2, 3] without [1]", () => {
    const providedArray1 = [1, 2, 3];
    const result1 = without(providedArray1, [1]);
    assert.deepEqual(result1, [2, 3]);
  });
  // Test Case # 2:
  it("returns ['1', '2'] for ['1', '2', '3'] without [1, 2, '3']", () => {
    const providedArray2 = ["1", "2", "3"];
    const result2 = without(providedArray2, [1, 2, "3"]);
    assert.deepEqual(result2, ["1", "2"]);
  });
  // Test Case # 3:
  it("returns ['Honda', 'Subaru', 'Toyota'] for ['Honda', 'Subaru', 'Toyota', 'Nissan'] without ['Nissan', 'Mazda', 'Mitsubishi']", () => {
    const providedArray3 = ["Honda", "Subaru", "Toyota", "Nissan"];
    const result3 = without(providedArray3, ["Nissan", "Mazda", "Mitsubishi"]);
    assert.deepEqual(result3, ["Honda", "Subaru", "Toyota"]);
  });
  // Test Case to Ensure original array is not modified:
  it("does not modify the original array", () => {
    const providedWords = ["hello", "world", "lighthouse"];
    const resultWords = without(providedWords, ["lighthouse"]);
    assert.deepEqual(resultWords, ["hello", "world"]);
    assert.deepEqual(providedWords, ["hello", "world", "lighthouse"]);
  });
  // Test Case with empty source array
  it("returns [] for an empty source array", () => {
    assert.deepEqual(without([], [1], [2]), []);
  });
});