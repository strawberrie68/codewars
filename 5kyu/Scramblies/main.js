// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False


function scramble(str1, str2) {
  let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
  return str2.split("").every((character) => --occurences[character] >= 0);
}


function scramble(str1, str2) {
    var hashtab = [...new Array(256)].map(x => 0);
    
    str2.split('').forEach(ele => hashtab[ele.charCodeAt(0)]++);
    str1.split('').forEach(ele => hashtab[ele.charCodeAt(0)]--);
    
    hashtab = hashtab.filter (x=>x > 0);
    
    return hashtab.length == 0;
  }