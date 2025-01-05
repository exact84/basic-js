const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = String(str);
  let additionRepeat = "";
  const separator = options.separator || "+";
  const additionSeparator = options.additionSeparator || "|";

  if (options.addition !== undefined) additionRepeat = String(options.addition);

  if (options.repeatTimes) {
    if (options.additionRepeatTimes) {
      for (let i = 1; i < options.additionRepeatTimes; i += 1)
        additionRepeat += additionSeparator + String(options.addition);
    }
  }
  result += additionRepeat;
  for (let j = 1; j < options.repeatTimes; j += 1)
    result += separator + String(str) + additionRepeat;

  return result;
}

module.exports = {
  repeater,
};
