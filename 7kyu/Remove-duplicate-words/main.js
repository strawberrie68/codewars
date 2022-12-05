// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

//My solution
function removeDuplicateWords (s) {
    return s.split(' ').filter(function(val,i,arr){
      return arr.indexOf(val) === i 
    }).join(' ')
  }


//could have 

const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')
