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

const countLetters = function(str) {
  let results = {};
  for (let letter of str) {
    
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  } console.log(results);
  return results;
};

countLetters("lighthouse in the house");
//Test code
assertEqual(countLetters("lighthouse in the house").l, 1);
assertEqual(countLetters("lighthouse in the house").h, 4);
assertEqual(countLetters("lighthouse in the house").e, 3);

