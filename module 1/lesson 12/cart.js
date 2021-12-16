'use strict';

const cart = {
  items: [], // массив объектов -- товары.
  // Объект товар состоит из полей:
  // наименование, цена, количество.
  count: 0, // количество товаров
  set setDiscount(promocode) {
    if (promocode === 'METHED') this.discount = 15;
    else if (promocode === 'NEWYEAR') this.discount = 21;
    else this.discount = 0;
  },
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

  increaseCount() {
    const {items} = this;
    let currentCount = 0;
    items.forEach((item) => {
      currentCount += item.count;
    });
    this.count = currentCount;
  },

  calculateItemsPrice() {
    const {items} = this;
    let currentPrice = 0;
    items.forEach((item) => {
      currentPrice += item.price;
    });
    // eslint-disable-next-line no-prototype-builtins
    if (!this.hasOwnProperty('discount')) this.discount = 0;
    // eslint-disable-next-line max-len
    const priceWithDiscount = currentPrice - (currentPrice * this.discount / 100);
    return priceWithDiscount;
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
cart.setDiscount = 'METHED';
cart.add('Пиво Охота Крепкое, 9%', 74, 1);
cart.add('Горячий Кофе Якобс', 150, 3);
cart.add('Пахлава медовая', 47, 6);
cart.print();
