// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

//My solution

function capitalize(s){
    let newStr = []
    newStr.push(s.split('').map((a,i)=> i % 2 === 0 || 0 ? a.toUpperCase():a ).join(""))
    newStr.push(s.split('').map((a,i)=> i % 2 !== 0 ? a.toUpperCase():a).join(""))
    return newStr
  };

//Other solution
function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
  };