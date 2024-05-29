// Copied function from eqArrays.js:
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
const assertArraysEqual = function(actual, expected) {
  const isEqual = eqArrays(actual, expected);
  if (isEqual) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Call the assertArraysEqual function with sample input to verify output
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should pass
assertArraysEqual([1, 2, 3], [3, 2, 2]); // => should fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should pass
assertArraysEqual(["3", "2", "1"], [3, 2, 1]); // => should fail
