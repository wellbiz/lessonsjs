"use strict";

//hard 1

const total = +prompt("Введите ваш доход");
let tax = 0;

if (total <= 15_000) tax = total * 0.13;
else if (total > 15_000 && total <= 50_000) tax = total * 0.2;
else tax = total * 0.3;

console.log(`Ваш доход: ${total}, налог: ${tax}`);
