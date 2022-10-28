// Write a function which returns a Fibonacci value for a given number with a loop.
// Sample output:
// getFibonacci(10) => 55

function getFibonacci(number) {
  let n1 = 0,
    n2 = 1,
    nextTerm;

  for (let i = 1; i <= number - 1; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  return nextTerm;
}

getFibonacci(10);
