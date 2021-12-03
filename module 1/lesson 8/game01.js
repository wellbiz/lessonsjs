"use strict";

function generateNumberForGame(n, m) {
  return +(Math.floor(Math.random() * (m - n)) + n);
}

const numberByComputer = generateNumberForGame(1, 100);

let numberByUser = +prompt(
  "Компьютер загадал число. Ваша задача отгадать его! Введите число, которое по вашему мнению загадал компьютер"
);

if (numberByUser === 0) numberByUser = null;
else if (isNaN(numberByUser)) numberByUser = +prompt("Введите число");

while (1) {
  if (numberByUser == null) break;
  else if (isNaN(numberByUser)) numberByUser = +prompt("Введите число");
  else if (numberByUser < numberByComputer) numberByUser = +prompt("Больше!");
  else if (numberByUser > numberByComputer) numberByUser = +prompt("Меньше!");
  else if (numberByComputer === numberByUser) {
    alert(
      "Угадал, твоим магическим способностям позавидует даже лютый экстрасенс"
    );
    break;
  }
}
