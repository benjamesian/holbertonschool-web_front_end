function countPrimeNumbers() {
  let counted = 0;
  for (let i = 2; i <= 100; i++) {
    let isPrime = 1;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        isPrime = 0;
        break;
      }
    }
    counted += isPrime;
  }
  return counted;
}

const start = performance.now();
for (let i = 0; i < 100; i++) {
  setTimeout(countPrimeNumbers, 0);
}
console.log(
  `Execution time of calculating prime numbers 100 times was ${
    performance.now() - start
  } milliseconds.`
);
