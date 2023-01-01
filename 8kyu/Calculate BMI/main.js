// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// FUNDAMENTALS
// Suggest kata description edits


//My solution
function bmi(weight, height) {
    let bmi = (weight/Math.pow(height,2))
      
      switch(true){
          case bmi > 30:
            return 'Obese';
            break;
          case bmi > 25:
            return 'Overweight'
            break;
          case bmi >18.5:
            return 'Normal'
            break;
          default: 
          return 'Underweight'
      } 
  }