// letterPositions function definition
// function to return all indices in the string where each character is found
const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    const character = sentence[i];
    if (character !== ' ') { // Check if character is not a space
      if (results[character]) {
        results[character].push(i);
      } else {
        results[character] = [i];
      }
    }
  }
  return results;
};

// Code to export function
module.exports = letterPositions;