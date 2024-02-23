const memomizedPower = memomize(power);

console.log(memomizedPower(2, 3));
console.log(memomizedPower(2, 3));

function memomize(callback) {
  const memo = new Map();

  return (...args) => {
    const hash = JSON.stringify(args, "");

    if (memo.has(hash)) {
      console.log("Using memomized value");
      return memo.get(hash);
    }

    console.log("Running power algorithm");
    const result = callback(...args);

    memo.set(hash, result);
    return result;
  };
}

function power(base, power) {
  let result = 1;

  while (power) {
    if (power & 1) {
      result *= base;
    }

    base = base * base;
    power = Math.floor(power / 2);
  }

  return result;
}
