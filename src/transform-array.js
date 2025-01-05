const { NotImplementedError } = require("../extensions/index.js");

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
  if (!(arr instanceof Array))
    throw new Error("'arr' parameter must be an instance of the Array!");
  const result = [];
  let j = 0;
  let discarded = true;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === "--discard-next") {
      if (i === arr.length - 1 || isNaN(arr[i + 1])) continue;
      i += 1;
      discarded = true;
      continue;
    }
    if (arr[i] === "--discard-prev") {
      if (i === 0 || isNaN(arr[i - 1]) || discarded) continue;
      result[j - 1] = undefined;
      j -= 1;
      discarded = false;
      continue;
    }
    if (arr[i] === "--double-next") {
      if (i === arr.length - 1 || isNaN(arr[i + 1])) continue;
      result[j] = arr[i + 1];
      j += 1;
      discarded = false;
      continue;
    }
    if (arr[i] === "--double-prev") {
      if (i === 0 || isNaN(arr[i - 1]) || discarded) continue;
      result[j] = arr[i - 1];
      j += 1;
      discarded = false;
      continue;
    }
    result[j] = arr[i];
    j += 1;
    discarded = false;
  }
  return result;
}

module.exports = {
  transform,
};
