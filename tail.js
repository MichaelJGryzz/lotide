// Function from assertEqual.js file
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  // Check if the array is empty or has only one element
  if (array.length <= 1) {
    return [];
  }
  
  // Create a new array starting from the second element
  return array.slice(1);
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case: An array with only one element
const oneElementArray = ["Caramel"];
const oneElementResult = tail(oneElementArray);
assertEqual(oneElementResult.length, 0); // tail of a single element array should be empty

// Test Case: Empty Array4
const emptyArray = [];
const emptyArrayResult = tail(emptyArray);
assertEqual(emptyArrayResult.length, 0); // tail of an empty array should also be empty
