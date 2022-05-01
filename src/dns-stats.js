const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainsStat = {};
  domains.forEach((address) => {
    let firstDotNumber = address.length;
    let secondDotNumber;
    const arrOfDomains = [];
    for (let i = address.length; i >= 0; i--) {
      if (address[i] === '.') {
        secondDotNumber = firstDotNumber;
        firstDotNumber = i;
        arrOfDomains.push(address.slice(firstDotNumber + 1, secondDotNumber));
      }
      if (i === 0) {
        secondDotNumber = firstDotNumber;
        firstDotNumber = 0;
        arrOfDomains.push(address.slice(firstDotNumber, secondDotNumber));
      }
    }
    let currentDomain = '';
    const currentArr = [];
    arrOfDomains.forEach((domain) => {
      currentArr.push(domain);
      currentDomain = '.' + currentArr.join('.');
      if (domainsStat[currentDomain]) {
        domainsStat[currentDomain] += 1;
      } else {
        domainsStat[currentDomain] = 1;
      }
    });
  });
  return domainsStat;
}

module.exports = {
  getDNSStats
};
