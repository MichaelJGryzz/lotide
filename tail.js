// Tail function definition
const tail = function(array) {
  // Check if the array is empty or has only one element
  if (array.length <= 1) {
    return [];
  }
  
  // Create a new array starting from the second element
  return array.slice(1);
};

// Code to export function
module.exports = tail;