const confirmTheEnding = (str = '', target) =>
  str.slice(str.length - target.length) === target;

confirmTheEnding('Connor', 'n');
