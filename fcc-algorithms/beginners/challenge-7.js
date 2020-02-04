/*Repeat a String*/

// Solution 1
const repeatStringNumTimes = (str,num) => (num > 0) ? str.repeat(num) : '';

// Solution 2
const  repeatStringNumTimes = (str,num) => {
   if (num <= 0) return '';
   let word = '';
   for (let i = 0; i < num; i++){
      word+=str;
   }
   return word;
}
