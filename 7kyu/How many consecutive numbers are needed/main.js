// Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

// For example:
// If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.


//solution

function consecutive(arr){
    let l = arr.length;
    return l ? Math.max(...arr) - Math.min(...arr) - l + 1 : 0;
  }


  function consecutive(arr) {
    let result = 0;
    
    arr.sort((a, b) => a - b);
    
    for (var i = 1; i < arr.length; i++) {
      let diff = arr[i] - arr[ i - 1]
      if (diff > 1)
        result += --diff;
    }
    
    return result;
}