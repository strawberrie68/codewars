// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


//My solution
//one way was to combine then use use set to find all the distinct letters

function longest(s1, s2) {
    let joined = s1+s2
    return [...new Set (joined)].sort().join('')
  }

//Could have made it much shorter
//Could have cut the s2+s1 inside the new set

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')