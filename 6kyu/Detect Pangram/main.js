// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//My solution
//the best way of going about this is to find the length or the size of the set
//but in order to do that I have to make everything lowercase and
//get rid of anything that isnt a letter and replace it with a space
//if the size is 26 aka number of letter of alapbet
//return true

function isPangram(string){
    return new Set(string.toLowerCase().replace(/[^a-z]/gi,"")).size === 26? true:false
  }

//Other solution
//is to check the indexof
//if the indexof doesnt equal to -1 then we know it is not there

function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
  }