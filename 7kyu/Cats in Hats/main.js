// The Cat In The Hat has cat A under his hat, cat A has cat B under his hat and so on until Z

// The Cat In The Hat is 2,000,000 cat units tall.

// Each cat is 2.5 times bigger than the cat underneath their hat.

// Find the total height of the cats if they are standing on top of one another.

// Counting starts from the Cat In The Hat

// n = the number of cats

// fix to 3 decimal places.


//Solution

function height(n) {
    let arrayOfHeights = []
    let catHeight = 2000000
    for(let i = 0; i < n+1; i++){
      arrayOfHeights.push(catHeight/(Math.pow(2.5 ,i)))
    }
    return arrayOfHeights.reduce((acc,c) => acc +c).toFixed(3)
  }


  //Other possible way
  function height(n) {
    return (2000000 * (1 - Math.pow(0.4, n + 1)) / (1 - 0.4)).toFixed(3);
  }