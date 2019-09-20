//Challenge: Create a function flatten which will take in an array of arrays and return a "flattened" version of the array

const flatten = function (array) {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i ++) {
    if (Array.isArray(array[i]) === true) {
      for (let j = 0; j < array[i].length; j ++) {
        flattenedArray.push(array[i][j])
        } 
    } else {
      flattenedArray.push(array[i]);
    } 
  } console.log(flattenedArray)
};

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]




//assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
//assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ['hello', 'world']);
let eqArrays = function(arr1, arr2) {
  let result = "";
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i ++) {
      if (typeof arr1[i] !== typeof arr2[i]) {
        result = false;
        return result;
      } else {
        result = true;
      } 
    } 
  } return result;
}

const assertArraysEqual = function(actual, expected) {
  const passed = "Assertion Passed: ";
  const passSticker = "✅ ";
  const failed = "Assertion Failed: ";
  const failSticker = "❗️ ";
  const equal = " === ";
  const dne = " !== ";
  console.log('expected', expected);
  if (eqArrays(actual, expected)) {
    console.log(`${passSticker} ${passed}` + actual + `${equal}` +  expected);
  } else {
    console.log(`${failSticker} ${failed}` + actual + `${dne}` + expected);
  }
};