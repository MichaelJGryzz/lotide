// Require eqArrays function
const eqArrays = require('../eqArrays');

// Require assertArraysEqual function
const assertArraysEqual = require('../assertArraysEqual');

// Require takeUntil function
const takeUntil = require('../takeUntil');


// TEST CASES
// Test Case # 1: Slice when you encounter a number less than 0
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

// Test Case # 2: Slice when you encounter a comma
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);