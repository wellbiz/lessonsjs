"use strict";
const renameTitles = () => {
    document.querySelector(".item_two .item__title").textContent =
    "Область видимости и замыкание";
  document.querySelector(".item_three .item__title").textContent =
    "This и прототипы объектов";
  document.querySelector(".item_five .item__title").textContent =
    "Асинхронная обработка и оптимизация";
  document.querySelector(".item_six .item__title").textContent =
    "ES6 и не только";
}

const swapCards = () => {
    const cards = document.querySelectorAll(".item");
    cards[3].after(cards[0]);
}

const swapWrongItem = () => {
    const wrongItemSecondCard = document.querySelector(
        ".item_two .props__item_four"
      );
      const itemsFourthCard = document.querySelectorAll(
        ".item_four .props__item_four"
      );
      itemsFourthCard[2].after(wrongItemSecondCard);
}

const swapWrongItems = () => {
    const lastItemSecondCard = document.querySelector(
        ".item_two .props__item_two:last-child"
      );
      const wrongItemsSixthCard = document.querySelectorAll(
        ".item_six .props__item_two"
      );
      
      for (let wrongItem of wrongItemsSixthCard) {
        lastItemSecondCard.append(wrongItem);
      }
      
}

document.querySelector(".ads").remove();
swapCards();
renameTitles();
swapWrongItem();
swapWrongItems();



const listThirdCard = document.querySelector(".item_three .props__list");
const listFifthCard = document.querySelector(".item_five .props__list");

listFifthCard.before(listThirdCard);

document.querySelector(".item_three .item__title").after(listFifthCard);

