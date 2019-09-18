// FUNCTION IMPLEMENTATION
let eqArrays = function(x, y) {
  let final = "";
  if(x.length !== y.length) {
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

//We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

//For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.
//Object output will have arrays in the value

const letterPositions = function(sentence) {
  let results = {};
  //create loops to go through sentence
  for (let i = 0; i < sentence.length; i ++) {
    //created variable to store the letter in sentence
    let letter = sentence[i];
    if (letter !== " " ) { //takes care of spaces
      if (results[letter]) {
        results[letter].push(i);
        //console.log()
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};

console.log(letterPositions("lighthouse labs"));
assertArraysEqual(letterPositions("lighthouse labs").s, [8, 14]);
