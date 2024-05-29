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

// "flatten" function takes in an array with nested arrays and returns a "flattened" version of the array without nesting
const flatten = function(array) {
  let result = [];

  array.forEach(function(element) {
    // Checks if current item is an array, if it is call flatten on it
    if (Array.isArray(element)) {
      result = result.concat((element));
    } else {
      // If the element is not an array, push it directly to the result array
      result.push(element);
    }
  });

  // Returned flattened array
  return result;
};

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
