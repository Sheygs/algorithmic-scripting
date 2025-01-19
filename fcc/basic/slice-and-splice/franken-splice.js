// copy the contents of an array1 to array2 in order

const frankenSplice = (array1 = [], array2 = [], n) => {
  // creates new copies of each array
  // to prevent mutation of the old arrays

  const newArray1 = array1.slice();
  const newArray2 = array2.concat([]);
  newArray2.splice(n, 0, ...newArray1);
  return newArray2;
};
frankenSplice([1, 2], ['a', 'b'], 1);
frankenSplice([1, 2, 3], [4, 5], 1);
