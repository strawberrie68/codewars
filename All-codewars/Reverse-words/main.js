// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


function reverseWords(str) {
  
    return str.split(" ").map(c =>c.reverse())
  }

//so the problem was I was not yet finished
//I had to bring the outter string and map it, then join
//then i had to yet again break the string, reverse and join
//I have to remeber map only works with arrays
//I have to split it first in order for map to work

function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }

