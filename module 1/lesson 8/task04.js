"use strict";
const isLeapYear = (year) => new Date(year, 1, 29).getMonth() === 1;

const getLeapYear = (startYears, finishYears) => {
  const leapYears = [];

  if (finishYears < startYears) {
    for (let i = finishYears; i <= startYears; ++i) {
      if (isLeapYear(i)) leapYears.push(i);
    }
  } else if (startYears < finishYears) {
    for (let i = startYears; i <= finishYears; ++i) {
      if (isLeapYear(i)) leapYears.push(i);
    }
  }
  return leapYears;
};
console.log("getLeapYear: start = 1900, finish = 2021");
console.log(getLeapYear(1900, 2021));
console.log("getLeapYear: start = -10, finish = 40");
console.log(getLeapYear(-10, 40));
