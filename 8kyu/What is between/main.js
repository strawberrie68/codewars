// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

//My solution


function between(a, b) {
    let arry = []
    for(let i = a; i<b+1; i++){
      arry.push(i)
    }return arry
  }