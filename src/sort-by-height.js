const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrWithoutMinusOnes = [];
  const arrOfMinusOnesPositions = [];
  arr.forEach((number, i) => {
    if (number === -1) {
      arrOfMinusOnesPositions.push(i);
    } else
      arrWithoutMinusOnes.push(number);
  });

  arrWithoutMinusOnes.sort((a, b) => {
    return a - b;
  });

  const sortedArr = arrWithoutMinusOnes;
  arrOfMinusOnesPositions.forEach(position => {
    if (sortedArr.length >= position) {
      for (let i = sortedArr.length; i > position; i--) {
        sortedArr[i] = sortedArr[i - 1];
      }
    }
    sortedArr[position] = -1;
  });

  return sortedArr;
}

module.exports = {
  sortByHeight
};
