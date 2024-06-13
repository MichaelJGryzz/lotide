// Require Chai
const assert = require('chai').assert;

// Require findKeyByValue function
const findKeyByValue = require('../findKeyByValue');

// Provided object of TV shows by genre
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  action: "Sons of Anarchy",
};


// Mocha and Chai based Test Code:
describe("#findKeyByValue", () => {
  it("returns 'drama' for 'The Wire'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns undefined for 'That '70s Show'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it("returns 'action' for 'Sons of Anarchy'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Sons of Anarchy"), "action");
  });
  it("returns undefined for 'Peaky Blinders'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Peaky Blinders"), undefined);
  });
});