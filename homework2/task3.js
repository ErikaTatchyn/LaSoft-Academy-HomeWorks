// Write a Javascript program to check two non-negative integer values and return true if they have the same last digit
// checkLastNumber(26, 6) //true
// checkLastNumber(26, 148) //false

function checkLastNumber(num1, num2) {
  return num1 % 10 === num2 % 10;
}

checkLastNumber(26, 148);
