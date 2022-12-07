// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"


//My solution
function solution(value){
    return `Value is ${'00000'.replace(/.$/g, value).slice(-5)}`
  
  }

//Could have written it even cleaner 
//by just adding

function solution(value){
    return "Value is " + ("00000" + value).slice(-5);
  }