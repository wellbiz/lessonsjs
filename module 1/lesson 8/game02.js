'use strict';

/*
надо запросить у юзера 2 числа
сгенерировать число в пределах этого диапазона
бот запоминает каждое число и записывает в массив
бот дает 30% попыток от общего числа попыток
если бот находит в массиве число, введенное ранее юзером, выводит алерт
при этом попытка не считается
в случае диапазона 50+100, дается 15 попыток
если попытки закончились, алерт и выход из игры

*/
const generateNumber = (n, m) => ~~(Math.random() * (m - n)) + n;
const calculateTrys = (n, m) => {
    if (n >= 50 && m <= 100) return 15;
    else {
        const trys = m > n ? m - n : n - m;
        return Math.round(trys * 0.3); // 30% либо 15 шт
    }
};

const getNumberFromUser = (str) => {
    let number = +prompt(str);
    if (isNaN(number)) number = +prompt('Упс, ошибка. Наверное, ввел не число. Даю еще одну попытку:');
    return number;
};

const firstNumber = getNumberFromUser('Бот загадает число в пределах диапазона, заданного тобой. Тебе предстоит угадать. Введи первое число диапазона:');
if (firstNumber) {
    const secondNumber = getNumberFromUser('Теперь вводи второе число:');
    if (secondNumber) {
        let numberByUser = getNumberFromUser('Бот уже загадал число. Введи число, которое, по твоему мнению, загадал бот');
        if (numberByUser) {
            const numberByBot = generateNumber(firstNumber, secondNumber);
            let countAttempts = calculateTrys(firstNumber, secondNumber);

            console.log(`
            first number = ${firstNumber}
            second number = ${secondNumber}
            number by user = ${numberByUser}
            number by Bot = ${numberByBot}
            count Attemps = ${countAttempts}
            `);

            let enteredNumbersByUser = [numberByUser];

            while (countAttempts) {
                if (!numberByUser) break;
                //если юзер нажал отмену, выходим из цикла.
                else {
                    // if (numberByBot != numberByUser) {
                    //     alert(`это число вы уже вводили, попытка не засчитана, у вас по-прежнему осталось ${countAttempts} попыток`);
                    //     numberByUser = getNumberFromUser('Вводи другое число:)');
                    // } else
                    if (enteredNumbersByUser.includes(numberByUser)) {
                        numberByUser = getNumberFromUser(`Это число вы вводили ранее, попытка не засчитывается. Введите другое число`);
                        !enteredNumbersByUser.includes(numberByUser) ? enteredNumbersByUser.push(numberByUser) : false;
                    } else if (numberByBot < numberByUser) {
                        numberByUser = getNumberFromUser(`Меньше! осталось ${countAttempts} попыток`);
                        !enteredNumbersByUser.includes(numberByUser) ? enteredNumbersByUser.push(numberByUser) : false;
                        countAttempts--;
                    } else if (numberByBot > numberByUser) {
                        numberByUser = getNumberFromUser(`Больше! осталось ${countAttempts} попыток`);
                       ! enteredNumbersByUser.includes(numberByUser) ? enteredNumbersByUser.push(numberByUser) : false;
                        countAttempts--;
                    } else if (numberByBot === numberByUser) {
                        alert('Угадал, твоим магическим способностям позавидует даже лютый экстрасенс');
                        break;
                    }
                    console.log(enteredNumbersByUser);
                }
            }
            if (!countAttempts) alert('Увы, вы исчерпали все попытки. Game Over');
        }
    }
}
