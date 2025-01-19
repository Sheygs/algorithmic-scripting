// solution 1
const findLongestWordLength = (str) => {
  let maxLength = 0,
    stringArray = str.split(' '),
    len = stringArray.length;

  if (typeof str !== 'string') return;

  for (let i = 0; i < len; i++) {
    if (stringArray[i].length > maxLength) {
      maxLength = stringArray[i].length;
    }
  }

  return maxLength;
};

findLongestWordLength('Knowledge is evenly distributed');

// solution 2
const findLongestWordLength2 = (str = '') => {
  return str.split(' ').reduce((curr, next) => Math.max(curr, next.length), 0);
};

// solution 3
const findLongestWordLength3 = (str = '') => {
  const sortedArray = str.match(/[a-z]+/gi).sort((x, y) => y.length - x.length);
  return sortedArray[0].length;
};

// solution 4
const findLongestWordLength4 = (str = '') => {
  const sortedArray = str
    .match(/[a-z]+/gi)
    .reduce((a, b) => Math.max(a, b.length), 0);
  return sortedArray;
};
