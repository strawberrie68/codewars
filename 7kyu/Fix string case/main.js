// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.


//My solution
function solve(s){
    let str = s.split('')
    let numberOfUpper = 0
    for(let i=0; i<str.length; i++){
      if(str[i]=== str[i].toUpperCase()){
        numberOfUpper++
      }
    }return numberOfUpper > (str.length-numberOfUpper) ?s.toUpperCase(): s.toLowerCase();
  }

//Other solutions
const solve = s => s.replace(/[A-Z]/g,'').length < s.length/2 ? s.toUpperCase() : s.toLowerCase()