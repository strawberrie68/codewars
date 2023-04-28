// In this kata you have to find whether same elements of the string are grouped together.

// Example

// Input	Output
// 112233	true
// 11223311	false

// Explanation
// In first example same elements are grouped together: (11)(22)(33), hence it should return true
// In the second example there are two different groups of 1's: (11)2233(11), hence it should return false


//My soltuion

const isConsecutive = (str) => {
    let array = []
    let groupedLength =  (new Set (str)).size
    for (let i = 0; i < str.length; i++){
      if(str[i] !== str[i-1]){
        array.push(str[i])
      }
    }return groupedLength === array.length
    }

//Other ways
const isConsecutive=s=> {
    let arr=s.match(/(.)\1*/g);
    return arr.length==new Set(arr).size;
}