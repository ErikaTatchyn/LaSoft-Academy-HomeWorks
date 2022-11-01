// Create a function that takes a string of name and checks how much good is the given name.
// Add up the letters of your name to get the total score.

// Return your result as per the following rules:
// score <= 60:   "NOT TOO GOOD"
// 61 <= score <= 300:  "PRETTY GOOD"
// 301 <= score <= 599:  "VERY GOOD"
// score >= 600:  "THE BEST"

const scores = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23,
};

function getNameScore(name) {
  let score = 0;
  for (const letter of name) {
    const upperCaseLetter = letter.toUpperCase();
    // console.log(upperCaseLetter);
    const letterScore = scores[upperCaseLetter];
    // console.log(letterScore);
    score = score + letterScore;
    // return score;
  }

  if (score <= 60) {
    console.log(`Your score ${score}, which is NOT TOO GOOD`);
  } else if (score <= 300 && score >= 61) {
    console.log(`Your score ${score}, which is PRETTY GOOD`);
  } else if (score <= 599 && score >= 301) {
    console.log(`Your score ${score}, which is VERY GOOD`);
  } else {
    console.log(`Your score ${score}, which is THE BEST`);
  }
}

console.log(getNameScore("robot")); //"Your score 979, which is THE BEST"
console.log(getNameScore("man")); // "Your score 575, which is VERY GOOD"
