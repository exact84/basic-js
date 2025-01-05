const { NotImplementedError } = require("../extensions/index.js");

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
  let result = 0;
  let flag = true;
  for (let i = 0; i < matrix.length; i += 1)
    for (let j = 0; j < matrix[i].length; j += 1) {
      // строки
      for (let k = i; k > -1; k -= 1) if (matrix[k][j] === 0) flag = false;
      if (flag) result += matrix[i][j];
      flag = true;
    }
  return result;
}

module.exports = {
  getMatrixElementsSum,
};
