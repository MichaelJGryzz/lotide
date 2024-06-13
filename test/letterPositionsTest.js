// Require eqArrays function
const eqArrays = require('../eqArrays');

// Require assertArraysEqual function
const assertArraysEqual = require('../assertArraysEqual');

// Require letterPositions function
const letterPositions = require('../letterPositions');

// Test Code
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);