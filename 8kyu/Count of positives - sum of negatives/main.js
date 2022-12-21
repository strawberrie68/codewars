// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


//My solution

function countPositivesSumNegatives(input) {
    let negative = 0;
    let positive = 0;
    if (input === null || input.length == 0){
      return []
    }else{
        for (let i = 0; i<input.length; i++){
      if(input[i]<0) {
        negative = negative+input[i]
      }else if (input[i]>0){
        positive++
      }
    }return [positive , negative]
      
    }
  
  }


  //or could have done this

  function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}
