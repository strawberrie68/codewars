// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters


//My solution
function kebabize(str) {
    let numberless = str.replace(/[\d]/gi, '')
    let newStr = []
    for(let i = 0; i<numberless.length; i++ ){
      if(numberless.split('')[i] === numberless.toUpperCase().split('')[i]){
        newStr.push(`-${numberless.split('')[i]}`)
      }else{
        newStr.push(`${numberless.split('')[i]}`)
      }
    }let ans = newStr.join('').toLowerCase()
    return ans.slice(0,1) === '-'? ans.slice(1): ans
  }


//Other solution
function kebabize(str) {
    return str.replace(/[^a-z]/ig, '').
           replace(/^[A-Z]/, c => c.toLowerCase()).
           replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
  }