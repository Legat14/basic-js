const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let nStr = n.toString();
  while (nStr.length > 1) {
    let sum = 0;
    for (let i = 0; i < nStr.length; i++) {
      sum += +nStr[i];
    }
    nStr = sum.toString();
  }
  return +nStr;
}

module.exports = {
  getSumOfDigits
};