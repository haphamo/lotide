// FUNCTION IMPLEMENTATION
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