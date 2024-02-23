function memomizedPower() {
  const memo = new Map();

  return (base, power) => {
    const hash = JSON.stringify({ base, power });

    if (memo.has(hash)) {
      console.log("Using memomized value");
      return memo.get(hash);
    }

    console.log("Running power algorithm");
    let result = 1;

    while (power) {
      if (power & 1) {
        result *= base;
      }

      base = base * base;
      power = Math.floor(power / 2);
    }

    memo.set(hash, result);
    return result;
  };
}

const power = memomizedPower();

console.log(power(2, 3));
console.log(power(2, 3));
