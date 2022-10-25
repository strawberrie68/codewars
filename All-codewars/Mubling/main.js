// // This time no story, no theory. The examples below show you how to write function accum:

// // Examples:
// // accum("abcd") -> "A-Bb-Ccc-Dddd"
// // accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// // accum("cwAt") -> "C-Ww-Aaa-Tttt"
// // The parameter of accum is a string which includes only letters from a..z and A..Z.


// could not fully obtain answer
// I did think of using split
//but could not think of how to use upcase and lowercase
//need to learn how to use map

//it creates a new array
//and it can be formatted map(function(c,i){...})
//but since there is an arrow function can get rid of the arrow function
//map((c,i) => ...
//it can spit out both values, index and even the whole array


// function accum(s) {
//     return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
//   }
