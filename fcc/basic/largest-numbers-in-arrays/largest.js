// iterative Approach

const largestOfFour = (arr) => {
  const newArray = [];
  let max;
  for (let i = 0; i < arr.length; i++) {
    max = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j + 1] > max) {
        max = arr[i][j + 1];
      }
    }
    newArray.push(max);
  }
  return newArray;
};

// declarative Approach

const largestOfFour2 = (arr) => {
  return arr.map((group) => {
    return group.reduce((curr, next) => {
      return Math.max(curr, next);
    });
  });
};

// Solution 3
const largestOfFour3 = (arr) => {
  return arr.map((group) => {
    return group.reduce((a, b) => {
      return a > b ? a : b;
    });
  });
};
