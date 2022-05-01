const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  //s1 = 'aabcc';
  //s2 = 'adcaa';
  lettersCount = 0;
  let lettersArr = [];
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        if (!lettersArr.includes(s1[i])) {
          lettersArr.push(s1[i]);
        }
      }
    }
  }
  lettersArr.forEach((letter) => {
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] === letter) {
        count1++;
      }
    }
    for (let j = 0; j < s2.length; j++) {
      if (s2[j] === letter) {
        count2++;
      }
    }
    if (count1 >= count2) {
      lettersCount += count2;
    } else {
      lettersCount += count1;
    }
  });
  return lettersCount;
}

module.exports = {
  getCommonCharacterCount
};
