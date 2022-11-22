// Turn given object into iterable so it was possible to loop through it via for...of construction.
// Given object:
const range = {
  from: 1,
  to: 10,
};

range[Symbol.iterator] = function () {
  const self = this;
  let nextIndex = self.from - 1;

  return {
    next() {
      if (nextIndex < self.to) {
        nextIndex += 1;
        return { value: nextIndex, done: false };
      }
      return { value: nextIndex, done: true };
    },
  };
};

// Expected result:

for (let num of range) {
  console.log(num); // logs out 1, then 2, then rest till 10
}

module.exports = { range };
