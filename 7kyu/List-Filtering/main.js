// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

//My solution

//I want a way to loop through all the elements in the array
//for loop works okay
//If the condition is met, it will push into the new string

function filter_list(l) {
    let newArr = [];
    for (let i = 0; i<l.length; i++){
      if( typeof l[i] === 'number'){
         newArr.push(l[i])
      }
    }return newArr
  }

//Other methods
//I could have used filter 
//if the condition is met, it will filter any that does not match
function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
  }