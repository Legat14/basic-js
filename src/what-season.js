const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (typeof date !== 'object' || Object.entries(date).length > 0) {
    throw new Error('Invalid date!');
  }
  const currentMonth = date.getMonth();
  const seasons = [[11, 0, 1, 'winter'], [2, 3, 4, 'spring'], [5, 6, 7, 'summer'], [8, 9, 10, 'fall']];
  let currentSeason;
  seasons.forEach(season => {
    season.forEach(month => {
      if(month === currentMonth) {
        currentSeason = season[3];
      }
    });
  });
  return currentSeason;
}

module.exports = {
  getSeason
};
