// Require function assertArraysEqual
const assertArraysEqual = require("../assertArraysEqual");


// Test Cases:
// Call the assertArraysEqual function with sample input to verify output
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should pass
assertArraysEqual([1, 2, 3], [3, 2, 2]); // => should fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should pass
assertArraysEqual(["3", "2", "1"], [3, 2, 1]); // => should fail