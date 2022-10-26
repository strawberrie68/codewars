// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

//My solution
function greet (name, owner) {
    return   name === owner ? 'Hello boss': 'Hello guest'
  }

//Other solution

//could have put the whole thing in `` and only change one word
function greet (name, owner) {
    return `Hello ${name==owner?'boss':'guest'}`
  }