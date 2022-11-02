// write function infiniteSum which can take any amount of arguments and returns sum of them with getter:

function infiniteSum(a) {
  function innerFunction(b) {
    return infiniteSum(a + b);
  }
  innerFunction.get = () => {
    return a;
  };
  return innerFunction;
}

console.log(infiniteSum(5)(3)(4).get()); // 12
console.log(infiniteSum(6)(2)(4)(12).get()); // 24
