

Array.prototype.bubbleSort = function() {
  let sorted = false;
  let self = this.slice();
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < self.length - 1; i++) {
      if (self[i] > self[i+1]) {
        let first = self[i];
        let second = self[i+1];
        self[i] = second;
        self[i+1] = first;
        sorted = false;
      }
    }
  }
  return self;
};

let arr = [1,1,2,4,25,23,4,2,4,9];
console.log(arr.bubbleSort());



String.prototype.substrings = function() {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i+1; j < this.length+1; j++) {
      newArr.push(this.slice(i,j));
    }
  }
  return newArr;
};

console.log("ant".substrings());
