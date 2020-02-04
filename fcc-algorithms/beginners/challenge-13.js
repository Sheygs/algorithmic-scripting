/* 
 Falsy Bouncer
 Removes all falsy values from an array
*/
const falsyBouncer = arr => arr.filter(el => Boolean(el));
falsyBouncer([1, null, NaN, 2, undefined]) //returns [1, 2]