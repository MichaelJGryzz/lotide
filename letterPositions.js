// Copied previously implemeted eqArrays function
// This function checks if two arrays are equal
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

// Copied previously implemeted assertArraysEqual function
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

// letterPositions function to return all indices in the string where each character is found
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  return results;
};

// Test Code
assertArraysEqual(letterPositions("hello").h, [1]);
assertArraysEqual(letterPositions("hello").e, [2]);
assertArraysEqual(letterPositions("hello").l, [3, 4]);
assertArraysEqual(letterPositions("hello").o, [5]);