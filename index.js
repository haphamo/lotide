const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual')

/*
const without = require('./without)
const takeUntil = require('./takeUntil)
const map = require('./map)
const letterPosition = require('./letterPosition)
const flatten = require('./flatten)
const findKeyByValue = require('./findKeyByValue)
const findKey = require('./findKey)
const eqObjects = require('./eqObjects)
const countOnly = require('./countOnly)
const countLetters = require('./countLetters)
const assertObjectEquals = require('./assertObjectEquals)

*/
module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  eqArrays: eqArrays,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual
  

};