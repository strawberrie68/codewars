// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD


//solution

function alternateCase(s) {
    return s.split('').map(function(el) {
      return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
    }).join('');
  }

  function alternateCase(s) {
    return s.split('').map((a) => a == a.toLowerCase()? a.toUpperCase(): a.toLowerCase() ).join('')
  }