// FUNCTION IMPLEMENTATION
let eqArrays = function(x, y) {
  let final = "";
  if(x.length !== y.length){
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