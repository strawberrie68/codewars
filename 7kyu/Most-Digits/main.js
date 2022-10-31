// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

//My solution
//learned a new function array.find - returns the first element they find that matches
//also math.max(...array) you can cycle for the max number in array

function findLongest(array){
    let maxLength = Math.max(...array).toString().length
    return array.find(element => element.toString().length === maxLength)
   
   }

//Could have
//used reduce to compared which is longer
//they made it as a string and compared length
//and if true or false they output the value

const findLongest = l => l
  .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);