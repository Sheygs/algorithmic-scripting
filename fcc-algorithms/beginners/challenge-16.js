/* Chunky Array In Groups */

// Solution 1
const chunkyArrayInGroups = (arr,size) => {
  const newArray = [];
  let i = 0;
  while (i < arr.length){
    newArray.push(arr.slice(i, i+size));
    i+=size;
  }
  return newArray;
}

// Solution 2
const chunkyArrayInGroups = (arr,size) => {
  const list = [];
  while(arr.length){
     list.push(arr.splice(0,size));
  }
  return list;
}