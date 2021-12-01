"use strict";

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) =>
  arr.reduce((acc, item) => acc + item, 0) / arr.length;

console.log(~~getAverageValue(allCashbox));
