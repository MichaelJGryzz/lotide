// eqArrays function definition
// eqArrays function takes in two arrays and returns true or false based on a perfect match.
const eqArrays = function(array1, array2) {
  // Checks if length are the same; will not enter for loop if they aren't the same
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    // Check if each element is exactly equal
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  // ALL elements are equal, return true
  return true;
};

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
