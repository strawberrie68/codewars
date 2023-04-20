// Description:
// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"


// Solution
function remove(s){
    return s.split(' ').filter(i => i.split('!').length != 2).join(' ');
  }


//other solution

function remove (string) {
  let newString = [] 
   string.split(' ').map((a)=>a.replace(/[^!]/g, '').length !== 1 ? newString.push(a) : '')
    return String(newString).split(',').join(' ')
                           
     }
 