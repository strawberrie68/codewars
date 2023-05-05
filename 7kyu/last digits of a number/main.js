// Your job is to implement a function which returns the last D digits of an integer N as a list.

// Special cases:
// If D > (the number of digits of N), return all the digits.
// If D <= 0, return an empty list.
// Examples:
// N = 1
// D = 1
// result = [1]

// N = 1234
// D = 2
// result = [3, 4]

// N = 637547
// D = 6
// result = [6, 3, 7, 5, 4, 7]

//My solution

//there are 4 possible results that we can get
// n = d - meaning return all 
// n < d - return all array
// n > d - return array but split at (length -d)
// 0 >= d - return []

//can clump 
// n==d and n < d into one statment


function lastDigit(n, d) {
    let stringLength = String(n).length
    if (d <= 0){
      return []
    }else if(stringLength > d){
      return String(n).split('').map(Number).slice(stringLength - d)
    }else if(stringLength <= d){
      return  String(n).split('').map(Number) 
    }
   }