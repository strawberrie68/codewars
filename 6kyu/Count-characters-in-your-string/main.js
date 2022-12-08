// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.\


//My solution

function count (string) {  
    let str = string.split('')
    let counts = {}
    
    for (const letter of str){
      counts[letter] = counts[letter] ? counts[letter] + 1 : 1
    }
    return counts
     
  }


  //Could have written it a little better
  function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }