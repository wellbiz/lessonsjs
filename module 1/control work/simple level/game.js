'use strict';
/* eslint-disable require-jsdoc */
(() => {
  let ballsPC = 5;
  let ballsUser = 5;

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = () => {
    let number = 0;
    number = prompt(`Введите количество шариков от 1 до ${ballsUser}`);
    if (number === null) return;
    else if (isNaN(number) || number === '') {
      alert('Вы не ввели число, попробуйте еще раз');
      return game();
    } else if (+number > ballsUser) {
      alert('Вы ввели больше шариков, чем у вас есть. Попробуйте еще раз');
      return game();
    } else {
      const stepBot = getRandomIntInclusive(0, 1);

      if (number % 2 === stepBot) {
        ballsPC += +number;
        ballsUser -= +number;
      } else {
        ballsPC -= +number;
        ballsUser += +number;
      }

      if (ballsPC < 1 || ballsUser < 1) {
        const isWinUser = ballsPC < 1 ? 'выиграли' : 'проиграли';
        alert(`Вы ${isWinUser}`);
        const toGame = confirm('Хотите сыграть еще раз?');
        if (toGame) {
          ballsPC = 5;
          ballsUser = 5;
          return game();
        } else {
          return;
        }
      } else {
        alert(`Вы загадали: ${+number} (${
          +number % 2 === 0 ? 'четное' : 'нечетное'
        })
        Бот: ${stepBot === 0 ? 'четное' : 'нечетное'}
        Шарики бота: ${ballsPC}
        Шарики ваши: ${ballsUser}
  `);
        game();
      }
    }
  };
  window.RPS = game;
})();
