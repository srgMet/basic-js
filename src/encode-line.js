const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
    let arr= Array.from(str);
    let count=1;
    let encode= new Array;
    for (let i = 0; i < arr.length; i++){
        if (arr[i]==arr[i+1]){
        count++;
        }else{
            encode.push(count);
            encode.push(arr[i]);
            count=1;
        }
        
    }
    return encode.filter(i=>i!==1).join('');
     }
module.exports = {
  encodeLine
};
