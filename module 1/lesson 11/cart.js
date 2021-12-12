'use strict';

const cart = {
  items: [], // массив объектов -- товары.
  // Объект товар состоит из полей:
  // наименование, цена, количество.
  count: 0, // количество товаров
  get totalPrice() {
    return this.calculateItemsPrice();
  },

  add(nameGoods, priceGoods, countGoods = 1) {
    const currentGood = {
      name: nameGoods,
      price: priceGoods,
      count: countGoods,
    };

    this.items.push(currentGood);

    this.calculateItemsPrice();
    this.increaseCount();
  },

  // getTotalPrice() {
  //     return this.totalPrice;
  // },

  increaseCount() {
    const {items} = cart;
    let currentCount = 0;
    items.forEach((item) => {
      currentCount += item.count;
    });
    this.count = currentCount;
  },

  calculateItemsPrice() {
    const {items} = cart;
    let currentPrice = 0;
    items.forEach((item) => {
      currentPrice += item.price;
    });
    return currentPrice;
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(`totalPrice = ${this.totalPrice}`);
  },
};

cart.add('Пиво Охота Крепкое, 9%', 74, 1);
cart.add('Горячий Кофе Якобс', 150, 3);
cart.add('Пахлава медовая', 47, 6);
cart.print();
