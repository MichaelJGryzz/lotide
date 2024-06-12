# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @michaeljgryzz/lotide`

**Require it:**

`const _ = require('@michaeljgryzz/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(actual, expected)`: asserts if two arrays are equal or not and logs the result
- `assertEqual(actual, expected)`: asserts if two values are equal or not and logs the result
- `assertObjectsEqual(actual, expected)`: asserts two objects and prints to the console whether or not they have matching contents
- `countLetters(sentence)`: calculates the frequency of each letter in a sentence, excluding spaces
- `countOnly(allItems, itemsToCount)`: counts occurrences of specified items in an array of strings, based on a criteria object
- `eqArrays(array1, array2)`: takes in two arrays and returns true or false based on a perfect match
- `eqObjects(object1, object2)`: takes in two objects and returns true if both objects have identical keys with identical values
- `findKey(object, callback)`: searches for a key in an object that satisfies a provided callback function
- `findKeyByValue(object, value)`: searches for a key in an object by the provided value
- `flatten(array)`: converts an array with nested arrays into a single-level array
- `head(array)`: returns the first element of an array
- `letterPositions(sentence)`: returns the indices of each character in a string, excluding spaces
- `middle(array)`: returns the middle element(s) of an array, or an empty array if there are fewer than 3 elements
- `tail(array)`: returns a new array containing all elements of the input array except the first one
- `takeUntil(array, callback)`: returns a slice of an array with elements taken from the beginning until the callback function returns truthy
- `without(sourceArray, itemsToRemoveArray)`: returns a subset of an array by removing specified elements