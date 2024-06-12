// head function defintion
// Function to return the first element of an array
const head = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};

// Code to export function
module.exports = head;