// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

//My solution

function twoSort(s) {
    let sorted= s.sort()
    return sorted[0].split("").join("***")
  }


//Other solution
//could have combined everything can have ()[0] at the same time

function twoSort(s) {
    return s.sort()[0].split('').join('***');
  }