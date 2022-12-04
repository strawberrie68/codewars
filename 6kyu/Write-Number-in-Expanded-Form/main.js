// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!


//My solution

function expandedForm(num) {
    let length = String(num).length
    let numArr = String(num).split('')
    let arry = []
    
    for(let i = 0; i < numArr.length; i++){
      arry.push(numArr[i] * Math.pow(10, length-i-1))
    }
    return arry.join(' + ').replace(/(\s\+\s0){1,}/gm, '')}   
  
    
//Could have reversed it

const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");