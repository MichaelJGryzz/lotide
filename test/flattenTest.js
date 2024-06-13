// Require eqArrays function
const eqArrays = require('../eqArrays');

// Require assertArraysEqual function
const assertArraysEqual = require('../assertArraysEqual');


// TEST CASES:
// Test Case # 1:
const nestedArray1 = [1, 2, [3, 4], 5];
const expectedArray1 = [1, 2, 3, 4, 5];
const flattenedArray1 = flatten(nestedArray1);
assertArraysEqual(flattenedArray1, expectedArray1);

// Test Case #2:
const nestedArray2 = [[1, 2], [3, 4], 5, [6, 7, 8]];
const expectedArray2 = [1, 2, 3, 4, 5, 6, 7, 8];
const flattenedArray2 = flatten(nestedArray2);
assertArraysEqual(flattenedArray2, expectedArray2);