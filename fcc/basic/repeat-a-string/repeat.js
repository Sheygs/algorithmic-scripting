const repeatStringNumTimes = (str = '', num) => (num > 0 ? str.repeat(num) : '');

const repeatStringNumTimes2 = (str = '', num) => {
  let word = '';
  if (num <= 0) return '';

  for (let i = 0; i < num; i++) {
    word += str;
  }

  return word;
};
