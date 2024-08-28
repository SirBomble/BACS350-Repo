const prompt = require('prompt-sync')();

function fib(n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

const num = parseInt(prompt('Enter number of terms: '));
console.log("Fibonacci sequence: ");

for (let i = 0; i < num; i++) {
  console.log(fib(i));
}