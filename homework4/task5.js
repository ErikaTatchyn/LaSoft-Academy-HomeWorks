function specialReverse(string, letter) {
  const arr = string.split(" ");
  console.log(arr);
  const mapedArr = arr.map((element) => {
    if (element.charAt(0) === letter) {
      return element.split("").reverse().join("");
    } else {
      return element;
    }
  });
  return mapedArr.join(" ");
}

console.log(specialReverse("word searches are super fun", "s")); //"word sehcraes are repus fun"
console.log(specialReverse("first man to walk on the moon", "m")); //"first nam to walk on the noom"
