// Write a function which accepts any number of arguments and returns a string in format "argument [index]: [argument]; argument [index]: [argument];", e.g."argument 0: 1; argument 1: 4; argument 2: 79;". More vivid description:
function argumentsLogger(...args) {
  const arr = [];
  for (const arg of args) {
    arr.push(`argument ${args.indexOf(arg)}: ${arg}; `);
  }

  return arr.join("");
}
console.log(argumentsLogger(3, 6, 55, "some string")); // logs out "argument 0: 3; argument 1: 6; argument 2: 55; argument 3: some string;"
console.log(argumentsLogger([1, 2], "xyz", 365)); // logs out "argument 0: 1,2; argument 1: xyz; argument 2: 365;"
console.log(argumentsLogger()); // logs out ""
