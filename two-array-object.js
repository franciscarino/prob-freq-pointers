"use strict";


/** takes in two arrays and return an object of key(keyArr) value(valueArr) pairs*/
function twoArrayObject(keyArr, valueArr) {
  //declare a new var and set the value to an empty object
  let keyValueObj = {};
  //set key Arr at index 0 with the value of valueArr at index 0
  for (let i = 0; i < keyArr.length; i++) {
    if (valueArr[i] === undefined) {
      valueArr[i] = null; //can use ternary operator
    }
    keyValueObj[keyArr[i]] = valueArr[i];

  }
  //create a single for loop
  //if the value of valueArr is undefined set the value to null.
  //return new var

  return keyValueObj;
}



// twoArrayObject(['x', 'y', 'z'], [1, 2]);
//   // {'x': 1, 'y': 2, 'z': null}

// twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]);
//   // {'a': 1, 'b': 2, 'c': 3}