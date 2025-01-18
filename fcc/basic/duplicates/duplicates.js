// factor to consider: must return only numeric duplicates
function countOccurences(array) {
  return array.reduce((obj, el) => {
    if (obj.hasOwnProperty(el)) {
      obj[el] = obj[el] + 1;
    } else {
      obj[el] = 1;
    }
    return obj;
  }, {});
}

// if the value of the key obj > 1
// return the numeric key or null
function countDuplicate(obj) {
  return Object.entries(obj).map(([key, value]) => (value > 1 ? Number(key) : null));
}

function truthy(array) {
  return array.filter(Boolean);
}

const obj = countOccurences([1, 2, 3, 2, 4, 2, 1]);
const duplicates = countDuplicate(obj);
const filtered = truthy(duplicates);
