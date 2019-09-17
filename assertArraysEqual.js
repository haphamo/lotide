// FUNCTION IMPLEMENTATION
let eqArrays = function(x, y) {
  let final = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] === y[i]) {
      
    } else {
      final = "F";
    }
  } if (final === "F") {
    return false;
  } else if (final === ""){
    return true;
  }
};
//console.log(eqArrays([1, 2, 3], [1, 2, 3]));// => true


const assertArraysEqual = function(eqArrays, expected) {
  const passed = "Assertion Passed: ";
  const passSticker = "✅ ";
  const failed = "Assertion Failed: ";
  const failSticker = "❗️ ";
  const equal = " === ";
  const dne = " !== ";
  if (eqArrays === expected) {
    console.log(`${passSticker} ${passed}` + eqArrays + `${equal}` +  expected);
  } else {
    console.log(`${failSticker} ${failed}` + eqArrays + `${dne}` + expected);
  }
};

//Test Cases
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertArraysEqual(eqArrays(["1", 2, "3"], ["1", "2", "3"]), true); // => should FAIL
assertArraysEqual(eqArrays([1, "2", "3"], ["1", "2", "3"]), false); // => should PASS
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should FAIL