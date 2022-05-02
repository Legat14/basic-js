const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let positionOfDog = 0;
  for (let i = email.length - 1; i >= 0; i--) {
    if (email[i] === '@') {
      positionOfDog = i;
      break;
    }
  }
  return email.slice(positionOfDog + 1);
}

module.exports = {
  getEmailDomain
};