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
function encodeLine( str ) {
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
let arr= Array.from(str);
    let cnt=1;
    let encode= new Array;
    for (let i = 0; i < arr.length; i++){
        if (arr[i]==arr[i+1]){
        cnt++;
        }else{
            encode.push(cnt);
            encode.push(arr[i]);
            cnt=1; }
        
    }
    return encode.filter(i=>i!==1).join('');}       

module.exports = {
  encodeLine
};
