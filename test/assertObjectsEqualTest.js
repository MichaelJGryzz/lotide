// Require Chai
const assert = require('chai').assert;

//Require assertObjectsEqual function
const assertObjectsEqual = require('../assertObjectsEqual');


// Mocha and Chai based Test Code:
describe("#assertObjectsEqual", () => {
  // Test Case # 1: Should pass
  it("should pass for objects with same key-value pairs in different order", () => {
    const object1 = { a: '2', b: 4 };
    const object2 = { b: 4, a: '2' };
    assertObjectsEqual(object1, object2);
  });
  // Test Case # 2: Should fail (on purpose!)
  it("should fail for objects with different values for same keys", () => {
    const object1 = { a: '2', b: 4 };
    const object3 = { a: '2', b: '4' };
    assertObjectsEqual(object1, object3);
  });
});