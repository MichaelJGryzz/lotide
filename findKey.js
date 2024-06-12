// assertEqual function copied from previous task
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) { // Check if the value of the current key matches the given value
      return key;
    }
  }
  return undefined; // Return undefined if no match is found
};

// Code to export function
module.exports = findKey;

// Test Code
const restaurants = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};
  
assertEqual(findKey(restaurants, (x) => x.stars === 2), "noma"); // Pass
assertEqual(findKey(restaurants, (x) => x.stars === 1), "Blue Hill"); // Pass
assertEqual(findKey(restaurants, (x) => x.stars === 0), undefined); // Pass
assertEqual(findKey(restaurants, (x) => x.stars === 5), undefined); // Pass
