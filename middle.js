//Challenge:
//Implement middle which will take in an array and return the middle-most element(s) of the given array.
//The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

const middle = function(array) {
  let result = [];
  //case 1; If array has 1 or 2 elements, return empty array
  if (array.length === 1 || array.length === 2) {
    return result;

  } else if (array.length % 2 === 0) {
    //case 3 : For arrays with an even number of elements, an array containing the two elements in the middle should be returned
    //store an upper and lower index and push into result
    let upperIndex = array.length / 2;
    let lowerIndex = array.length / 2 - 1;
    result.push(array[lowerIndex],array[upperIndex]);
  } else if (array.length % 2 === 1) {
    //case 2: For arrays with odd number of elements
    //an array containing a single middle element should be returned.
    //find array.length/2 = the middle index
    //return array [middle index]
    
    const indexHalf = Math.floor(array.length / 2);
    result.push(array[indexHalf]);
  }
  return result;
};

module.exports = middle;