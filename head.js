// Function from assertEqual.js file
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function to return the first element of an array
const head = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};

//Test cases
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([10]), 9);
assertEqual(head([10]), undefined);
