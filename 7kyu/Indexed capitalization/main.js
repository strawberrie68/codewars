// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.

// Good luck!

//my solution

function capitalize(s,arr){
  
    var capS = s.split("");
    
    for(var i = 0; i < arr.length; i++) {
      if(capS[arr[i]]) {
        capS[arr[i]] = capS[arr[i]].toUpperCase();
      }
    }
    
    capS = capS.join("");
    return capS
    };

//other solution
function capitalize(s,arr){
    return [...s].map((x,i)=>arr.includes(i)?x.toUpperCase():x).join('')
  };