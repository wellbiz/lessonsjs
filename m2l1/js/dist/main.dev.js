"use strict";

var renameTitles = function renameTitles() {
  document.querySelector(".item_two .item__title").textContent = "Область видимости и замыкание";
  document.querySelector(".item_three .item__title").textContent = "This и прототипы объектов";
  document.querySelector(".item_five .item__title").textContent = "Асинхронная обработка и оптимизация";
  document.querySelector(".item_six .item__title").textContent = "ES6 и не только";
};

var swapCards = function swapCards() {
  var cards = document.querySelectorAll(".item");
  cards[3].after(cards[0]);
};

var swapWrongItem = function swapWrongItem() {
  var wrongItemSecondCard = document.querySelector(".item_two .props__item_four");
  var itemsFourthCard = document.querySelectorAll(".item_four .props__item_four");
  itemsFourthCard[2].after(wrongItemSecondCard);
};

var swapWrongItems = function swapWrongItems() {
  var lastItemSecondCard = document.querySelector(".item_two .props__item_two:last-child");
  var wrongItemsSixthCard = document.querySelectorAll(".item_six .props__item_two");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = wrongItemsSixthCard[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var wrongItem = _step.value;
      lastItemSecondCard.after(wrongItem);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

document.querySelector(".ads").remove();
swapCards();
renameTitles();
swapWrongItem();
swapWrongItems();
var listThirdCard = document.querySelector(".item_three .props__list");
var listFifthCard = document.querySelector(".item_five .props__list");
listFifthCard.before(listThirdCard);
document.querySelector(".item_three .item__title").after(listFifthCard);