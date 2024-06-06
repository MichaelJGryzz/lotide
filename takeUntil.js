// takeUntil funtion takes in an array to work with and the callback function
// It returns a slice of the array with elements taken from the beginning
const takeUntil = function(array, callback) {
  const result = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  return result;
};