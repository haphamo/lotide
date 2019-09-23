//Create a function tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.
//Your function should not modify the array that is passed in. It should return a new array.

let tail = function (data){
  let result = [];
  for(let i = 1; i < data.length; i++){
    result.push(data[i]);
  } return result;
};



module.exports = tail;