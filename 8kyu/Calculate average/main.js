// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


//My solution
function findAverage(array) {
  
    return array.length === 0? 0: array.reduce((acc,c)=> acc+ c)/array.length;
  }