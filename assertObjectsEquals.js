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

const eqObjects = function(object1, object2) {
  result = ""
  let keysofObject1 = Object.keys(object1);
  let keysofObject2 = Object.keys(object2);
  if (keysofObject1.length === keysofObject2.length) {
    for (let key of keysofObject1) {
      if (Array.isArray(object1[key])) {
       result = eqArrays(object1[key],object2[key]);
      } else if (object1[key] === object2[key]) {
        result = true;
      }
    }
  } else {
      result = false;
  } //console.log(result);
  return result;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const passed = "Assertion Passed: ";
  const passSticker = "✅ ";
  const failed = "Assertion Failed: ";
  const failSticker = "❗️ ";
  const equal = " === ";
  const dne = " !== ";
  if (eqObjects(actual, expected)) {
    console.log(`${passSticker} ${passed}` + `${inspect(actual)}` + `${equal}` +  `${inspect(expected)}`);
  } else {
    console.log(`${failSticker} ${failed}` + `${inspect(actual)}` + `${dne}` + `${inspect(expected)}`);
  }
};
//Test Code

assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" });
assertObjectsEqual({ a: "1", b: "2", c: "3" }, { d: ["2", 3], c: "1" });