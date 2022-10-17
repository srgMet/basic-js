const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2) {
    let arr = Array.from(s2);
    let count=0;
    let ar = Array.from(s1);
    
    for(let j=0;j<arr.length;j++){    
    for(let i=0;i<ar.length;i++){
        if (arr[j]==ar[i]){
        ar.splice(i,1);
        arr.splice(j,1);
    count+=1;
    i--;
    j--;
    }
    }
    
    };
    return count;  
            }     


module.exports = {
    getCommonCharacterCount
};
