/* Reverse A String */

// Solution 1
const reverseString = str => str.split('').reverse().join('');
reverseString('hello'); // 'olleh'

// Solution 2
const reverseString = str => {
  let newString = '', len = str.length;
  for (let i = str.length - 1; i >= 0; i--){
     newString+=str[i];
  }
  return newString;
}
reverseString('abaa'); // 'aaba'


// Solution 3: Recursion
const reverseString = str => {
  if (str === '')
    return '';
  else 
    return reverseString(str.substring(1)) + str.charAt(0);
}
reverseString('hello');  //'olleh'

// Solution 4: Recursion (Ternary)
const reverseString = str => (str === '') ? '' : reverseString(str.substring(1)) + str.chartAt(0);
reverseString('apple'); // 'elppa'
