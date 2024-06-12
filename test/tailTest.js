// Require function assertEqual
const assertEqual = require("../assertEqual");

// Require function tail
const tail = require("../tail");


// Test Case # 1: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case # 2: An array with only one element
const oneElementArray = ["Caramel"];
const oneElementResult = tail(oneElementArray);
assertEqual(oneElementResult.length, 0); // tail of a single element array should be empty

// Test Case # 3: Empty array
const emptyArray = [];
const emptyArrayResult = tail(emptyArray);
assertEqual(emptyArrayResult.length, 0); // tail of an empty array should also be empty