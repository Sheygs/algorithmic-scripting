// difference of Two Arrays

// Solution 1
const diffArray = (arr1, arr2) => {
  // concat both arrays
  // apply set to get non-duplicate numbers {returns object}
  // convert from object to array
  // return the element not present in EITHER of the arrays but NOT both
  return Array.from(new Set(arr1.concat(arr2))).filter(
    (el) => !arr1.includes(el) || !arr2.includes(el),
  );
};
