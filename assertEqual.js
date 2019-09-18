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
// TEST CODE
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 4);