let eqArrays = function(arr1, arr2) {
  let result = "";
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i] && (typeof arr1[i] === typeof arr2[i])) {
        result = true;
      } else {
        result = false;
      }
    } return result;
  }
};

module.exports = eqArrays;