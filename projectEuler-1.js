//Problem 1 - Multiples of 3 or Five
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3,5,6 and 9. The sum of these multiples is 23.
//Find the sum of 3 or 5 below 1000.
//

function multiplesOfThreeOrFive(number) {
  if (number < 3) {
    return 0;
  } else {
    let sum = multiplesOfThreeOrFive(number - 1);
    if (number % 3 == 0 || number % 5 == 0) {
      sum = sum + number;
    }
    return sum;
  }
}

console.log(multiplesOfThreeOrFive(10));
