const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8");
const caloriesOfEleves = input.split("\n");

//Part 1
// loop through, create new array of sum of each elf, parse int , sort that array, return the first value
let sumElfCalories = [];
let elfSum = 0;
caloriesOfEleves.forEach((i) => {
  if (i == "") {
    sumElfCalories.push(elfSum);
    elfSum = 0;
  } else {
    elfSum += parseInt(i);
  }
});
sumElfCalories.sort((a, b) => b - a);
console.log(sumElfCalories[0]);

//Part 2

console.log(sumElfCalories[0] + sumElfCalories[1] + sumElfCalories[2]);

//TODO: solve using built in array functions (i.e. sort, reduce)
