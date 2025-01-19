// 1: Iterative Approach
const factorialize = (num) => {
  let factorial = 1;
  for (let i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
};
factorialize(5);

// 2: Recursive Approach
const factorialize2 = (num) => {
  if (num < 0) return 'Number cannot be negative';
  if (num === 0) return 1;
  else return num * factorialize(num - 1);
};
factorialize(6);
