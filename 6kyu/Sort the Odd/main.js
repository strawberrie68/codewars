// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


//My solution

function sortArray(array) {
    let evenOnlys = []
    let odds = []
    for(let i =0; i<array.length; i++){
      if(array[i] % 2 === 0){
        evenOnlys.push(array[i])
      }else if(array[i] % 2 !== 0){
        evenOnlys.push('')
        odds.push(array[i])
      }
    }
    let newOdds = odds.sort((a,b)=> a-b)
  for (let i = 0; i< evenOnlys.length; i++){
    if(evenOnlys[i] === ''){
      evenOnlys[i] = newOdds[0]
      newOdds.shift()
    }
  }return evenOnlys
      
    }

    
//Could have written this
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }