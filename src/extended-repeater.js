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
function repeater(str, options) {

  str = `${str}`;

  let repeatTimes = 1;
  if (options.hasOwnProperty('repeatTimes')) {
    repeatTimes = options.repeatTimes;
  };
  
  let separator = '+';
  if (options.hasOwnProperty('separator')) {
    separator = options.separator;
  };
  
  let addition = '';
  if (options.hasOwnProperty('addition')) {
    addition = `${options.addition}`;
  };
  
  let additionRepeatTimes = 1;
  if (options.hasOwnProperty('additionRepeatTimes')) {
    additionRepeatTimes = options.additionRepeatTimes;
  };
  
  let additionSeparator = '|';
  if (options.hasOwnProperty('additionSeparator')) {
    additionSeparator = options.additionSeparator;
  };

  let additionFullStr = '';

  if (additionRepeatTimes !== 0) {
    for (let i = 1; i <= additionRepeatTimes; i++) {
      additionFullStr += addition;
      if (i !== additionRepeatTimes) {
        additionFullStr += additionSeparator;
      }
    }
  }

  let fullStr = '';

  if (repeatTimes !== 0) {
    for (let i = 1; i <= repeatTimes; i++) {
      fullStr += str + additionFullStr;
      if (i !== repeatTimes) {
        fullStr += separator;
      }
    }
  }

  return fullStr;
}

module.exports = {
  repeater
};
