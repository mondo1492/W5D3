function range(start, end) {
  if (start > end) {
    return [];
  }
  else {
    return range(start, end - 1).concat(end);
  }
}

// console.log(range(1,4));

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }
  else {
    return arr[0] + sumRec(arr.slice(1, arr.length));
  }
}
// console.log(sumRec([1,2,3,4]));


function exponent(base, exp){
  if (exp === 0) {
    return 1;
  }
  else {
    return exponent(base, exp - 1) * base;
  }
}

// console.log(exponent(9, 3));

function fibs(n) {
  if (n === 0) {
    return [];
  }
  else if (n === 1) {
    return [0];
  }
  else if (n === 2) {
    return [0, 1];
  }
  else {

    let f = fibs(n-1);
    f.push(f[f.length -1] + f[f.length -2 ]);
    return f;
  }

}
console.log(fibs(10));


function bsearch(arr, target) {
  let mid = Math.floor(arr.length / 2);
  if (arr.length === 0) {
    return -1;
  }
  else if (arr[mid] === target) {
    return mid;
  }
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid + 1);

  console.log(arr);
  if (arr[mid] < target) {
    let newMid = bsearch(rightArr, target);
    if (newMid === -1) {
      return -1;
    } else {
      return mid + 1 + newMid;
    }
  } else {
    return bsearch(leftArr, target);
  }
}

// console.log(bsearch([1,2,3,4,5], 5));

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    let mid = Math.floor(arr.length/2);
    let leftArr = mergeSort(arr.slice(0, mid));
    let rightArr = mergeSort(arr.slice(mid));
    return merge(leftArr, rightArr);
  }

}

function merge(leftArr, rightArr) {
  let result = [];
  while (leftArr.length > 0 && rightArr.length > 0) {
      let nextItem = (leftArr[0] < rightArr[0]) ? leftArr.shift() : rightArr.shift();
      result.push(nextItem);
  }
  result.concat(leftArr, rightArr);
  return result;
}

console.log(mergeSort([1,2,3,4,5,6]));
