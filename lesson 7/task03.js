"use strict";

const names = [
  "Noah",
  "Liam",
  "Mason",
  "Jacob",
  "Robot",
  "William",
  "Ethan",
  "Michael",
  "Alexander",
];

const addPrefix = (arr, str) => arr.map((item) => str + " " + item);

console.log(addPrefix(names, "Mr."));
