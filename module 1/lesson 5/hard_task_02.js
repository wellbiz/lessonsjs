"use strict";
const max = (x, y) => {
  return (x + y - Math.abs(x - y)) / 2;
};

console.log(max(5, 100)); //100
console.log(max(46, 13)); //46
