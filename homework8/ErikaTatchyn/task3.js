const { range } = require("./task1");

const oddNum = [];

for (let num of range) {
  if (num % 2 === 1) {
    oddNum.push(num);
  }
}

console.log(oddNum);
