// eqArrays function definition
// eqArrays function takes in two arrays and returns true or false based on a perfect match.
const eqArrays = function(array1, array2) {
  // Checks if length are the same; will not enter for loop if they aren't the same
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    // Check if each element is exactly equal
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  // ALL elements are equal, return true
  return true;
};

// Code to export function
module.exports = eqArrays;