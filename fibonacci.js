function fibs(number) {
  if (number < 2) {
    return null;
  } else {
    return fibs(number - 1) + fibs(number - 2);
  }
}

function fibsRec(number) {
  //Must add these bases cases due to the Fibonacci's definition.
  if (number < 1) {
    return [];
  } else if (number < 2) {
    return [0];
  } else if (number < 3) {
    return [0, 1];
  } else {
    let arr = fibsRec(number - 1);
    let nextValue = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(nextValue);
    return arr;
  }
}

console.log(fibsRec(8));
