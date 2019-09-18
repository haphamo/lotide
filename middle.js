// FUNCTION IMPLEMENTATION
let eqArrays = function(x, y) {
  let final = "";
  if (x.length !== y.length) {
    return false;
  }
  for (let i = 0; i < x.length; i++) {
    if (x[i] === y[i]) {
    } else {
      final = "F";
    }
  } if (final === "F") {
    return false;
  } else if (final === "") {
    return true;
  }
};

const assertArraysEqual = function(actual, expected) {
  const passed = "Assertion Passed: ";
  const passSticker = "✅ ";
  const failed = "Assertion Failed: ";
  const failSticker = "❗️ ";
  const equal = " === ";
  const dne = " !== ";
  if (eqArrays(actual, expected)) {
    console.log(`${passSticker} ${passed}` + actual + `${equal}` +  expected);
  } else {
    console.log(`${failSticker} ${failed}` + actual + `${dne}` + expected);
  }
};

//Challenge:
//Implement middle which will take in an array and return the middle-most element(s) of the given array.
//The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

const middle = function(array) {
  let result = [];
  //case 1; If array has 1 or 2 elements, return empty array
  if (array.length <= 2) {
    //return empty arry
    
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

//console.log(middle([1,2,3,4,5,6,7,8]));
//console.log(middle([1,2,3,4,5,6,7]));
//console.log(middle([1,2,3,4,5,6]));
//console.log(middle([1,2,3,4,5]));

// TEST CODE
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]),[]); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]); // => [3, 4]