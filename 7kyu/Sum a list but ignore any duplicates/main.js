// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.


function sumNoDuplicates(numList) {
    let noDuplicates = numList.filter((a,i)=> numList.indexOf(a) === numList.lastIndexOf(a))
    return noDuplicates.reduce((a,c)=>a+c,0)
  }