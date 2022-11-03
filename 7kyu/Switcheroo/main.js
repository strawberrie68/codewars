// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'


//My solution

function switcheroo(x){
    return x.split('').map((a,i) => a === 'c' ? 'c': a=== 'a' ? a.replace('a', 'b'): 'a').join('')
    }