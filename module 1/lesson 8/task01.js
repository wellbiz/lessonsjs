"use strict";

const generateArray = (count) => {
  const newArr = [];

  for (let i = 0; i < count; i++) {
    newArr.push(Math.round(Math.random() * 10));//* 10, округляем,чтобы получились целые числа
  }

  return newArr;
};

console.log(generateArray(5));
