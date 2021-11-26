"use strict";
//Task02.js
function toUpperFirstLetter(str) {
  if (typeof str === "string" && str.length > 0) {
    str = str.toLowerCase();
    return str[0].toUpperCase() + str.slice(1);
  }
  return false;
}
console.log(
  `тестовый прогон функции toUpperFirstLetter("ПрИвеТ МИр"): `,
  toUpperFirstLetter("ПрИвеТ МИр")
);
console.log(
  `тестовый прогон функции toUpperFirstLetter("hEllO wORlD"): `,
  toUpperFirstLetter("hEllO wORlD")
);
