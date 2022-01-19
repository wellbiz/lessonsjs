"use strict";
const NOD = (x, y) => {

  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    let t = y;
    y = x % y;
    x = t;
  }
  return x;
};

console.log(NOD(9, 3));
