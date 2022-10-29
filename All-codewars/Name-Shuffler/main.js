// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

//my solution

function nameShuffler(str){
    let split = str.split(" ")
    let newStr = []
    for(let i = 1; i>=0; i--){
      newStr.push(`${split[i]}`)
    }
   return newStr.join(" ")
  }

//Other solution
//couldve reversed it
function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
  }