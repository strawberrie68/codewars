// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.


//My solution
//

function solve(arr){  
    //define alaphabet
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    //want an array where I want to push the count to
    
    let final = []
    //we want to loop through the array
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
      //we also want to loop through the word
      for (let j = 0; j < arr[i].length; j++) {
        //everytime the letter is in the same position, we will add one
        if (arr[i][j].toLowerCase() === alphabet[j]) {
          count++;
        }
      }
      //push the count to the array
      final.push(count); 
    }
    //return the final array
    return final
  };

  //Other Answer
  function solve(arr){  
    //define the alaphet
    var alphabeth = "abcdefghijklmnopqrstuvwxyz";
    //we can use map
    //which will change every element in an array
    //lowercase it them split it
    //filter for anything that doesnt it the index position
    //then count the length
    return arr.map(x => x.toLowerCase().split('').filter((y,i) => i==alphabeth.indexOf(y)).length);
  };
