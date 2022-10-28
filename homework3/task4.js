// Write a function which returns a factorial of a given number with a loop.
// Sample output:
// getFactorial(5) => 120

function getFactorial(num) {
  if (num === 0 || num === 1) return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
getFactorial(5);
