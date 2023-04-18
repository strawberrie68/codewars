// You'll have a function called "sortEmotions" that will return an array of emotions sorted. It has two parameters, the first parameter called "arr" will expect an array of emotions where an emotion will be one of the following:

// :D -> Super Happy
// :) -> Happy
// :| -> Normal
// :( -> Sad
// T_T -> Super Sad
// Example of the array:[ 'T_T', ':D', ':|', ':)', ':(' ]

// And the second parameter is called "order", if this parameter is true then the order of the emotions will be descending (from Super Happy to Super Sad) if it's false then it will be ascending (from Super Sad to Super Happy)

// Example if order is true with the above array: [ ':D', ':)', ':|', ':(', 'T_T' ]

// Super Happy -> Happy -> Normal -> Sad -> Super Sad
// If order is false: [ 'T_T', ':(', ':|', ':)', ':D' ]

// Super Sad -> Sad -> Normal -> Happy -> Super Happy
// Example:

// arr = [':D', ':|', ':)', ':(', ':D']
// sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
// sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]


//my solution

function sortEmotions(arr, order){
    let toLarger
    if (order){
      toLarger =  arr.map((a)=> sortEmotions.pairs[a]).sort((a,b)=>(b-a))
    }else {
      toLarger =  arr.map((a)=> sortEmotions.pairs[a]).sort((a,b)=>(a-b))
    }
   
   let newArray = []
   for(let i = 0; i < toLarger.length; i++){
     newArray.push(Object.keys(sortEmotions.pairs).find(key => sortEmotions.pairs[key] === toLarger[i]))
   }return newArray
    
  }
  
  sortEmotions.pairs = {
    ':D': 9,
    ':)': 8,
    ':|': 7,
    ':(': 6,
    'T_T':5
  }

  //other ways


  function sortEmotions(arr, order){
    const emotions = { ':D': 1, ':)': 2, ':|': 3, ':(': 4, 'T_T': 5 }
    arr = arr.sort((a, b) => emotions[a] - emotions[b]);
    return order && arr || arr.reverse();
  }

  function sortEmotions(arr, order){
    const m = {
      ":D": 1,
      ":)": 2,
      ":|": 3,
      ":(": 4,
      "T_T": 5
    }
    return arr.sort((a,b) => order ? m[a] - m[b] : m[b] - m[a])
  }