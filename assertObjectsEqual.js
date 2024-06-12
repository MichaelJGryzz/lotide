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

// Copied previously implemented eqObjects function
// This function checks if two objects are equal
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  // Check if both objects have same number of keys, if not return false
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// assertObjectsEqual function definition
// This function takes two objects and prints to the console whether or not they have matching contents
const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect; // Line to import util library's inspect function which converts any object to a string
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Code to export function
module.exports = assertObjectsEqual;

// Direct call to assertObjects Equal function to confirm messages printed to the console are accurate
const object1 = { a: '2', b: 4};
const object2 = { b: 4, a: '2'};
const object3 = { a: '2', b: '4'};

assertObjectsEqual(object1, object2); // Should pass
assertObjectsEqual(object1, object3); // Should fail