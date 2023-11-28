import { readFileSync } from "fs";
const input = readFileSync("./input.txt", "utf-8");
const caloriesOfEleves = input.split("\n\n");

//Part One Solution One
const solutionOneProblemOne = (calList) => {
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

  return sumElfCalories;
};

//Part One Solution Two
const sumElfCalories = caloriesOfEleves.map((elfTotalCalories) => {
  return elfTotalCalories
    .split("\n")
    .map(Number)
    .reduce((bag, calories) => bag + calories);
});

sumElfCalories.sort((a, b) => b - a);

console.log(sumElfCalories[0]);

//Part 2
console.log(sumElfCalories[0] + sumElfCalories[1] + sumElfCalories[2]);
