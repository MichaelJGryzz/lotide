// Collection of words copied from Compass "Implement Map" Assignment
const words = ["ground", "control", "to", "major", "tom"];

// Define map function
const map = function(array, callback) {
  // temporary code:

  console.log("array: ", array);
  console.log("callback: ", callback);


  const results = [];
  return results;
};

// Add code copied from Compass to call nonexistent "map" function to cause first error
const results1 = map(words, (word) => word[0]);
console.log(results1);