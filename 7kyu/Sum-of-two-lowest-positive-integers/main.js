// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.


//My solution
//One way of foind this is
//sorting to smallest to largest
//then get teo smallest by slicing it
//then reduce to sum it all
function sumTwoSmallestNumbers(numbers) {  
    return numbers.sort(function(a, b){return a - b}).slice(0,2).reduce((acc,c )=>acc+c)
  }

  //Other ways of doing this
  //Sort => then add the first and second elements
  function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
  };
  