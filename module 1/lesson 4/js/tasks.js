//task 2
{
  const rain = Math.round(Math.random());
  console.log(rain ? "Пошел дождь. Возьмите зонт!" : "Дождя нет!");
}

//task 3
{
  const pointMathematic = +prompt("Введите кол-во баллов по математике:");
  const pointRussian = +prompt("Введите кол-во баллов русскому языку:");
  const pointInformatic = +prompt("Введите кол-во баллов по информатике:");
  const totalPoints = 265;

  console.log(
    pointMathematic + pointRussian + pointInformatic >= totalPoints
      ? "Поздравляю, Вы поступили на бюджет!"
      : `К сожалению, вы не набрали минимум ${totalPoints} баллов для поступления на бюджет. Подучитесь и попробуйте в следующем году!`
  );
}

//task 4
{
  const money = +prompt("Введите сумму денег для выдачи");
  const message =
    money % 100 === 0
      ? "Подставьте руки к лотку, оттуда выпадут купюры"
      : "В банкомате остались купюры номиналом только 100 руб. Введите сумму кратную 100 руб.";
  console.log(message);
}
