// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20


// My solution

function century(year) {
    let yearFirstTwoNum = String(year).slice(0,String(year).length -2) 
    let yearLastTwoNum = String(year).slice(-2)
    if (year<100){
      return 1
    }else if(yearLastTwoNum == 0){
      return Number(yearFirstTwoNum)
    }else{
      return Number(yearFirstTwoNum) + 1
    }
    
  }

  //Could have

  const century = year => Math.ceil(year/100)
