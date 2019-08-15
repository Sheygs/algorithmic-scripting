// Convert Celsius to Fahrenheit

const convertToF = C => 9/5 * C + 32;
convertToF(10); //50F

//Reverse A String

//1: using built-in method
const reverseString = str => str.split('').reverse().join('');

reverseString('hello'); // 'olleh'