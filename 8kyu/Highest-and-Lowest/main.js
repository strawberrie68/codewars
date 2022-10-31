// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


  // I originally thought I could just use max and min but all the numbers were not seperated
  // my solution

function highAndLow(numbers){
    let seperated = numbers.split(" ")
    let m = Math.max(...seperated)
    let e = Math.min(...seperated)
    return `${m} ${e}`
  }



    //instead I could have made it shorter by combining everything into the return 
    //like this one

  function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }

// other ppl also used split
//but they use map and math.max.apply(0,number)
//the apply changes the array into a string

  function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }