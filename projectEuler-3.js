//With iteration:
function largestPrimeFactor(number) {
  function findFactors(number) {
    let factors = [];
    let d = 2;
    while (number > 1) {
      while (number % d == 0) {
        factors.push(d);
        number /= d;
      }
      d = d + 1;
    }
    return factors;
  }
  return Math.max(...findFactors(number));
}

//With recursive:
function largestPrimeFactorRecurs(number) {
  function findFactors(number, divisor) {
    let factors = [];
    if (number == 1) {
      return [];
    } else if (number % divisor === 0) {
      return [divisor, ...findFactors(number / divisor, divisor)];
    } else {
      return findFactors(number, divisor + 1);
    }
  }

  const factorsFinal = findFactors(number, 2);
  console.log(factorsFinal);
  return Math.max(...factorsFinal);
}

console.log(largestPrimeFactorRecurs(600851475143)); // Answer: 6587
