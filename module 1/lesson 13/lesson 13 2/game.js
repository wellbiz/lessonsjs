'use strict';

(() => {
    const FIGURES_ENG = ['rock', 'scissors', 'paper'];
    const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

    const prepareLang = (lang) => {
        if (lang === 'EN' || lang === 'ENG') return 'EN';
        else if (lang === 'RU' || lang === 'RUS' || lang === undefined)
            return 'RU';
    };

    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    let pointsPC = 0;
    let pointsUser = 0;
    let pointsNobody = 0;

    const game = (language) => {
        const lang = prepareLang(language);

        const figurePC = getRandomIntInclusive(0, 2);

        let figureUser =
            lang === 'RU'
                ? prompt('Камень, ножницы, бумага? ')
                : prompt('Rock, scissors, paper? ');
        if (figureUser === null) {
            const exit =
                lang === 'RU'
                    ? confirm('Точно хотите выйти из игры?')
                    : confirm('You ready living from our game?');
            if (exit) {
                lang === 'RU'
                    ? alert(`результат игры:
        компьютер: ${pointsPC} 
        вы: ${pointsUser} 
        ничьих: ${pointsNobody} 
        `)
                    : alert(`Result of the game:
        computer: ${pointsPC} 
        you: ${pointsUser} 
        nobody: ${pointsNobody} 
        `);
                return;
            } else {
                return lang === 'RU' ? game('RU') : game('EN');
            }
        } else if (figureUser === '') {
            return lang === 'RU' ? game('RU') : game('EN');
        } else {
            if (lang === 'RU') {
                switch (figureUser.charAt(0).toLowerCase()) {
                    case 'к':
                        figureUser = 0;
                        break;
                    case 'н':
                        figureUser = 1;
                        break;
                    case 'б':
                        figureUser = 2;
                        break;
                    default:
                        return lang === 'RU' ? game('RU') : game('EN');
                }
            } else {
                if (lang === 'EN') {
                    switch (figureUser.charAt(0).toLowerCase()) {
                        case 'r':
                            figureUser = 0;
                            break;
                        case 's':
                            figureUser = 1;
                            break;
                        case 'p':
                            figureUser = 2;
                            break;
                        default:
                            return lang === 'RU' ? game('RU') : game('EN');
                    }
                }
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
                lang === 'RU'
                    ? alert(`Компьютер: ${FIGURES_RUS[figurePC]}
        Вы: ${FIGURES_RUS[figureUser]}
        Ничья!`)
                    : alert(`PC: ${FIGURES_ENG[figurePC]}
        You: ${FIGURES_ENG[figureUser]}
        Draw!`);

                const exit =
                    lang === 'RU'
                        ? confirm('Ещё поиграем?')
                        : confirm('continue the game?');
                if (exit) {
                    return lang === 'RU' ? game('RU') : game('EN');
                } else {
                    lang === 'RU'
                        ? alert(`результат игры:
                  компьютер: ${pointsPC} 
                  вы: ${pointsUser} 
                  ничьих: ${pointsNobody} 
                  `)
                        : alert(`Result:
                  PC: ${pointsPC} 
                  you: ${pointsUser} 
                  draw: ${pointsNobody} 
                  `);
                    return;
                }
            } else if (
                (figurePC === 0 && figureUser === 1) ||
                (figurePC === 1 && figureUser === 2) ||
                (figurePC === 2 && figureUser === 0)
            ) {
                lang === 'RU'
                    ? alert(`Компьютер: ${FIGURES_RUS[figurePC]}
        Вы: ${FIGURES_RUS[figureUser]}
        Компьютер выиграл!`)
                    : alert(`PC: ${FIGURES_ENG[figurePC]}
        You: ${FIGURES_ENG[figureUser]}
        PC win!`);
                const exit =
                    lang === 'RU'
                        ? confirm('Ещё поиграем?')
                        : confirm('continue the game?');
                if (exit) {
                    return lang === 'RU' ? game('RU') : game('EN');
                } else {
                    lang === 'RU'
                        ? alert(`результат игры:
                  компьютер: ${pointsPC} 
                  вы: ${pointsUser} 
                  ничьих: ${pointsNobody} 
                  `)
                        : alert(`Result:
                  PC: ${pointsPC} 
                  you: ${pointsUser} 
                  draw: ${pointsNobody} 
                  `);
                    return;
                }
            } else {
                lang === 'RU'
                    ? alert(`Компьютер: ${FIGURES_RUS[figurePC]}
      Вы: ${FIGURES_RUS[figureUser]}
      Компьютер выиграл!`)
                    : alert(`PC: ${FIGURES_ENG[figurePC]}
      You: ${FIGURES_ENG[figureUser]}
      You win!`);
                const exit =
                    lang === 'RU'
                        ? confirm('Ещё поиграем?')
                        : confirm('continue the game?');
                if (exit) {
                    return lang === 'RU' ? game('RU') : game('EN');
                } else {
                    lang === 'RU'
                        ? alert(`результат игры:
              компьютер: ${pointsPC} 
              вы: ${pointsUser} 
              ничьих: ${pointsNobody} 
              `)
                        : alert(`Result:
              PC: ${pointsPC} 
              you: ${pointsUser} 
              draw: ${pointsNobody} 
              `);
                    return;
                }
            }
        }
    };
    window.RPS = game;
})();
