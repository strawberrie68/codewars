// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//My solution
//get rid of all the letters not x or o
//then replace the x and o to 1 and -1
//when the sum is zero there is an equal number of x and o

function XO(str) {
    let zero =str.toLowerCase().replace(/[^xo]/g, '').split('').map(a=> a==='x'? 1:-1)
      .reduce((acc,c)=> acc + c,0)
    return zero === 0? true:false
}

//I could have used match
//if the match length is equal it will come out true
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);

  }

//Other possibility is 
//filter for each letter
//then compare the length
//if equal then true

const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }

//Other way
//replace each letter with a space
//if the length is still the same
//it will equal true

function XO(str) {
    var a = str.replace(/x/gi, ''),
        b = str.replace(/o/gi, '');
    return a.length === b.length;
}

//overalll use match or filter or replace and compare the length if you are trying to see if there are
//the same number of letters

