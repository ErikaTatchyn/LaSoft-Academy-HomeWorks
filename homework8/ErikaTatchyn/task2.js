// Loop through iterable object created in task 1 and create an array which contains only odd numbers. Expected result:
// [1, 3, 5, 7, 9];

const { range } = require("./task1");

const oddNum = [];

for (let num of range) {
  if (num % 2 === 0) {
    oddNum.push(num);
  }
}

console.log(oddNum);
