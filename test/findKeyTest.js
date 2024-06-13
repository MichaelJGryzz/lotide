// Require Chai
const assert = require('chai').assert;

// Require head function
const findKey = require('../findKey');

/*
// Test Code
const restaurants = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};
  
assertEqual(findKey(restaurants, (x) => x.stars === 2), "noma"); // Pass
assertEqual(findKey(restaurants, (x) => x.stars === 1), "Blue Hill"); // Pass
assertEqual(findKey(restaurants, (x) => x.stars === 0), undefined); // Pass
assertEqual(findKey(restaurants, (x) => x.stars === 5), undefined); // Pass*/