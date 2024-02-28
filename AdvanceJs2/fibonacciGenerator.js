// Implement a Fibonacci sequence generator using a generator function in JavaScript.

function* fibonacciGenerator() {
  let n = 0;

  let current = 1;
  let pre = 0;

  while (true) {
    if (n <= 1) {
      yield n++;
    }

    n++;
    let temp = current + pre;
    pre = current;
    current = temp;

    yield temp;
  }
}

const getFibonacci = fibonacciGenerator();

// Running Fibonacci generator
console.log("Fibonacci:");
for (let i = 1; i <= 10; i++) {
  console.log(getFibonacci.next().value);
}
