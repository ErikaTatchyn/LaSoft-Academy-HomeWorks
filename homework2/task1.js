function copyString(str, n) {
  let repeatedString = "";
  while (n > 0) {
    repeatedString += str;
    n--;
  }
  return repeatedString;
}

copyString("a", 1);
