"use strict";

const allСashbox = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370],
];
const getAveragePriceGoods = (GoodsAndMoney) => {
  let AvgCostItems = [];
  for (let i = 0; i < GoodsAndMoney.length; ++i) {
    AvgCostItems.push(GoodsAndMoney[i][1] / GoodsAndMoney[i][0]);
  }
  return (
    AvgCostItems.reduce((acc, item) => acc + item, 0) / AvgCostItems.length
  );
};

console.log(~~getAveragePriceGoods(allСashbox));
