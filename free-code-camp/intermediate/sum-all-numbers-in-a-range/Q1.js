/*  Sum All Numbers In A Range */

// Solution 1
const sumAll = arr => {
  if (!Array.isArray(arr)){
     return `Array argument required `;
  }
  if (typeof arr[0] !== 'number' || typeof arr[1] !== 'number'){
     return `Array values must all be numbers`;
  }
  let min = Math.min(arr[0], arr[1]),
      max = Math.max(arr[0], arr[1]),
      sum = 0;
  for (let i = min; i <= max; i++){
     sum+=i;
  }
  return sum;
}

// Solution 2
const sumAll = arr => {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++){
     sum+=i;
  }
  return sum;
}

//Solution 3:
const sumAll = arr => {
  let sorted = arr.sort((x,y) => x - y );
  let [num1,num2] = sorted;
  //Arithmetic Progression sum
  let sum = (num2 - num1 + 1) * (num1 + num2)/2;
  return sum;
}
