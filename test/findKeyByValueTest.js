// Require assertEqual function
const assertEqual = require('../assertEqual');

// Require head function
const findKeyByValue = require('../findKeyByValue');

// Test Code
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  action: "Sons of Anarchy",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // TV Show not in test object
assertEqual(findKeyByValue(bestTVShowsByGenre, "Sons of Anarchy"), "action");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Peaky Blinders"), undefined); // TV Show not in test object