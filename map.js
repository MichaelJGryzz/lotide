// NOT A REQUIRED FUNCTION FOR LOTIDE PROJECT
// Copied previously implemented eqArrays and assertArraysEqual functions:
// eqArrays function checks if two arrays are equal
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// assertArraysEqual function takes in two arrays and console.log an appropriate message to the console
// This function asserts if two arrays are equal and logs the result
// Require assertArraysEqual function
const assertArraysEqual  = require('./assertArraysEqual');

// Collection of words copied from Compass "Implement Map" Assignment
const words = ["ground", "control", "to", "major", "tom"];

// Define map function
const map = function(array, callback) {
  const results = [];
  // For loop to console.log each item in the provided array and what happens to the item after being passed into the callback
  for (let item of array) {
    results.push(callback(item)); // Push each item into the reults array
  }
  return results;
};

// Code to export function
module.exports = map;

// TEST CASES
// Test Case # 1: Map the first character of each word
const results1 = map(words, (word) => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

// Test Case # 2: Map the length of each word
const results2 = map(words, (word) => word.length);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);

// Test Case # 1: Map each word to uppercase
const results3 = map(words, (word) => word.toUpperCase());
assertArraysEqual(results3, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);