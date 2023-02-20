// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5


//My solution
function sumDigits(number) {
    return String(Math.abs(number)).split('').reduce((acc,c)=> Number(acc)+Number(c),0)
  }