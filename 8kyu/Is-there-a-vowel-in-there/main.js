// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.


//Solution
//want to cycle through the loop, so i will use a for loop
//i want to check if each element in an array and tranform into a charcode
//if the charcode matches the voewel is will repalce the a[i] vluew to cahr

function isVow(a){
    for (var i=0, l=a.length; i<l; ++i)
    {
      var char = String.fromCharCode(a[i])
      if ('aeiou'.indexOf(char) !== -1)
      a[i] = char;
    }
    
    return a;
  }

  //Other methods
  const isVow = a => a.map(x=>'aeiou'.includes(y=String.fromCharCode(x)) ? y : x)
//Colud have used a map function
// i will map each Element
//
const v={"97":"a","101":"e","105":"i","111":"o","117":"u"}
const isVow=a=>a.map(x=>v[x]||x)