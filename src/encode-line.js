const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let currentLetter = str[0];
  let currentLettersCount = 0;
  let encriptedStr = '';
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === currentLetter) {
      currentLettersCount++;
    } else {
      if (currentLettersCount === 1) {
        encriptedStr += currentLetter;
      } else {
        encriptedStr += currentLettersCount.toString() + currentLetter;
      }
      currentLetter = str[i];
      currentLettersCount = 1;
    }
  }
  return encriptedStr;
}

module.exports = {
  encodeLine
};
