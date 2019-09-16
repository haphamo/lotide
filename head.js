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


//Create a function head which returns the first item in the array.

let head = function (data){
  for(i = 0; i < data.length; i ++){
    return data[i];
  } 
}

// TEST CODE
assertEqual(head([5,4,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");