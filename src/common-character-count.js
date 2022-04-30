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

function getCommonCharacterCount(s1, s2) {
   //  throw new NotImplementedError('Not implemented');
   // remove line with error and write your code here
   let arr2 = Array.from(s2);
   let arr1 = Array.from(s1);
   let cnt = 0;
   for (let j = 0; j < arr2.length; j++) {
      for (let i = 0; i < arr1.length; i++) {
         if (arr2[j] == arr1[i]) {
            arr1.splice(i, 1);
            arr2.splice(j, 1);
            cnt += 1;
            i--;
            j--;
         }
      }

   };
   return cnt;
}

module.exports = {
   getCommonCharacterCount
};
