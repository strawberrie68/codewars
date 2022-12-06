// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.


//my solution
function hasUniqueChars(str){
    return [...new Set(str.split(''))].length === str.split('').length ? true:false
  }

  //Could have written even shorter

  let hasUniqueChars = (str) => new Set(str).size === str.length;
