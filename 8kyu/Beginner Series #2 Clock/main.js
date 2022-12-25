// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000


//My solution

function past(h, m, s){
    return s*1000 + m*1000*60 + h*1000*60*60
    
  }

//Could have 
function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
  }