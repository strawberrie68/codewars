// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

//My Solution
var capitals = function (word) {
    //want to create a new string to push numbers to
    let newStr = [];
    let upper = word.toUpperCase().split("")
    let sep = word.split("")
    for(let i = 0; i< upper.length; i++){
      
      if(sep.indexOf(upper[i]) !== -1 && sep.indexOf(upper[i]) === i ){
        newStr.push(sep.indexOf(upper[i]))
      }
    }return newStr
     
  };
   

  //could have written it better
  //didnt need to split it or index
  var capitals = function (word) {
    var caps = [];
    for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
  };


  //could have used map and match
  //used matched to find all capitals
  //then find all the indexes of the the capital
  const capitals = word => { return word.match(/[A-Z]/g).map( x => { return word.indexOf(x) }) }
