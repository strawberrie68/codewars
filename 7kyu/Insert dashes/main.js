// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).


//solution
function insertDash(num) {
    let newArray =[]
     let numberArray = String(num).split('').map((a)=> Number(a))
     for(let i = 0; i < numberArray.length; i++){
       if(numberArray[i] % 2 == 0){
         newArray.push(numberArray[i])
       }else if(numberArray[i+1] % 2 !=0 ){
          newArray.push(numberArray[i] + '-')
       }else{
         newArray.push(numberArray[i])
         
       }
     }return newArray.join('').split('').pop() == '-' ?
              newArray.join('').split('').slice(0,-1).join(''): newArray.join('')
  }


  //other solution

  function insertDash(num) {
    return num.toString().replace(/[13579](?=[13579])/g, "$&-");
 }
