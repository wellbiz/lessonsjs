'use strict';

const rectangle = {
  set setHeight(value) {
    this.height = value > 0 ? value : 5;
  },
  set setWidth(value) {
    this.width = value > 0 ? value : 5;
  },
  get perimeter() {
    return `${this.width * 2 + this.height * 2}см`;
  },
  get square() {
    return `${this.width * this.height}см`;
  },
};

rectangle.setWidth = 16;
rectangle.setHeight = 18;

console.log(`ширина: ${rectangle.width} см,
 высота ${rectangle.height} см`);

console.log(`периметр: ${rectangle.perimeter}`);
console.log(`площадь: ${rectangle.square}`);

rectangle.setWidth = 0;
rectangle.setHeight = 0;

console.log(`Проверим, что работают значения по-умолчанию:
ширина: ${rectangle.width} см,
высота ${rectangle.height} см`);

console.log(`периметр: ${rectangle.perimeter}`);
console.log(`площадь: ${rectangle.square}`);
