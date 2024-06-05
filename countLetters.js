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

// Test Code
assertEqual(countLetters('LHL'), { l: 2, h: 1});
assertEqual(countLetters('lighthouse in the house'), { l: 1, i: 2, g: 1, h:4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1});
assertEqual(countLetters('Michael'), { m: 1, i: 1, c: 1, h: 1, a: 1, e: 1, l: 1});