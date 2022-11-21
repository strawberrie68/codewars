// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


//My solution

//one way of doing this is replace all the '-' or '_' with spaces and split the string
//after that I will combine the string togther
//get the first element untouhed while changing the other elements in an array by using map

function toCamelCase(str){
    if(str.length === 0){
      return ''
    }else{
      let fixedArray = str.replace(/[_-]/g, ' ').split(' ')
      return fixedArray[0] + fixedArray.slice(1).map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join('')
    }
  }

//Other ways

function toCamelCase(str){
    var regExp=/[-_]\w/ig;
    return str.replace(regExp,function(match){
          return match.charAt(1).toUpperCase();
     });
}

// More ways

function toCamelCase(str){
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
  }