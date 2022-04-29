const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let teamName = '';
  let membersWithoutWhiteSpaces = [];
  members.forEach(member => {
    if (typeof member === 'string') {
      let isChenged = true;
      while (isChenged) {
        isChenged = false;
        const originalString = member;
        member = member.replace(' ', '');
        if (member !== originalString) {
          isChenged = true;
        }
      }
      membersWithoutWhiteSpaces.push(member.toUpperCase());
    }
  });
  membersWithoutWhiteSpaces.sort();
  membersWithoutWhiteSpaces.forEach(member => {
    if (typeof member === 'string') {
      teamName += member[0];
    }
  });
  return teamName;
}

module.exports = {
  createDreamTeam
};
