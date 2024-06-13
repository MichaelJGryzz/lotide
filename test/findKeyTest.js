// Require Chai
const assert = require('chai').assert;

// Require head function
const findKey = require('../findKey');


// Provided object of restaurants with their star ratings
const restaurants = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};


// Mocha and Chai based Test Code:
describe("#findKey", () => {
  it("returns 'noma' for stars === 2", () => {
    assert.strictEqual(findKey(restaurants, (x) => x.stars === 2), "noma");
  });

  it("returns 'Blue Hill' for stars === 1", () => {
    assert.strictEqual(findKey(restaurants, (x) => x.stars === 1), "Blue Hill");
  });

  it("returns undefined for stars === 0", () => {
    assert.strictEqual(findKey(restaurants, (x) => x.stars === 0), undefined);
  });

  it("returns undefined for stars === 5", () => {
    assert.strictEqual(findKey(restaurants, (x) => x.stars === 5), undefined);
  });
});