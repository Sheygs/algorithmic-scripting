// Solution 1
const reverseString = (str) => str.split('').reverse().join('');

reverseString('hello'); // 'olleh'

// Solution 2
const reverseString2 = (str = '') => {
  let newString = '',
    len = str.length;

  for (let i = len - 1; i >= 0; i--) {
    newString += str[i];
  }

  return newString;
};

reverseString('abaa'); // 'aaba'

// Solution 3: Recursion
const reverseString3 = (str) => {
  if (str === '') return '';
  else return reverseString(str.substring(1)) + str.charAt(0);
};

reverseString('hello'); //'olleh'

// Solution 4: Recursion (Ternary)
const reverseString4 = (str) =>
  str === '' ? '' : reverseString(str.substring(1)) + str.chartAt(0);

reverseString('apple'); // 'elppa'
