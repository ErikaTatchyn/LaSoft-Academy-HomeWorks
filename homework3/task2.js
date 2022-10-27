// Write a Javascript program to compute the sum of elements in a given array.
// Sample Output:
// Original array:
// [12, 34, 23, 56]
// Sum of the values of the above array:
// 125

function sumElements(array) {
  let s = 0;
  for (let i = 0; i < array.length; i += 1) {
    s += array[i];
  }
  return s;
}

sumElements([12, 34, 23, 56]);
