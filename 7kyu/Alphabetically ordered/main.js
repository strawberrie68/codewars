// Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.

// Examples (input -> output)
// "kata" -> false ('a' comes after 'k')
// "ant" -> true (all characters are in alphabetical order)

//Solution


function alphabetic(s) {
    let string = s.split('').join('')
    let sortedLetters = [...s].sort((a,b)=> a.charCodeAt(0) - b.charCodeAt(0)).join('')
    return sortedLetters === string 
}  


const alphabetic = s => s === s.split('').sort().join('');