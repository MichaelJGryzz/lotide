// findKeyByValue function definition
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