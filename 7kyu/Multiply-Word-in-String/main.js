// You are to write a function that takes a string as its first parameter. This string will be a string of words.

// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

// Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.

// Example

// modifyMultiply ("This is a string",3,5) 


//Was confused about this
//got to the point to split and get the word
//wasn't sure how to add the hypen

//the solution added a hypen and repeated that then just slice the last hypen

function modifyMultiply (str,loc,num) {
    return (str.split(" ")[loc]+"-").repeat(num).slice(0,-1)
  } 

//one soltuion that was very different from my think was 

function modifyMultiply(str,i,n) {
    return Array(n).fill(str.split(' ')[i]).join('-');
  } 

//they used array and fill
//fill gets new values, using the newly created string, they  filled the array