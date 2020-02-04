/*Find The Longest Word In A String*/

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

