
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.


//My solution

function findUniq(arr) {
    let max = arr.sort(function(a, b){return a - b}).slice(-1)
    let min = arr.sort(function(a, b){return b - a}).slice(-1)
    
    
    
    let filteredMaxLength = arr.filter(el => el == max).length
    let filteredMinLength = arr.filter(el => el == min).length
    return filteredMaxLength < filteredMinLength ? Number(max) : Number(min)
  }


//other solutions

function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
  }
