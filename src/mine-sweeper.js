const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const countOfRows = matrix.length;
  const countOfColumns = matrix[0].length;
  const minesSet = [];
  for (let j = 0; j < countOfRows; j++) {
    minesSet.push(Array(countOfColumns));
  }

  for (let i = 0; i < countOfColumns; i++) {
    for (let j = 0; j < countOfRows; j++) {
      let mineSiblingCount = 0;
      if ((i - 1 >= 0) && (j - 1 >= 0) && (i - 1 < countOfColumns) && (j - 1 < countOfRows) && matrix[j - 1][i - 1]) {
        mineSiblingCount++;
      }
      if ((i - 1 >= 0) && (j >= 0) && (i - 1 < countOfColumns) && (j < countOfRows) && matrix[j][i - 1]) {
        mineSiblingCount++;
      }
      if ((i - 1 >= 0) && (j + 1 >= 0) && (i - 1 < countOfColumns) && (j + 1 < countOfRows) && matrix[j + 1][i - 1]) {
        mineSiblingCount++;
      }
      if ((i >= 0) && (j - 1 >= 0) && (i < countOfColumns) && (j - 1 < countOfRows) && matrix[j - 1][i]) {
        mineSiblingCount++;
      }
      if ((i >= 0) && (j + 1 >= 0) && (i < countOfColumns) && (j + 1 < countOfRows) && matrix[j + 1][i]) {
        mineSiblingCount++;
      }
      if ((i + 1 >= 0) && (j - 1 >= 0) && (i + 1 < countOfColumns) && (j - 1 < countOfRows) && matrix[j - 1][i + 1]) {
        mineSiblingCount++;
      }
      if ((i + 1 >= 0) && (j >= 0) && (i + 1 < countOfColumns) && (j < countOfRows) && matrix[j][i + 1]) {
        mineSiblingCount++;
      }
      if ((i + 1 >= 0) && (j + 1 >= 0) && (i + 1 < countOfColumns) && (j + 1 < countOfRows) && matrix[j + 1][i + 1]) {
        mineSiblingCount++;
      }
      minesSet[j][i] = mineSiblingCount;
    }
  }
  return minesSet;
}

module.exports = {
  minesweeper
};
