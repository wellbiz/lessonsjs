"use strict";

(() => {
  // const FIGURES_ENG = ["rock", "scissors", "paper"];
  const FIGURES_RUS = ["камень", "ножницы", "бумага"];

  const prepareLang = (lang) => {
    if (lang === "EN" || lang === "ENG") return "EN";
    else if (lang === "RU" || lang === "RUS" || lang === "underfinded")
      return "RU";
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let pointsPC = 0;
  let pointsUser = 0;
  let pointsNobody = 0;

  const game = () => {
    const figurePC = getRandomIntInclusive(0, 2);

    let figureUser = prompt("Камень, ножницы, бумага? ");
    if (figureUser === null) {
      const exit = confirm("Точно хотите выйти из игры?");
      if (exit) {
        alert(`результат игры:
        компьютер: ${pointsPC} 
        вы: ${pointsUser} 
        ничьих: ${pointsNobody} 
        `);
        return;
      } else {
        return game();
      }
    } else if (figureUser === "") {
      return game();
    } else {
      switch (figureUser.charAt(0).toLowerCase()) {
        case "к":
          figureUser = 0;
          break;
        case "н":
          figureUser = 1;
          break;
        case "б":
          figureUser = 2;
          break;
        default:
          return game();
      }

      function countPoints() {
        if (figurePC === figureUser) {
          ++pointsNobody;
        } else if (
          (figurePC === 0 && figureUser === 1) ||
          (figurePC === 1 && figureUser === 2) ||
          (figurePC === 2 && figureUser === 0)
        ) {
          ++pointsPC;
        } else {
          ++pointsUser;
        }
      }
      countPoints();

      if (figurePC === figureUser) {
        alert(`Компьютер: ${FIGURES_RUS[figurePC]}
                Вы: ${FIGURES_RUS[figureUser]}
                Ничья!`);
        const exit = confirm("Ещё поиграем?");
        if (exit) {
          return game();
        } else {
          alert(`результат игры:
                  компьютер: ${pointsPC} 
                  вы: ${pointsUser} 
                  ничьих: ${pointsNobody} 
                  `);
          return;
        }
      } else if (
        (figurePC === 0 && figureUser === 1) ||
        (figurePC === 1 && figureUser === 2) ||
        (figurePC === 2 && figureUser === 0)
      ) {
        alert(`Компьютер: ${FIGURES_RUS[figurePC]}
                Вы: ${FIGURES_RUS[figureUser]}
                Компьютер выиграл!`);
        const exit = confirm("Ещё поиграем?");
        if (exit) {
          return game();
        } else {
          alert(`результат игры:
                          компьютер: ${pointsPC} 
                          вы: ${pointsUser} 
                          ничьих: ${pointsNobody} 
                          `);
          return;
        }
      } else {
        alert(`Компьютер: ${FIGURES_RUS[figurePC]}
        Вы: ${FIGURES_RUS[figureUser]}
        Вы выиграли!`);
        const exit = confirm("Ещё поиграем?");
        if (exit) {
          return game();
        } else {
          alert(`результат игры:
                  компьютер: ${pointsPC} 
                  вы: ${pointsUser} 
                  ничьих: ${pointsNobody} 
                  `);
          return;
        }
      }
    }
  };
  window.RPS = game;
})();
