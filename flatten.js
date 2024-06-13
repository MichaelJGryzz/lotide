// flatten function definition
// function takes in an array with nested arrays and returns a "flattened" version of the array without nesting
const flatten = function(array) {
  let result = [];

  array.forEach(function(element) {
    // Checks if current item is an array, if it is call flatten on it
    if (Array.isArray(element)) {
      result = result.concat(element);
    } else {
      // If the element is not an array, push it directly to the result array
      result.push(element);
    }
  });

  // Returned flattened array
  return result;
};

// Code to export function
module.exports = flatten;