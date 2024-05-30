// TEST ASSERTION FUNCTIONS
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

// assertArraysEqual function asserts if two arrays are equal and logs the result
const assertArraysEqual = function(actual, expected) {
  const isEqual = eqArrays(actual, expected);
  if (isEqual) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCTION
const middle = function(array) {
  const length = array.length;
  // Return an empty array if given array has less than 3 elements
  if (length <= 2) {
    return [];
  }
  // Calculate the middle index using floor division
  const middleIndex = Math.floor(length / 2);
  // If the array length is even, return the two middle elements
  if (length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    // If the array length is odd, return the single middle element
    return [array[middleIndex]];
  }
};

// TEST CASES
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
