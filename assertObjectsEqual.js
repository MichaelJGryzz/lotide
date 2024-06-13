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

// Direct call to assertObjects Equal function to confirm messages printed to the console are accurate
const object1 = { a: '2', b: 4};
const object2 = { b: 4, a: '2'};
const object3 = { a: '2', b: '4'};

assertObjectsEqual(object1, object2); // Should pass
assertObjectsEqual(object1, object3); // Should fail