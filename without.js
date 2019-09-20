let eqArrays = function(arr1, arr2) {
  let result = "";
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i ++) {
      if (typeof arr1[i] !== typeof arr2[i]) {
        result = false;
        return result;
      } else {
        result = true;
      } 
    } 
  } return result;
}

const assertArraysEqual = function(actual, expected) {
  const passed = "Assertion Passed: ";
  const passSticker = "✅ ";
  const failed = "Assertion Failed: ";
  const failSticker = "❗️ ";
  const equal = " === ";
  const dne = " !== ";
  console.log('expected', expected);
  if (eqArrays(actual, expected)) {
    console.log(`${passSticker} ${passed}` + actual + `${equal}` +  expected);
  } else {
    console.log(`${failSticker} ${failed}` + actual + `${dne}` + expected);
  }
};

//Implement without which will return a subset of a given array, removing unwanted elements.
//Write a test case to make sure that the original array is not modified.
//This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.


const without = function (array, itemsToRemove) {
  let newArray = [];
  //loop through elements in array
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (array[i] !== itemsToRemove[j] && (typeof array[i] === typeof itemsToRemove[j])) {
        newArray.push(array[i]);
      }
    } 
  } return newArray
} 

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);

//Test code
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
console.log("-------")
assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ['hello', 'world']);
console.log("-------")
assertArraysEqual(without(["Tina", "David", "Anthony"], ["Anthony"]), ['Tina', 'David']);