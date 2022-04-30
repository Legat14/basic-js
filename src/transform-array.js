const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  //arr = [1, 2, '--discard-next', 3, '--double-prev', 4, 5];

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let actionsWithArr = [];

  let i = 0;
  while (i < arr.length) {
    if (arr[i] === '--discard-next') {
      actionsWithArr.push('ignore');
      if (arr[i + 1]) {
        actionsWithArr.push('ignore');
        i++;
      }
    } else if (arr[i] === '--discard-prev') {
      if (arr[i - 1]) {
        if (actionsWithArr[i - 1] === 'double') {
          actionsWithArr.pop();
          actionsWithArr.push('copy');
        } else {
          actionsWithArr.pop();
          actionsWithArr.push('ignore');
        }
      }
      actionsWithArr.push('ignore');
    } else if (arr[i] === '--double-next') {
      actionsWithArr.push('ignore');
      if (arr[i + 1]) {
        actionsWithArr.push('double');
        i++;
      }
    } else if (arr[i] === '--double-prev') {
      if (arr[i - 1]) {
        if (actionsWithArr[i - 1] !== 'ignore') {
          if (actionsWithArr[i - 1] === 'double') {
            actionsWithArr.pop();
            actionsWithArr.push('triple');
          } else {
            actionsWithArr.pop();
            actionsWithArr.push('double');
          }
        }
      }
      actionsWithArr.push('ignore');
    } else {
      actionsWithArr.push('copy');
    }
    i++;
  }

  let resultArr = [];

  actionsWithArr.forEach((comand, i) => {
    if (comand === 'copy') {
      resultArr.push(arr[i]);
    } else if (comand === 'double') {
      resultArr.push(arr[i]);
      resultArr.push(arr[i]);
    } else if (comand === 'triple') {
      resultArr.push(arr[i]);
      resultArr.push(arr[i]);
      resultArr.push(arr[i]);
    }
  });

  return resultArr;
}

module.exports = {
  transform
};