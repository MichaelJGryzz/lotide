// findKey function definition
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