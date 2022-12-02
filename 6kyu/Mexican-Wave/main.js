// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// Good luck and enjoy!


function wave(str){
    let wave = [];
    
    for(let i=0; i<str.length; i++){
      if (str.charAt(i) === ' '){
      }else{
          if(i===0){
          wave.push(str.charAt(i).toUpperCase()+str.slice(1))
        }else if(i<str.length){
          wave.push(str.slice(0,i)+str.charAt(i).toUpperCase()+str.slice(i+1))
        }else{
          wave.push(str.slice(0,i)+str.charAt(str.length).toUpperCase())
        }}
    }return wave
  }