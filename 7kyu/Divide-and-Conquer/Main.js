// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.


//My solution
//In order to solve this there are two way I can think of
// one is a looping way and another is a reducing way

//Looping
// //I will loop through the array, if the element is a number it will add
// and if it is a string i will change it to a number then minus it from the total
function divCon(x){
    let plus = 0;
    for(let i=0; i<x.length; i++){
      if( typeof x[i] === 'number'){
        plus= plus + x[i]
      }else{
        plus = plus - Number(x[i])
      }
    }return plus
    
  }

// // Reducing Method
// I can reduce the array but with the help of ternary operator
// if the current type is a number it will add
// If not it will minus

function divCon(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
  }


