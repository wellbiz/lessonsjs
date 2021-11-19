"use strict";

const nameGoods = "Охота Крепкое, 9%, 0.5";
const countGoods = "5 банок";
const typeGoods = "Напитки слабоалкогольные, пенные, нефильтрованные";
const priceGoods = "52.99 руб.";

console.log(`
Наименование товара: ${nameGoods};\n
Количество товара: ${countGoods};\n
Категория товара: ${typeGoods};\n
Цена товара: ${priceGoods};\n
Общая стоимость товара: ${parseInt(countGoods) * parseFloat(priceGoods)} руб.
`);
