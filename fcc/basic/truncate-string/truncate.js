// Solution 1
const truncateString = (str, num) =>
  str.length > num ? `${str.slice(0, num)}...` : str;

truncateString('A-', 1); //A...

// Solution 2
const truncateString2 = (str, num) =>
  str.length > num ? str.slice(0, num).padEnd(num + 3, '...') : str;
