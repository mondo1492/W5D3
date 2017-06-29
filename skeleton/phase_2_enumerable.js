Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};
//
// [1,2,3,4].myEach( function(el) {
//   console.log(el * 2);
// });

[1,2,3,4].myEach( (el) => { console.log(el *3); });


Array.prototype.myMap = function(callback) {
  let newArr = [];
  this.myEach(function(el) {
    newArr.push(callback(el));
  });
   console.log(newArr);
};

// Array.prototype.myMap = function(callback) {
//   let newArr = [];
//   newArr.push(this.myEach(callback));
//   console.log(newArr);
// };

[1,2,3,4].myMap( (el) => {
  return el * 3;
});

Array.prototype.myReduce = function(callback, initialValue = 0) {
  let self = this.slice();
  let acc = 0;
  if (initialValue) {
    acc += initialValue;
  }
  else {
    acc += self.shift();
  }

  self.myEach(function(el) {
    acc = callback(acc, el);
  });
  console.log(acc);
};

// without initialValue
[1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
}); // => 6

// with initialValue
[1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
}, 25); // => 31
