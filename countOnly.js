// assertEqual function copied from previous task
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  // Initialize empty object and return
  const results = {};

  for (const item of allItems) { // Loops over allItems
    console.log(item); // Print each item to console for debugging purposes
    if (itemsToCount[item]) { // Check if the item exists and it should be counted
      if (results[item]) {
        results[item] += 1; // Add to the count if item is already in results
      } else {
        results[item] = 1; // Start the count if item si not in results
      }
    }
  }

  return results;
};

// Provided array of names
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

// TEST CODE
const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

console.log('Result:', result1); // Print output of countOnly for debugging

assertEqual(result1["Jason"], 1); // Pass; Jason appears once
assertEqual(result1["Karima"], undefined); // Pass; Karima does not appear
assertEqual(result1["Fang"], 2); // Pass; Fang appears twice
assertEqual(result1["Agouhanna"], undefined); // Pass; Agouhanna is marked false, do not count
assertEqual(result1["Michael"], undefined); // Pass; string does not exist in input array
assertEqual(result1["Diana"], undefined); // Pass; string does not exist in input array