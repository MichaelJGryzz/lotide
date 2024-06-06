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
const assertArraysEqual = function(actual, expected) {
  const isEqual = eqArrays(actual, expected);
  if (isEqual) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// Add code copied from Compass to call nonexistent "map" function to cause first error
const results1 = map(words, (word) => word[0]);
console.log(results1);