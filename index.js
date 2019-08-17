/*Convert Celsius to Fahrenheit*/

const convertToF = C => 9/5 * C + 32;
convertToF(10); //50F


/*Reverse A String*/

//1: Using built-in method
const reverseString = str => str.split('').reverse().join('');
reverseString('hello'); // 'olleh'


//2: Using a decrement for-loop
const reverseString = str => {
  let newString = '', len = str.length;
  for (let i = str.length - 1; i >= 0; i--){
     newString+=str[i];
  }
  return newString;
}
reverseString('abaa'); // 'aaba'


//2: Using Recursion
const reverseString = str => {
  if (str === '')
    return '';
  else 
    return reverseString(str.substring(1)) + str.charAt(0);
}
reverseString('hello');  //'olleh'

//2-i: Using Recursion - Ternary Operator
const reverseString = str => (str === '') ? '' : reverseString(str.substring(1)) + str.chartAt(0);
reverseString('apple'); // 'elppa'


/*Factorialize a number*/

//1: Using Iterative Approach
const factorialize = num => {
   let factorial = 1;
   for (let i = num; i > 0; i--){
      factorial *= i;
   }
   return factorial;
}
factorialize(5); //120


//2: Using Recursive Approach
const factorialize = num => {
  if (num < 0)
      return "Number cannot be negative";
  if (num === 0)
      return 1; 
  else 
      return num * factorialize(num - 1);    
}
factorialize(6); //720


/*Find The Longest Word In A String*/
const findLongestWordLength = str => {
  if (typeof str !== 'string')
     return 'string argument required!';

  let maxLength = 0, 
      stringArray = str.split(' '), 
      len = stringArray.length;  

  for (let i = 0; i < len; i++){
     if (stringArray[i].length > maxLength){
        maxLength = stringArray[i].length;
     }
  }
  return maxLength;   
}
findLongestWordLength('Knowledge is evenly distributed'); //distributed