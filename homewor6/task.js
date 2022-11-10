function quadraticEquation(a, b, c) {
  try {
    const x1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    const x2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);

    if (!c) throw "missing parameter";
    if (a === 0) throw "not a quadratic equation";
    if (Math.pow(b, 2) - 4 * a * c < 0) throw "no sqrt from negative number";

    return `x1=${x1}, x2=${x2}`;
  } catch (err) {
    throw new ReferenceError(err);
  }
}

quadraticEquation(1, 5, 4); // x1=-1, x2=-4
quadraticEquation(1, 5); //missing parameter
quadraticEquation(0, 1, 5); //not a quadratic equation
quadraticEquation(1, 1, 1);
