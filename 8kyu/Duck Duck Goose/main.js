// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

// Example:

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name


//solution

function duckDuckGoose(players, goose) {
  
    return players[(goose-1)%players.length].name
  }


  //solution

  function duckDuckGoose(players, goose) {
    return goose <= players.length ? players[goose-1].name : 
      goose % players.length == 0 ? players[players.length-1].name:
          players[(goose % players.length)-1].name
        
                                    
  }