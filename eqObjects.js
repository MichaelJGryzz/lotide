// Require eqArrays function
const eqArrays = require('./eqArrays');

// eqObjects function definition
// function returns true if both objects have identical keys with identical values
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  // Check if both objects have same number of keys, if not return false
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key],object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// Code to export function
module.exports = eqObjects;