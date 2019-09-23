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
//data
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function (bestTVShowsByGenre, tvShow) {
//use object.keys to generate an array of all the keys
let genreList = (Object.keys(bestTVShowsByGenre));
  //console.log(genreList);
  for (let genre of genreList) {
    /*if (bestTVShowsByGenre.hasOwnProperty(genre))*/ {
      if (bestTVShowsByGenre[genre] === tvShow) {
        return genre;
     }
   };
    console.log(genre);
  }
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);