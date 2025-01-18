const findElement = (arr, func) => {
  const isEven = (num) => num % 2 === 0;
  return arr.find(isEven);
};

findElement([2, 4, 6, 8], (num) => num % 2 === 0);

findElement([1, 3, 5, 8, 10], (num) => num % 2 === 0);
