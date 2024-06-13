// countOnly function definition
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  // Initialize empty object and return
  const results = {};

  for (const item of allItems) { // Loops over allItems
    if (itemsToCount[item]) { // Check if the item exists and it should be counted
      if (results[item]) {
        results[item] += 1; // Add to the count if item is already in results
      } else {
        results[item] = 1; // Start the count if item is not in results
      }
    }
  }

  return results;
};

// Code to export function
module.exports = countOnly;