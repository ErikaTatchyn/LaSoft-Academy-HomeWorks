// Write a Javascript program to split a delimited string into an array.
// Sample output:
// Original delimited string:
// “Red, Green, Blue, 1, White, 3, 4, 5, 7”
// String to arrays:
// ["Red", "Green", "Blue", "White"]
// [1, 3, 4, 5, 7]

function stringToArr(str) {
  let arrOfStr = [];
  let arrOfNum = [];
  const splittedStr = str.split(",");
  for (item of splittedStr) {
    if (!isNaN(item)) {
      item = item * 1;
      arrOfNum.push(item);
    } else if (isNaN(item)) {
      arrOfStr.push(item);
    }
  }

  return JSON.stringify(arrOfStr) + JSON.stringify(arrOfNum);
}

stringToArr("Red, Green, Blue, 1, White, 3, 4, 5, 7");
