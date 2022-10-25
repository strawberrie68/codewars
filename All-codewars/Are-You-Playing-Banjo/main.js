// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.


//My solution

const areYouPlayingBanjo = name =>name.charAt(0).toLowerCase() === 'r'? `${name} plays banjo`:`${name} does not play banjo`
  
//Better solution

function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
  }

//Instead of rewriting all code I should have only made it so ternary operator
//write the whole sentence I should have only focused on the difference
//in this case plays and does not play
