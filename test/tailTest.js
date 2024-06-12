// Require Chai
const assert = require('chai').assert;

// Require tail function
const tail   = require('../tail');


// Mocha and Chai based Test Code:
describe("#tail", () => {
  it("does not modify the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const wordsCopy = words.slice(); // Create a copy of the array
    tail(words);
    assert.deepEqual(words, wordsCopy); // Assert that the original array is not modified
  });
  it("returns an array containing all but the first element when passed an array with more than one element", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const wordsTail = ["Lighthouse", "Labs"];
    assert.deepEqual(tail(words), wordsTail);
  });
  it("returns an empty array when passed an array with only one element", () => {
    const oneElementArray = ["Caramel"];
    assert.deepEqual(tail(oneElementArray), []);
  });
  it("returns an empty array when passed an empty array", () => {
    const emptyArray = [];
    assert.deepEqual(tail(emptyArray), []);
  });
});


/*
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
assertEqual(emptyArrayResult.length, 0); // tail of an empty array should also be empty*/