// FUNCTION IMPLEMENTATION
// can really only be used for checking primitive return types
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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  result = ""
  let keysofObject1 = Object.keys(object1);
  let keysofObject2 = Object.keys(object2);
  if (keysofObject1.length === keysofObject2.length) {
    for (let key of keysofObject1) {
      if (Array.isArray(object1[key])) {
       result = eqArrays(object1[key],object2[key]);
      }
      //compare keys of object 1 to keys of object 2
      else if (object1[key] === object2[key]) {
        result = true;
      }  
    }  

  } else {
      result = false;
  } console.log(result);
  return result;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true


const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false