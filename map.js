// Collection of words copied from Compass "Implement Map" Assignment
const words = ["ground", "control", "to", "major", "tom"];

// Define map function
const map = function(array, callback) {
  const results = [];
  // For loop to console.log each item in the provided array and what happens to the item after being passed into the callback
  for (let item of array) {
    console.log("item BEFORE: ", item);
    console.log("item AFTER: ", callback(item));
    console.log("---");
  
  return results;
};

// Add code copied from Compass to call nonexistent "map" function to cause first error
const results1 = map(words, (word) => word[0]);
console.log(results1);