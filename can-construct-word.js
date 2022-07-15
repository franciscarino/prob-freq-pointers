"use strict";
// add whatever parameters you deem necessary & write doc comment

/** Compares length of both args, returns boolean if letters will create word
 */
function canConstructWord(word, letters) {
  // if letters is less than words, return false
  if (letters.length < word.length) return false;
  // if (word.length === 0) return true;

  // use freq counter helper function
  // create variables for help func objects
  let wordLetterFreq = countLetter(word);
  let letterLetterFreq = countLetter(letters);

  // compare objects
  // for in loop
  for (let letter in wordLetterFreq) {
    if (wordLetterFreq[letter] > letterLetterFreq[letter]) {
      //{a:1, b:1, c:1}                {a:1, b:1, c:1, d:1}
      return false;
    }
  }
  return true;
}

// frequency counter helper function

/** Counts letters in string, returns object of letter counts */
function countLetter(items) {
  const freqs = {};

  for (let item of items) {
    const letter = freqs[item] || 0;
    freqs[item] = letter + 1;
  }
  return freqs;
}
