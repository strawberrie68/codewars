// Write a function that checks if a given string (case insensitive) is a palindrome.

//my solution
function isPalindrome(x) {
    return x.toLowerCase() === x.split('').reverse().join('').toLowerCase() ? true: false
  }


//other Solution
const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}



