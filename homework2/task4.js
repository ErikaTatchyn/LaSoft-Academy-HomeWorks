// Write a function which from inputted 4-digit number (e.g. 5154):

// finds a sum of digits in the number (5141 is 5+1+4+1 = 11).
// checks whether the number contains the same number twice (digit 1 appears 2 times)
// checks whether the sum of first to digits equals the sum of second two digits (5141 → 5+1 = 6 and 4+1 = 5 → sums of first and >second pair of digits are not equal)
// function may return an object with all results.
// checkNumberValues(5154)
// returns
// {
// sum: 15,
// hasSameDigit: true,
// areHalvesEqual: false
// }

function checkNumberValues(num) {
  let digits = num.toString().split("");

  let sum = digits.map(Number).reduce(function (a, b) {
    return a + b;
  }, 0);

  function hasSameDigit() {
    let arr = [];
    let result = false;
    for (item of digits) {
      if (arr.includes(item)) {
        result = true;
      } else {
        arr.push(item);
      }
    }
    return result;
  }

  function areHalvesEqual() {
    return (
      Number(digits[0]) + Number(digits[1]) ==
      Number(digits[2]) + Number(digits[3])
    );
  }

  let obj = {
    sum: sum,
    hasSameDigit: hasSameDigit(),
    areHalvesEqual: areHalvesEqual(),
  };

  return obj;
}

checkNumberValues(5124);
