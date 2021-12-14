/* eslint-disable require-jsdoc */
'use strict';

function genNumber(n, m) {
  return +(~~(Math.random() * (m - n)) + n);
}

const numberByComputer = genNumber(1, 100);

function gameBot() {
  let numberByUser = +prompt('Введите число');

  if (numberByUser === 0) {
    numberByUser = null;
    return false;
  } else if (numberByUser > numberByComputer) {
    alert('Меньше!');
  } else if (numberByUser < numberByComputer) {
    alert('Больше');
  } else if (numberByComputer === numberByUser) {
    alert('Верно, Вы угадали загаданное число!');
    return numberByUser;
  } else if (numberByUser) {
    numberByUser = +numberByUser;
  } else {
    alert('Можно вводить только числа');
  }
  return gameBot();
}

gameBot();
