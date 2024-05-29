// Copied eqArrays function from eqArrays.js:
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

// Function without returns a subset of a given array, removing unwanted elements
const without = function(sourceArray, itemsToRemoveArray) {
  return sourceArray.filter(function(item) {
    // The filter method creates a new array with all the elements that are not included in the itemsToRemoveArray
    return !itemsToRemoveArray.includes(item);
  });
};

// TEST CASES:
// Test Case # 1:
const providedArray1 = [1, 2, 3];
const result1 = without(providedArray1, [1]);
assertArraysEqual(result1, [2, 3]);

// Test Case # 2:
const providedArray2 = ["1", "2", "3"];
const result2 = without(providedArray2, [1, 2, "3"]);
assertArraysEqual(result2, ["1", "2"]);

// Test Case # 3:
const providedArray3 = ["Honda", "Subaru", "Toyota", "Nissan"];
const result3 = without(providedArray3, ["Nissan", "Mazda", "Mitsubishi"]);
assertArraysEqual(result3, ["Honda", "Subaru", "Toyota"]);

// Test Case to Ensure original array is not modified:
const providedWords = ["hello", "world", "lighthouse"];
const resultWords = without(providedWords, ["lighthouse"]); // No need to capture return value for this test case
assertArraysEqual(resultWords, ["hello", "world"]);
// Make sure the original array was not altered by the without function
assertArraysEqual(providedWords, ["hello", "world", "lighthouse"]);

// Test Case with empty source array
assertArraysEqual(without([], [1], [2]), []);
