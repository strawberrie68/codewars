// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

//My solution
//want to replace anything that isnt numbers and compare the lengths
//if the length is the same, it means it is all numbers
//also need to check the code is valid code length ie 4 or 6

function validatePIN (pin) {
    let noLetters = pin.replace(/[^0-9]/g, '').length
    return noLetters === pin.length && (pin.length === 4 || pin.length === 6) ? true:false
  
  }

//could have written like this as well
function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }