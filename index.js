// Convert Celsius to Fahrenheit

const convertToF = C => 9/5 * C + 32;
convertToF(10); //50F

//Reverse A String

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


//2: Using 