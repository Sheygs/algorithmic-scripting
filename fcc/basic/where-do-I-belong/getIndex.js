// Where do I Belong

// Solution 1
const getIndexToIns = (arr, num) => {
  //push to array
  arr.push(num);
  //sort
  arr.sort((a, b) => a - b);
  //return index of num
  return arr.indexOf(num);
};

// Solution 2
const getIndexToIns2 = (arr, num) => {
  const index = arr.sort((x, y) => x - y).findIndex((i) => num <= i);
  return index === -1 ? arr.length : index;
};
