/*Convert Celsius to Fahrenheit*/

const convertToF = C => 9/5 * C + 32;
convertToF(10); //50F


/*Reverse A String*/

//1: Using built-in method
const reverseString = str => str.split('').reverse().join('');
reverseString('hello'); // 'olleh'


//2: Using a decrement for-loop
const reverseString = str => {
  let newString = '', len = str.length;
  for (let i = str.length - 1; i >= 0; i--){
     newString+=str[i];
  }
  return newString;
}
reverseString('abaa'); // 'aaba'


//2: Using Recursion
const reverseString = str => {
  if (str === '')
    return '';
  else 
    return reverseString(str.substring(1)) + str.charAt(0);
}
reverseString('hello');  //'olleh'

//2-i: Using Recursion - Ternary Operator
const reverseString = str => (str === '') ? '' : reverseString(str.substring(1)) + str.chartAt(0);
reverseString('apple'); // 'elppa'


/*Factorialize a number*/

//1: Using Iterative Approach
const factorialize = num => {
   let factorial = 1;
   for (let i = num; i > 0; i--){
      factorial *= i;
   }
   return factorial;
}
factorialize(5); //120


//2: Using Recursive Approach
const factorialize = num => {
  if (num < 0)
      return "Number cannot be negative";
  if (num === 0)
      return 1; 
  else 
      return num * factorialize(num - 1);    
}
factorialize(6); //720


/*Find The Longest Word In A String*/

/* Beginner */

// Solution 1:
const findLongestWordLength = str => {
  if (typeof str !== 'string')
     return 'string argument required!';

  let maxLength = 0, 
      stringArray = str.split(' '), 
      len = stringArray.length;  

  for (let i = 0; i < len; i++){
     if (stringArray[i].length > maxLength){
        maxLength = stringArray[i].length;
     }
  }
  return maxLength;   
}
findLongestWordLength('Knowledge is evenly distributed'); //distributed



/* Intermediate */

//solution 2:
const findLongestWordLength = str => {
   return str.split(' ') //accepts any string input
             .reduce((curr,next) => Math.max(curr,next.length), 0);
}

//Solution 3:
const findLongestWordLength = str => {
   const sortedArray = str.match(/[a-z]+/gi)
                          .sort((x,y) => y.length - x.length);
     return sortedArray[0].length;                     
}

//Solution 4:
const findLongestWordLength = str => {
   const sortedArray = str.match(/[a-z]+/gi)
                          .reduce((a,b) => Math.max(a,b.length), 0);
}


/* Largest of Four*/

//Solution 1: Iterative Approach
const largestOfFour = arr => {
   const newArray = [];
   let max;
   for (let i = 0; i < arr.length; i++){
       max = arr[i][0];
       for (let j = 0; j < arr[i].length; j++){
          if (arr[i][j + 1] > max){
             max = arr[i][j + 1];
          }
       }
       newArray.push(max);
   }
   return newArray;

};


//Solution 2: Declarative Approach
const largestOfFour = arr => {
   return arr.map(group => {
      return group.reduce((curr,next) => {
         return Math.max(curr,next);
      })
   })
};

// Declarative Approach II
const largestOfFour = arr => {
   return arr.map(group => {
      return group.reduce((a,b) => {
         return a > b ? a : b;
      })
   })
};

/* Confirm The Ending */
const confirmTheEnding = (str,target) => str.slice(str.length - target.length) === target;
confirmTheEnding('Connor', 'n'); //false


/*Repeat a String*/

//1. Using Built-In Methhod
const repeatStringNumTimes = (str,num) => (num > 0) ? str.repeat(num) : '';

//2. Using Iterative Approach
const  repeatStringNumTimes = (str,num) => {
   if (num <= 0) return '';
   let word = '';
   for (let i = 0; i < num; i++){
      word+=str;
   }
   return word;
}

/* Truncate a String*/

//Solution 1
const truncateString = (str,num) =>
      (str.length > num) ? `${str.slice(0,num)}...` : str;
 
truncateString('A-',1)   //A...

//Solution 2
const truncateString = (str,num) =>
      (str.length > num) ? str.slice(0,num).padEnd(num + 3,'...') : str;


/* Find Elements*/
const findElement = (arr,func) => {
   const isEven = num => num % 2 === 0;
   return arr.find(isEven);
}
findElement([2,4,6,8],num => num % 2 === 0); //2
findElement([1,3,5,8, 10],num => num % 2 === 0); //8

/* Boo Who */
const booWho = bool => typeof bool === 'boolean';
booWho(true); //true
booWho(false); //true
booWho([]);  //false
booWho({"a" : 1}); //false