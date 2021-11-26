"use strict";
//Task01.js
function convertEur2rub(eur) {
  const eur2usd = 1.2;
  const usd2rub = 73;
  return isNaN(eur) ? false : eur * eur2usd * usd2rub;
}
console.log(
  `Расчет курса евро к рублям, тест 10 евро (876): `,
  convertEur2rub(10)
);
