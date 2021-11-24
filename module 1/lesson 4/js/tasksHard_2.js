"use strict";
//hard 2

const total = +prompt("Введите ваш доход");
let tax = 0;

if (total > 50_000) {
  tax = (total - 50_000) * 0.3;
  tax += 35_000 * 0.2;
  tax += 15_000 * 0.13;
} else if (total > 15_000 && total <= 50_000) {
  tax = (total - 15_000) * 0.2 + 15_000 * 0.13;
} else tax = total * 0.13;

console.log(`Ваш доход: ${total}, налог: ${tax}`);
