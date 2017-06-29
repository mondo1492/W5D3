// Array.prototype.uniq = function(){
//   let self = this;
//   let newArr = [];
//   for (let i = 0; i < self.length; i++) {
//     if (newArr.includes(self[i])) {
//       continue;
//     }
//     else {
//       newArr.push(self[i]);
//     }
//   }
//   return newArr;
// };

Array.prototype.uniq = function(){
  let self = this;
  let newArr = [];
  for (let i = 0; i < self.length; i++) {
    if (!newArr.includes(self[i])) {
      newArr.push(self[i]);
    }
  }
  return newArr;
};


let arr = [1,1,2,4,25,23,4,2,4,9];
console.log(arr.uniq());


Array.prototype.twoSum = function() {
  let self = this;
  let newArr = [];
  for (let i = 0; i < self.length - 1; i++) {
    for (let j = i + 1; j < self.length; j++) {
      if (self[i] + self[j] === 0) {
        newArr.push([i, j]);
      }
    }
  }
  return newArr;
};


let arr2 = [1,-1,2,4,25,23,4,-2,-4,9];
console.log(arr2.twoSum());


Array.prototype.transpose = function() {
  let self = this;
  let newArr = [];
  for (var i = 0; i < self.length; i++) {
    newArr.push([self[0][i], self[1][i]]);
  }
  return newArr;
};
let arr3 = [[1, 2],
            [3, 4]];
console.log(arr3.transpose());
