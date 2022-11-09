// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


//My soltuion


function findShort(s){
    let aLength =s.split(' ').map(a=> a.length)
    return Math.min(...aLength)
   }

//However I could have written it better by
//using apply

function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }
//or make everything into one line
// could have put ... right in fron ton s.split

  function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}