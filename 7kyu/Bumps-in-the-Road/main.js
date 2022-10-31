// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead


//My solution
function bump(x){
    let bumps = {_: 0, n: -1}
    let result = x.split('').reduce((a,b)=> a + bumps[b],0)
    return result <-15 ? 'Car Dead': 'Woohoo!'
    }

//Other Solution
//Could have used length
const bump=x=>x.split('n').length>16?"Car Dead":"Woohoo!"