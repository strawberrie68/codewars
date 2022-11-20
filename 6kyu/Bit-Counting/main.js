// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case



//My solution

//want to convert the number to binary first then, replace any 0 with ''
//after replacing it I can coun the length

var countBits = function(n) {
    return n.toString(2).replace(/[0]/g, '').length
  };

  //Another possible way to split at the zeros to get rid of all the zeros
  //then find the length

  countBits = n => n.toString(2).split('0').join('').length;

  //another way is to filter
  //need to use teo equals rather than 3 cuz it might not be the same type

  var countBits = function(n) {
    return n.toString(2).split('').filter(num => num == 1).length
  };