const a = {
  apples: 2,
  grapefruits: 4,
  pineapple: 1,
};

const handler = {
  get(target, prop) {
    if (target[prop]) {
      return target[prop];
    }

    return "I have no such fruits";
  },
};

const proxy = new Proxy(a, handler);

console.log(proxy.apples);
console.log(proxy.oranges);
