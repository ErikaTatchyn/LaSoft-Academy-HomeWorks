// Write a function to check if a string starts with "if".
// Sample Output:
// checkIfStart(‘if I could fly’) //true
// checkIfStart(‘iffy stuff’) //true
// checkIfStart(‘hello world’) //false

function checkIfStart(str) {
  return str.startsWith("if");
}

checkIfStart("hello world");
