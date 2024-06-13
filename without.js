// without function definition
// function returns a subset of a given array, removing unwanted elements
const without = function(sourceArray, itemsToRemoveArray) {
  // Create an empty array to store the result
  const result = [];
  // Loop through each element in sourceArray
  for (let i = 0; i < sourceArray.length; i++) {
    // Check if the current element is not in itemsToRemoveArray
    if (!itemsToRemoveArray.includes(sourceArray[i])) {
      // If the element is not in itemsToRemoveArray, add it to the result array
      result.push(sourceArray[i]);
    }
  }
  // Return the result array
  return result;
};

// Code to export function
module.exports = without;