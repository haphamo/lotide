// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const passed = "Assertion Passed: ";
  const passSticker = "✅ ";
  const failed = "Assertion Failed: ";
  const failSticker = "❗️ ";
  const equal = " === ";
  const dne = " !== ";
  if (actual === expected) {
    console.log(`${passSticker} ${passed}` + actual + `${equal}` +  expected);
  } else {
    console.log(`${failSticker} ${failed}` + actual + `${dne}` + expected);
  }
};

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
// You have to assign true and false to a variable because it will stop the loop if its returned nested inside
console.log(eqArrays([1, 2, 3], [1, 2, 3]));// => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]));// => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays([1, "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS