// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

//My solution
//we know inorder for a triangle to be a triangle, there must be 2 lengths when added tgt must be larger than the third length
//So to solve this:
//I sorted by smalled to largest
//took the smallest and second largest and see if the sum is larger than the third length
//if yes=>true , if not=>false

function isTriangle(a,b,c){
    let array = [a,b,c]
    let sorted =array.sort(function(a, b){return a - b})
    return sorted[0]+ sorted[1] >sorted[2]? true: false
  }