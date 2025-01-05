const { NotImplementedError } = require("../extensions/index.js");

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
  if (str === "") return "";
  let result = "";
  let current = str[0];
  let counter = 1;
  for (let i = 1; i < str.length; i += 1) {
    if (str[i] === current) counter += 1;
    else if (counter > 1) {
      result += counter.toString() + current;
      counter = 1;
    } else result += current;
    current = str[i];
  }
  if (counter > 1) result += counter.toString() + current;
  else result += current;
  return result;
}

// assert.strictEqual(encodeLine('aabbccc'), '2a2b3c');
// assert.strictEqual(encodeLine('abbcca'), 'a2b2ca');

module.exports = {
  encodeLine,
};
