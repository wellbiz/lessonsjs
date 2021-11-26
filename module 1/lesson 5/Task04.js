"use strict";
//Task04.js
function calculate(totalCost, totalGoods, promoCode) {
  if (
    typeof totalCost === "number" &&
    typeof totalGoods === "number" &&
    typeof promoCode === "string"
  ) {
    if (totalGoods > 10) totalCost /= 1.03; //скидос 3%, если товаров в корзине больше 10 шт.
    if (totalCost > 30_000) totalCost -= (totalCost - 30_000) * 0.15; // скидос 15% на дельту, превышающую 30к
    if (promoCode === "METHED") totalCost -= totalCost * 0.1; // скидос по промокоду на всю стоимость товара
    if (promoCode === "G3H2Z1") {
      totalCost -= totalCost > 2000 ? 500 : 0; // скидос, если общая стоимость корзины > 2к
    }
  }
  return Math.round(totalCost); // если нужно учитывать копейки, то Math.round(totalCost * 100) / 100
}

// тeстовый прогон
console.log(`проверка на расчет скидок:`);
console.log(`1) скидка на 10 шт товара: ${calculate(100, 11, "")}`);
console.log(`2) скидка на дельту от 30к: ${calculate(35000, 10, "")}`);
console.log(
  `3) скидка на промокод METHED 10%: ${calculate(100, 10, "METHED")}`
);
console.log(
  `4) скидка на промокод G3H2Z1 500 руб от 2к: ${calculate(2001, 10, "G3H2Z1")}`
);
console.log(
  `5) скидка на все разом и промокод METHED 10%: ${calculate(
    35000,
    11,
    "METHED"
  )}`
);
console.log(
  `6) скидка на все разом и промокод G3H2Z1 500 руб от 2к: ${calculate(
    35000,
    11,
    "G3H2Z1"
  )}`
);
