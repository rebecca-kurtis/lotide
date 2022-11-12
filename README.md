# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rebeccakurtis/lotide`

**Require it:**

`const _ = require('@rebeccakurtis/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: Returns the first item in an array as the element itself.
* `tail(...)`: Returna the tail of an array - everything except the first item.
* `middle(...)`: Takes in an array and returns the middle-most element(s) of the given array.
* `assertEqual(...)`: Asserts if what is produced is the same as what is expected and prints an appropriate response to the console.
* `eqArrays(...)`: Asserts if two arrays are equal and prints an appropriate response to the console.
* `assertArraysEqual(...)`: Asserts if two arrays are equal and the same type , then prints an appropriate response to the console.

