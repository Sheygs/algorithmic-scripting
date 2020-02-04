/* Title Case a Sentence */

// Solution 1

const titleCase = sentence => {
  //convert to array of words
  const wordArray = sentence.toLowerCase().trim().split(' ');
  return wordArray.map(el => {
     return el.charAt(0).toUpperCase() + el.substring(1);
  }).join(' ');
}

// Solution 2

const titleCase = sentence => {
  const wordArray = sentence.toLowerCase().trim().split(' ');
  return wordArray.map(el => {
     return el.replace(el.charAt(0), el.charAt(0).toUpperCase());
  }).join(' ');
}