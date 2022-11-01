// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL


//my solution

function array(arr){
    return arr.split(',').length <3 ? null : arr.split(",").slice(1,-1).join(',').replace(/[,]/g, ' ')
    
    }

//Other solution
// did the same thing but i could have used or and make it null
//use of fasley and truthy
//join by (' ')

function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
  }