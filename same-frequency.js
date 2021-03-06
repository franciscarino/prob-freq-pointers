"use strict";
// add whatever parameters you deem necessary & write docstring
//add freq counter helper function
// convert to string
// create empty variables for each obj
// compare objects using for loop
// return boolean

/**takes in two numbers and checks if num1 and num2 have the same digits and returns a boolean result*/
function sameFrequency(num1, num2) {
  const num1Str = String(num1);
  const num2Str = String(num2);

  let num1Obj = countNumbers(num1Str);
  let num2Obj = countNumbers(num2Str);

  for (let num in num1Obj) {
    if (num1Obj[num] !== num2Obj[num]) {
      return false;
    }
    return true;
  }
}

/** Counts numbers in string, returns object of string key value pairs */
function countNumbers(items) {
  const freqs = {};

  for (let item of items) {
    const letter = freqs[item] || 0;
    freqs[item] = letter + 1;
  }
  return freqs;
}
