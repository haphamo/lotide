const assertEqual = require('./assertEqual');

//Create a function head which returns the first item in the array.

let head = function(data) {
  for (let i = 0; i < data.length; i ++) {
    return data[i];
  }
};

module.exports = head;
