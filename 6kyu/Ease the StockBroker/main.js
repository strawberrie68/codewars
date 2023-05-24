// Clients place orders to a stockbroker as strings. The order can be simple or multiple or empty.

// Type of a simple order: Quote/white-space/Quantity/white-space/Price/white-space/Status

// where Quote is formed of non-whitespace character, Quantity is an int, Price a double (with mandatory decimal point "." ), Status is represented by the letter B (buy) or the letter S (sell).

// Example:
// "GOOG 300 542.0 B"

// A multiple order is the concatenation of simple orders with a comma between each.

// Example:
// "ZNGA 1300 2.66 B, CLH15.NYM 50 56.32 B, OWW 1000 11.623 B, OGG 20 580.1 B"

// or

// "ZNGA 1300 2.66 B,CLH15.NYM 50 56.32 B,OWW 1000 11.623 B,OGG 20 580.1 B"

// To ease the stockbroker your task is to produce a string of type

// "Buy: b Sell: s" where b and s are 'double' formatted with no decimal, b representing the total price of bought stocks and s the total price of sold stocks.

// Example:
// "Buy: 294990 Sell: 0"

// Unfortunately sometimes clients make mistakes. When you find mistakes in orders, you must pinpoint these badly formed orders and produce a string of type:

// "Buy: b Sell: s; Badly formed nb: badly-formed 1st simple order ;badly-formed nth simple order ;"

// where nb is the number of badly formed simple orders, b representing the total price of bought stocks with correct simple order and s the total price of sold stocks with correct simple order.

// Examples:
// "Buy: 263 Sell: 11802; Badly formed 2: CLH16.NYM 50 56 S ;OWW 1000 11 S ;"

// "Buy: 100 Sell: 56041; Badly formed 1: ZNGA 1300 2.66 ;"

// Notes:
// If the order is empty, Buy is 0 and Sell is 0 hence the return is: "Buy: 0 Sell: 0".
// Due to Codewars whitespace differences will not always show up in test results.
// With Golang (and maybe others) you can use a format with "%.0f" for "Buy" and "Sell".


//Solution


SORT BY

Ad
Register for the 2023 Code to Cloud Cybersecurity Summit to hear what’s next in cybersecurity.
Ads via Carbon
Ad
Good habits form great programmers. Read on for tips on how to maximize your routine.
appsincaps, 唱跳rap篮球
function balanceStatements(list){
  var bought = 0, sold = 0, bad = [];
  list = list.trim();
  list = list !== '' ? list.split(',') : [];
  for (var i in list) {
    if (!/^\s*[^\s]+ \d+ \d*\.\d+ (B|S)\s*$/.test(list[i])) 
      bad.push(list[i].trim());
    else { 
      var order = list[i].trim().split(' ');
      if (order[3] === 'B') bought += order[1]*order[2];
      if (order[3] === 'S') sold += order[1]*order[2];
    }
  }
  return 'Buy: ' + Math.round(bought) +
         ' Sell: ' + Math.round(sold) +
         (bad.length === 0 ? '' :
         '; Badly formed ' + bad.length + ': ' + bad.join(' ;') + ' ;');
}

function balanceStatements(list){
  let badStrings = []
  let goodStrings = []
  let buyStrings = []
  let sellStrings = []
  let B;
  let S;
  
  if(list == []){
    return "Buy: 0 Sell: 0"
  }else{
      list.split(',').map((a,i) => (a.trim().split(' ').length === 4 &&
                               a.trim().split(' ')[2].indexOf('.') != -1)
                               ? goodStrings.push(a.trim().split(' ')) : badStrings.push(a.trim()) )
      goodStrings.map((a,i) => a[3] === 'B' ? buyStrings.push(a): sellStrings.push(a))
      buyStrings.length === 0 ? B = 0 :
                                B = buyStrings.map((a,i)=> a.slice(1,-1).reduce((acc,c)=> acc*c)).reduce((acc,c)=> acc+c);
      sellStrings.length === 0 ? S = 0:
                                 S = sellStrings.map((a,i)=> a.slice(1,-1).reduce((acc,c)=> acc*c)).reduce((acc,c)=> acc+c)
      return `Buy: ${Math.round(B)} Sell: ${Math.round(S)}` + (badStrings.length === 0 ? '' : `; Badly formed ${badStrings.length}: ${badStrings.join(' ;')} ;` );

  }
}
