// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//My solution
function removeUrlAnchor(url){
    let position = url.search('#')
    return position === -1 ? url :url.split("").slice(0,position).join("") 
  }

//Other solution
//split at #
//and get the first index
function removeUrlAnchor(url){
    return url.split('#')[0];
  }