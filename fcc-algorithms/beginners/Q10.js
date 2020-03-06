/* Boo Who */

const booWho = bool => typeof bool === 'boolean';
booWho(true); //true
booWho(false); //true
booWho([]);  //false
booWho({"a" : 1}); //false