const { NotImplementedError } = require('../extensions/index.js');

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
function repeater( str, options ) {
  const repeatTimes = options.repeatTimes || 1
  const separator = (options.separator !== undefined) ? String(options.separator) : '+'
  const additionSeparator = (options.additionSeparator !== undefined) ? String(options.additionSeparator) : '|'
  const additionRepeatTimes = options.additionRepeatTimes || 1
  const addition = (options.addition !== undefined) ? String(options.addition) : ''

  let strArr = [],
      additional = '',
      additionalArr = [],
      i = 0,
      j = 0

  while (i < additionRepeatTimes) {
      additionalArr.push(addition)
      i++
  }

  additional = additionalArr.join(additionSeparator);

  while (j < repeatTimes) {
      strArr.push(str + additional)
      j++
  }

  return strArr.join(separator)
}

module.exports = {
  repeater
};
