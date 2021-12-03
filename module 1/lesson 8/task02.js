"use strict";

const generateArrayWithArg = (count, n, m) => {
  const newArr = [];

  for (let i = 0; i < count; i++) {
    newArr.push(Math.floor(Math.random() * (m - n)) + n);
  }
  return newArr;
};

console.log("generateArrayWithArg");
console.log(`1 n = 5, m = -5: `, generateArrayWithArg(5, 5, -5));
console.log(`2 n = -5, m = -5: `, generateArrayWithArg(5, -5, -5));
console.log(`3 n = -5, m = 5: `, generateArrayWithArg(5, -5, 5));
