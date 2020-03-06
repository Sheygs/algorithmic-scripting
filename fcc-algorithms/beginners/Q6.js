/* Confirm The Ending */

/* Check if a string (first argument, str) ends with 
the given target string (second argument, target). */

const confirmTheEnding = (str,target) 
      => str.slice(str.length - target.length) === target;
      
confirmTheEnding('Connor', 'n'); //false
