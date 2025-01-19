// solution: Iterative Approach
const factorialize = (num) => {
  let factorial = 1;

  for (let i = num; i > 0; i--) {
    factorial *= i;
  }

  return factorial;
};

factorialize(5);

// solution: Recursive Approach
const factorialize2 = (num) => {
  if (num < 0) return 'number cannot be negative';
  if (num === 0) return 1;
  else return num * factorialize(num - 1);
};
factorialize(6);
