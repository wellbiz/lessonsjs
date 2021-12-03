"use strict";
const generateArrayWithArg = (count, n, m, str) => {
  const newArr = [];

  if (str != undefined && typeof str === "string") {
    switch (str) {
      case "even": {
        for (let i = 0; i < count; i++) {
          let item = Math.round(Math.random() * (m - n)) + n;

          while (item % 2 != 0) {
            item = Math.round(Math.random() * (m - n)) + n;
          }

          newArr.push(item);
        }

        break;
      }

      case "odd": {
        for (let i = 0; i < count; i++) {
          let item = Math.round(Math.random() * (m - n)) + n;

          while (item % 2 === 0) {
            item = Math.round(Math.random() * (m - n)) + n;
          }

          newArr.push(item);
        }

        break;
      }
    }
  } else {
    for (let i = 0; i < count; i++) {
      newArr.push(Math.round(Math.random() * (m - n)) + n);
    }
  }

  return newArr;
};
console.log("generateArrayWithArg2");
console.log(`1 even: `, generateArrayWithArg(5, 1, 10, "even"));
console.log(`2 odd: `, generateArrayWithArg(5, 1, 10, "odd"));
console.log(`3 without str: `, generateArrayWithArg(5, 1, 10));
