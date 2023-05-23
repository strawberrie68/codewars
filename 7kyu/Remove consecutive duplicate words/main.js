// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"
// Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.


//soltuion

const removeConsecutiveDuplicates = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");
 
// or

const removeConsecutiveDuplicates = s =>{
    const out = [];
    s = s.split(' ');
    for (let i = 1; i <= s.length; i++){
      if (s[i] !== s[i-1]){
        out.push(s[i-1])
      }
    }
    return out.join(' ')
  }

  const removeConsecutiveDuplicates = s => s.replace(/\b(\w+)(?: \1)+\b/g, '$1')
