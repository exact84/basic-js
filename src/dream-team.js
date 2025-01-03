const { NotImplementedError } = require("../extensions/index.js");

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
  // members.sort();
  let result = "";
  if (!members || !Array.isArray(members)) return false;
  for (person of members)
    if (typeof person === "string") result += person.trim()[0];
  if (result) return [...result.toUpperCase()].sort().join("");
}

module.exports = {
  createDreamTeam,
};
