// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//My solution

function sumMix(x){
    return (x).reduce((acc,c) => acc + c*1,0)
    }

//Other solution
//they mapped it first to make it an interger
//then reduced

function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }

  //Or
  //reduced but put b first inorder to put + in front
  const sumMix=x=>x.reduce((a,b)=>+b+a,0)
