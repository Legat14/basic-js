const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const nArr = n.split('-');
  let isValid = true;
  if (nArr.length !== 6) {
    isValid = false;
  }
  nArr.forEach(number => {
    if (number.length !== 2) {
      isValid = false;
    } else {
      if ((number[0] !== '0' && number[0] !== '1' && number[0] !== '2' && number[0] !== '3' && number[0] !== '4' && number[0] !== '5' && number[0] !== '6' &&
      number[0] !== '7' && number[0] !== '8' && number[0] !== '9' && number[0] !== 'A' && number[0] !== 'B' && number[0] !== 'C' && number[0] !== 'D' &&
      number[0] !== 'E' && number[0] !== 'F') || (number[1] !== '0' && number[1] !== '1' && number[1] !== '2' && number[1] !== '3' && number[1] !== '4' &&
      number[1] !== '5' && number[1] !== '6' && number[1] !== '7' && number[1] !== '8' && number[1] !== '9' && number[1] !== 'A' && number[1] !== 'B' &&
      number[1] !== 'C' && number[1] !== 'D' && number[1] !== 'E' && number[1] !== 'F')) {
        isValid = false;
      }
    }
  });
  return isValid;
}
module.exports = {
  isMAC48Address
};
