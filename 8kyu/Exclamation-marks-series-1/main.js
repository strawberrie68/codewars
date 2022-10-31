// Exclamation-marks-series-1


// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"


//My solution
function remove (string) {
    return string[string.length-1] === '!' ? string.substring(string.length-1,0):string
    
  }

//Other solution
//Replace only one !
const remove = s => s.replace(/!$/, '');

//if ends with , slice -1

function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
  }