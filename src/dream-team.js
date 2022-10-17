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

    if(!members|| !Array.isArray(members)) return false;
    else{
        return (members.map(i=> ((typeof i == 'string')? (Array.from("" + i.replace(/\s/g, '')))[0] : '' ))).join('').toUpperCase().split('').sort().join('');
    
    }
    }

module.exports = {
    createDreamTeam
};
