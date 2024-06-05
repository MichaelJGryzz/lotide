// Copied previously implemented eqObjects function
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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// Direct call to assertObjects Equal function to confirm messages printed to the console are accurate
const object1 = { a: '2', b: 4};
const object2 = { b: 4, a: '2'};
const object3 = { a: '2', b: '4'};

assertObjectsEqual(object1, object2); // Should pass
assertObjectsEqual(object1, object3); //Should fail