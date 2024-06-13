// Require eqArrays function
const eqArrays = require("../eqArrays");

// Require assertArraysEqual function
const assertArraysEqual = require("../assertArraysEqual");

// Require without function
const without = require('..//without');


// TEST CASES:
// Test Case # 1:
const providedArray1 = [1, 2, 3];
const result1 = without(providedArray1, [1]);
assertArraysEqual(result1, [2, 3]);

// Test Case # 2:
const providedArray2 = ["1", "2", "3"];
const result2 = without(providedArray2, [1, 2, "3"]);
assertArraysEqual(result2, ["1", "2"]);

// Test Case # 3:
const providedArray3 = ["Honda", "Subaru", "Toyota", "Nissan"];
const result3 = without(providedArray3, ["Nissan", "Mazda", "Mitsubishi"]);
assertArraysEqual(result3, ["Honda", "Subaru", "Toyota"]);

// Test Case to Ensure original array is not modified:
const providedWords = ["hello", "world", "lighthouse"];
const resultWords = without(providedWords, ["lighthouse"]); // No need to capture return value for this test case
assertArraysEqual(resultWords, ["hello", "world"]);
// Make sure the original array was not altered by the without function
assertArraysEqual(providedWords, ["hello", "world", "lighthouse"]);

// Test Case with empty source array
assertArraysEqual(without([], [1], [2]), []);