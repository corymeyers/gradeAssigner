var score = 100;
var grade;

while ( score >= 60) {
  
  if (score <= 100 && score >= 90) {
    var grade = "A";
  } else if (score <= 89 && score >= 80) {
      var grade = "B";
  } else if (score <= 79 && score >= 70) {
      var grade = "C";
  } else if (score <= 69 && score >= 60) {
      var grade = "D";
  } else if (score <= 69 && score >= 60) {
      var grade = "F";
  }

  console.log("Your score of " + score + " is equivalent to an " + grade + ".");
  score -= 1;
}
