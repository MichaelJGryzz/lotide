// assertEqual function copied from previous task
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Functiion finds the key in a given object by the given value
const findKeyByValue = function(object, value) {
  for (let key of Object.keys(object)) {
    if (object[key] === value) { // Check if the value of the current key matches the given value
      return key;
    }
  }
  return undefined; // Return undefined if no match is found
};

// Code to export function
module.exports = findKeyByValue;

// Test Code
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  action: "Sons of Anarchy",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // TV Show not in test object
assertEqual(findKeyByValue(bestTVShowsByGenre, "Sons of Anarchy"), "action");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Peaky Blinders"), undefined); // TV Show not in test object