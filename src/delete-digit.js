const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n) {
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    let arr = (Array.from(''+n));
    for (let i = 0; i <arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
    arr.splice((i), 1);
    arr=arr.join('');
    break;  }
    else{
    let min = arr[0];
    let max = min;
    for (i = 1; i < arr.length; ++i) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
}
arr.splice(arr.indexOf(min), 1);
arr=arr.join('');}
}
    return Number(arr);
}

module.exports = {
  deleteDigit
};
