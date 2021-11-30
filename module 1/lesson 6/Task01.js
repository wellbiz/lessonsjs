"use strict";

const showPowTable = (n) => {

  for (let i = 1; i <= n; ++i) {

    let arr = [];

    for (let j = 1; j <= n; ++j) {

      arr.push(i ** j);

    }
    
    console.log(arr.join(" "));
  }
};

showPowTable(10);