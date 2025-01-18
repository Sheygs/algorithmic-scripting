// Using Iterative Approach
const mutation = (arr) => {
  if (!Array.isArray(arr)) {
    return 'Input must be in an array';
  }
  if ((typeof arr[0] && typeof arr[1]) != 'string') {
    return 'Array content must be strings';
  }
  const word1 = arr[0].toLowerCase();
  const word2 = arr[1].toLowerCase();

  for (let i = 0; i < word2.length; i++) {
    if (!word1.includes(word2[i])) {
      return false;
    }
  }
  return true;
};

// Using Declarative Approach
const mutation2 = (arr) => {
  return arr[1]
    .toLowerCase()
    .split('')
    .every((letter) => {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
};
