"use strict";

const allStudents = [
  "Иванов",
  "Петров",
  "Сидоров",
  "Кузнецов",
  "Смирнов",
  "Попов",
  "Соколов",
];
const failedStudents = ["Сидоров", "Смирнов", "Попов"];

const filter = (allStudents, failedStudents) =>
  allStudents.filter((item) => !failedStudents.includes(item));
// берется элемент из первого массива, ищется во втором, и  если не нашел, то сохраняет
console.log(filter(allStudents, failedStudents));
