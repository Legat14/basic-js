const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const countOfColumns = matrix[0].length;
  const countOfRows = matrix.length;
  let sum = 0;
    for (let i = 0; i < countOfColumns; i++) {
      let isBelowZero = false;
      for (let j = 0; j < countOfRows; j++) {
        if (matrix[j][i] === 0) {
          isBelowZero = true;
        } else if (!isBelowZero) {
          sum += matrix[j][i];
        }
      }
    }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
