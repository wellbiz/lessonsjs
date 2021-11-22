"use strict";
{
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
}

{
  const nameGoods = "доширак со вкусом вяленого моржа";
  const countGoods = 3;
  const typeGoods = "быстрорастворимая еда";
  const priceGoods = 15.92;

  console.log(`
    Наименование товара: ${nameGoods};
    Количество товара: ${countGoods};
    Категория товара: ${typeGoods};
    Цена товара: ${priceGoods};
    Общая стоимость товара: ${countGoods * priceGoods} руб.
    `);
}
