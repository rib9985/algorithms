function gcd(a, b) {
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function smallestMultiple(number, divisor) {
  if (divisor > 20) {
    return number;
  } else {
    return smallestMultiple(lcm(number, divisor), divisor + 1);
  }
}

console.log(smallestMultiple(1, 1));
