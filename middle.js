// middle function definition
const middle = function(array) {
  const length = array.length;
  // Return an empty array if given array has less than 3 elements
  if (length <= 2) {
    return [];
  }
  // Calculate the middle index using floor division
  const middleIndex = Math.floor(length / 2);
  // If the array length is even, return the two middle elements
  if (length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    // If the array length is odd, return the single middle element
    return [array[middleIndex]];
  }
};

// Code to export function
module.exports = middle;