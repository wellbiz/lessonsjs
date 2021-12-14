'use strict';


// eslint-disable-next-line require-jsdoc
function generateNumber(n, m) {
  return +(~~(Math.random() * (m - n)) + n);
}
// eslint-disable-next-line require-jsdoc
function createArr(arr) {
  const item = generateNumber(0, 10);
  arr.push(item);

  if (arr.length < 50) {
    createArr(arr);
  }
  return arr;
}
const arr = [];
const newArr = createArr(arr);
console.log(newArr);
