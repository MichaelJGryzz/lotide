// Require eqObjects function
const eqObjects = require('./eqObjects');

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