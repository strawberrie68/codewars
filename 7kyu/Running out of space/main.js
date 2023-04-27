// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']


//My solution

function spacey(array){
    let noSpace = []
    let currentWord = ''
    for (let i = 0; i < array.length; i++){
      currentWord += array[i]
      noSpace.push(currentWord)
    } 
      return noSpace
    }