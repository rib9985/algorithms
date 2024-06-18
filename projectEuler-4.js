function largestPalindromeProduct(digitOne, digitTwo) {
  let palindromeArr = [];
  function isPalindrome(number) {
    const reverseNumber =
      parseFloat(number.toString().split("").reverse().join("")) *
      Math.sign(number);
    return number === reverseNumber;
  }

  function findLargestPalindrome(digitOne, digitTwo) {
    if (digitOne < 910) {
      return palindromeArr;
    }
    if (digitTwo < 910) {
      return findLargestPalindrome(digitOne - 1, 999);
    }

    const product = digitOne * digitTwo;
    if (isPalindrome(product)) {
      palindromeArr.push({
        factors: `${digitOne}*${digitTwo}`,
        product,
      });
    }
    return findLargestPalindrome(digitOne, digitTwo - 1);
  }
  return findLargestPalindrome(digitOne, digitTwo);
}
const palindromeArray = largestPalindromeProduct(999, 999);
const maxPalindrome = Math.max(...palindromeArray.map((item) => item.product));
console.log(maxPalindrome); // 906609
