/* Repeat a String */

const repeatStringNumTimes = (str,num) => (num > 0) ? str.repeat(num) : '';


const  repeatStringNumTimes = (str,num) => {
   if (num <= 0) return '';
   let word = '';
   for (let i = 0; i < num; i++){
      word+=str;
   }
   return word;
}
