"use strict";
const showPowTable = (n) => {
  for (let i = 1; i <= n; ++i) {
    console.log(
      i ** 1,
      i ** 2,
      i ** 3,
      i ** 4,
      i ** 5,
      i ** 6,
      i ** 7,
      i ** 8,
      i ** 9,
      i ** 10
    );
  }
};
showPowTable(10);