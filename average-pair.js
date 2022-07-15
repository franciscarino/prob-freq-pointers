"use strict";
// This should take a sorted array of numbers, nums, and a numeric targetAvg.
// Determine if there is a pair of numbers in nums where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.



/**takes in a sorted array and returns a boolean if a pair of nums matches the average target */
function averagePair(nums, targetAvg) {

  //set left pointer to index 0
  let left = 0;
  //set right pointer to end of nums array
  let right = nums.length - 1;
  while (left < right) {
    //while loops runs until the pointer meet in the middle
    // sumAvg var contains the average of the 2 elements
    const sumAvg = (nums[left] + nums[right]) / 2;

    //check if sumAvg is equal to the target Avg
    if (sumAvg === targetAvg) {
      return true;
    } else if (sumAvg > targetAvg) {
      right--;
    } else {
      left++;
    }
  }
  //return false after checking the entire array
  return false;
}





// averagePair([1, 2, 3], 2.5);         // true
// averagePair([3, 3, 6, 12, 19], 8);   // false
// averagePair([1, 2, 3], 2);           // true
// averagePair([], 4);                  // false