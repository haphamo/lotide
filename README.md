# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @haphamo/lotide`

**Require it:**

`const _ = require('@haphamo/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `index(...)`: contains all the imported/exported functions
* `tail(...)`: returns everything in the array except the first element
* `assertEqual`: assertion function used to check primitive return types
* `middle(...)`: returns middle element(s) in the array. If the array has an odd number of elements, the function returns one value. If the array has an even amount of elements, the function returns two
* `eqArrays(...)`: compares two arrays and returns a boolean value
* `assertArraysEqual(...)`: an assertion function comparing two arrays