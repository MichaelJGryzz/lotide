// Require function eqArrays
const eqArrays = require("./eqArrays");

// assertArraysEqual function definition
// assertArraysEqual function takes in two arrays and console.log an appropriate message to the console
// This function asserts if two arrays are equal and logs the result
const assertArraysEqual = function(actual, expected) {
  const isEqual = eqArrays(actual, expected);
  if (isEqual) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};