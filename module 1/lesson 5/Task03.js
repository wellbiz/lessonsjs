"use strict";
//Task03.js
function toReverseString(str) {
  if (typeof str == "string") {
    return str.split("").reverse().join(""); //разбиваем строку, "переворачиваем" массив и заново объединяем
  }
  return false;
}
console.log(
  `тестовый прогон функции toReverseString("Привет мир"): `,
  toReverseString("Привет мир")
);
console.log(
  `тестовый прогон функции toReverseString("Hello World"): `,
  toReverseString("Hello World")
);
