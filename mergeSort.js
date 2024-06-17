function mergeSort(list) {
  if (list.length == 1) {
    return list;
  } else {
    const half = Math.ceil(list.length / 2);
    let firstHalf = list.slice(0, half);
    let secondHalf = list.slice(half);
    let sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf));
    return sorted;
  }
  function merge(firstHalf, secondHalf) {
    let mergedList = [];
    while (firstHalf.length > 0 && secondHalf.length > 0) {
      if (firstHalf[0] <= secondHalf[0]) {
        mergedList.push(firstHalf.shift());
      } else {
        mergedList.push(secondHalf.shift());
      }
    }
    return mergedList.concat(firstHalf).concat(secondHalf);
  }
}

let array1 = [3, 2, 1, 13, 8, 5, 0, 1];
let array2 = [105, 79, 100, 110];

console.log(mergeSort(array1));
console.log(mergeSort(array2));
