// FUNCTION IMPLEMENTATION
let eqArrays = function(arr1, arr2) {
  let result = "";
  if(arr1.length !== arr2.length){
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
    } else {
      result = false;
    }
  } if (result === false) {
    return false;
  } else if (result === "") {
    return true;
  }
};
//console.log(eqArrays([1, 2, 3], [1, 2, 3]));// => true


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

//Test Cases
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertArraysEqual(["1", 2, "3"], ["1", "2", "3"]); // => should FAIL
assertArraysEqual([1, "2", "3"], ["1", "2", "3"]); // => should FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should FAIL