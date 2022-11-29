Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !


//My solution
function pigIt(str){
    return str.split(' ').map(a=> a === '!' ||a ==='.'|| a==='?'? a: a.slice(1)+a.charAt(0)+'ay').join(' ')
  }


//But I can also do this using regrex

function pigIt(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
  }

//Other possible solution
//can use replace 

  function pigIt(str) {
    return str.replace(/\w+/g, (w) => {
      return w.slice(1) + w[0] + 'ay';
    });
  }