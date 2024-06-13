// countLetters function definition
// Loop over each letter in a sentence
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

// Code to export function
module.exports = countLetters;