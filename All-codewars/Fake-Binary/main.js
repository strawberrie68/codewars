// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


//My solution
const fakeBin = x => x.split("").map(c=> c < 5 ? 0 : 1).join("")

//Other soltuions

//I could have used replace and /\d/
function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
  }

