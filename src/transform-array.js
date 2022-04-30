const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {

   // throw new NotImplementedError('Not implemented');
   // remove line with error and write your code
   if (!Array.isArray(arr)) { throw new Error('\'arr\' parameter must be an instance of the Array!') };
   let ar = arr.slice();
   for (let i = 0; i < ar.length; i++) {
      if (typeof (ar[i]) === 'string' || typeof (ar[i]) === 'number') {

         if (ar[0] == ('--discard-prev')) {
            ar.splice(0, 1)
         };
         if (ar[0] == ('--double-prev')) {
            ar.splice(0, 1)
         };

         if (ar[i] == ('--discard-next') && ar[i + 2] == ('--double-prev')) {
            ar.splice(i, 3)
         }
         if (ar[i] == ('--discard-next') && ar[i + 2] == ('--discard-prev')) {
            ar.splice(i, 3)
         }

         if (ar[ar.length - 1] == ('--discard-next')) {
            ar.splice(-1, 1)
         };
         if (ar[ar.length - 1] == ('--double-next')) {
            ar.splice(-1, 1)
         };


         if (ar[i] == ('--discard-next')) {
            ar.splice(i, 2);
         };

         if (ar[i] == ('--discard-prev')) {
            ar.splice(i - 1, 2)
         };

         if (ar[i] == ('--double-next')) {
            ar[i] = ar[i + 1];
         };
         if (ar[i] == ('--double-prev')) {
            ar[i] = ar[i - 1];
         }
      }
   }

   return ar;




}

module.exports = {
   transform
};
