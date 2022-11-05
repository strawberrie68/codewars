// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312")
// should return :

// "333122"
// explode("102269")
// should return :

// "12222666666999999999"

//my solution
function explode(s) {
    return s.split('').map((a,i)=> a.repeat(a)).join('')
  }

//other solution
//instead of mapping i could have used replace

const explode = s => s.replace(/\d/g, d => d.repeat(d));