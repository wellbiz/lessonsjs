/* eslint-disable prefer-const */
"use strict";
/* eslint-disable require-jsdoc */
(() => {
  let ballsPC = 5;
  let ballsUser = 5;

  let step = 1;

  const genRnd = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getUserNumber = (ballsUser) => {
    const numberByUser = prompt(`Введите кол-во шариков от 1 до ${ballsUser}`);
    if (numberByUser === null) {
      return false;
    } else {
      if (isNaN(numberByUser) || numberByUser === "") {
        alert("Вы не ввели число, введите ещё раз!");
        return getUserNumber(ballsUser);
      }
      if (Number(numberByUser) > ballsUser) {
        alert("Вы ввели больше шариков, чем у вас есть. Попробуйте еще раз");
        return getUserNumber(ballsUser);
      }
      return Number(numberByUser);
    }
  };

  const game = () => {


    // бот угадывает у юзера
    if (step) {
      console.log(`Ход юзера.`);
      console.log(`бот попытался отгадать`);

      const reminderOfDivide = genRnd(0, 1);
      const numUser = getUserNumber(ballsUser);
      
      if (numUser === false) return;
      const isBotGuessed =
        (!(numUser % 2) && !reminderOfDivide) ||
        (numUser % 2 && reminderOfDivide);

      // eslint-disable-next-line max-len
      console.log(
        // eslint-disable-next-line max-len
        `Юзер загадал ${numUser}, бот - ${
          isBotGuessed ? "" : "не "
        }угадал`
      );

      if (isBotGuessed) {
        ballsPC += numUser;
        ballsUser -= numUser;
      } else {
        ballsPC -= numUser;
        ballsUser += numUser;
      }

      --step;
      if (ballsPC < 1 || ballsUser < 1) {

        alert(`Вы ${ballsPC < 1 ? "вы" : "про"}играли`);
        ballsPC = 5;
        ballsUser = 5;
        step = 1;
        const toGame = confirm("Хотите сыграть еще раз?");
        if (toGame) {
          return game();
        } else {
          return ;
        }
      }
      console.log(`кол-во шариков у юзера: ${ballsUser}`);
      console.log(`кол-во шариков у бота: ${ballsPC}`);
    } else {
      const numbot = genRnd(1, ballsPC);
      console.log(`Ход бота. Бот загадал...`);
      const choise = confirm("Число нечётное?");
      const isUserGuessed =
        (!(numbot % 2) && !choise) || (numbot % 2 && choise);

      // eslint-disable-next-line max-len
      console.log(`Юзер ${isUserGuessed ? "" : "не"}угадал`);

      if (isUserGuessed) {
        ballsPC -= numbot;
        ballsUser += numbot;
      } else {
        ballsPC += numbot;
        ballsUser -= numbot;
      }
      ++step;
      if (ballsPC < 1 || ballsUser < 1) {
        alert(`Вы ${ballsPC < 1 ? "вы" : "про"}играли`);
        ballsPC = 5;
        ballsUser = 5;
        step = 1;
        const toGame = confirm("Хотите сыграть еще раз?");
        if (toGame) {
          return game();
        } else {
          return ;
        }
      }
      console.log(`кол-во шариков у юзера: ${ballsUser}`);
      console.log(`кол-во шариков у бота: ${ballsPC}`);
    }
    game();
  };
  window.RPS = game;
})();
