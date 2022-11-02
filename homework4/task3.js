// Create a function that takes a number as its parameter and returns another function.
// The returned function must take an array of numbers as its parameter, and return an array of the numbers divided by the number that was passed into the first function.

function arrayDivisionFactory(num) {
  return function (arrNum) {
    const mapedArr = arrNum.map((item) => item / num);
    return mapedArr;
  };
}

const divide5 = arrayDivisionFactory(5);
divide5([10, 20, 25]);
console.log(divide5([10, 20, 25])); // [2, 4, 5]
const divide3 = arrayDivisionFactory(3);
console.log(divide3([6, 21, 27])); // [2, 7, 9]
