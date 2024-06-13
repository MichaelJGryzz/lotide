// Require Chai
const assert = require('chai').assert;

//Require assertObjectsEqual function
const assertObjectsEqual = require('../assertObjectsEqual');


/*
// Direct call to assertObjects Equal function to confirm messages printed to the console are accurate
const object1 = { a: '2', b: 4};
const object2 = { b: 4, a: '2'};
const object3 = { a: '2', b: '4'};

assertObjectsEqual(object1, object2); // Should pass
assertObjectsEqual(object1, object3); // Should fail (on purpose!)*/