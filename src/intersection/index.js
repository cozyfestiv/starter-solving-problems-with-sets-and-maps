function intersection (a, b) {
  const numbers = new Map();
  const intersectSet = new Set();

  for (let num of a) {
    numbers.set(num, 1);
  }

  for (let num of b) {
    if (numbers.has(num)) {
      intersectSet.add(num);
    }
  }
  return [...intersectSet];
  //another way to do this?
}

module.exports = intersection;
