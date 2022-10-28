// Write a Javascript program to pick a number of random elements from a given array.
// Sample Output:
// Original array:
// [12, 34, 23, 56]
// 2 random elements from the array.
// [34, 12]
// 3 random elements from the array.
// [56, 12, 34]

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

getMultipleRandom([12, 34, 23, 56], 2);
