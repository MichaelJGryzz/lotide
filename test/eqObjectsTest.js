// Require Chai
const assert = require('chai').assert;

// Require head function
const eqObjects = require('../eqObjects');


// Mocha and Chai based Test Code:
describe("#eqObjects", () => {
  it("returns true for objects with same properties in different order", () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });
  it("returns false for objects with different properties", () => {
    const shirtObject = { color: "red", size: "medium" };
    const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
    assert.strictEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });
  it("returns true for objects with same array properties in different order", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
    assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });
  it("returns false for objects with different array properties", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const longSleeveMultiColorShirtObject = {
      size: "medium",
      colors: ["red", "blue"],
      sleeveLength: "long"
    };
    assert.strictEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
  });
});