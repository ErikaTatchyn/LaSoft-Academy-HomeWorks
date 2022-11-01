// Create a function that takes a "base number" as an argument.
// This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.

function plusFactory(num) {
  return function (otherNum) {
    return num + otherNum;
  };
}
const plusFive = plusFactory(5);
plusFive(2); // ➞ 7
const plusTen = plusFactory(10);
plusTen(188); // ➞ 198
plusFive(plusTen(0)); // ➞ 15
