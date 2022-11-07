function quadraticEquation(a, b, c) {
  const x1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  const x2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);

  try {
    if (!c) throw "missing parameter";
    if (a === 0) throw "not a quadratic equation";
  } catch (err) {
    console.log(err);
  }

  return `x1=${x1}, x2=${x2}`;
}

quadraticEquation(1, 5, 4); // x1=-1, x2=-4
quadraticEquation(1, 5); //missing parameter
quadraticEquation(0, 1, 5); //not a quadratic equation
