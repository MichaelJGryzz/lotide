// Require function assertEqual
const assertEqual = require("../assertEqual");

// Require function eqArrays
const eqArrays = require("../eqArrays");

// Test Cases:
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true); // => should PASS
assertEqual(eqArrays(['1', '2', '3'], [1, '2', '3']), false); // => should PASS
assertEqual(eqArrays([true, false, true], [true, false, true]), true); // => should PASS
assertEqual(eqArrays([false, false, false], [true, false, false]), false); // => should PASS
assertEqual(eqArrays([], []), true); // => should PASS
assertEqual(eqArrays([1, 2], [1, 2, 3, 4]), false); // => should PASS
assertEqual(eqArrays([null, undefined], [null, undefined]), true); // => should PASS
assertEqual(eqArrays([1, 2, NaN], [1, 2, NaN]), false); // => should PASS (because NaN !== NaN, therefore falsey)