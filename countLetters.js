// assertEqual function copied from previous task
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const letterCount = {};

  for (const letter of sentence) { // Loops over sentence
    if (letter !== ' ') { // Check to make sure letter exists
      if (letterCount[letter]) {
        letterCount[letter]++; // Add to the count if letter count was started
      } else {
        letterCount[letter] = 1; // Start the count
      }
    }
  }
  return letterCount;
};

// Helper function to check of two objects are equal by comparing both keys and values
const equalObjects = function(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if both objects have same number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check if values for each key are the same in both objects
  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

// Test Code
// Use both assertEqual and countLetters with expected code to compare results
assertEqual(equalObjects(countLetters('LHL'), { L: 2, H: 1 }), true);
assertEqual(equalObjects(countLetters('lighthouse in the house'), { l: 1, i: 2, g: 1, h:4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }), true);
assertEqual(equalObjects(countLetters('Michael'), { M: 1, i: 1, c: 1, h: 1, a: 1, e: 1, l: 1 }), true);