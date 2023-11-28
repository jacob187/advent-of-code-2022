// 'use strict';
import { readFileSync } from "fs";
const input = readFileSync("input.txt", "utf-8");

const pairs = input
  .split("\n")
  .map((pair) => pair.split(",").map((range) => range.split("-").map(Number)));

const pairFullyOverlap = (pairsRange) => {
  const [elfOneStart, elfOneStop] = pairsRange.at(0);
  const [elfTwoStart, elfTwoStop] = pairsRange.at(1);

  const overlaps =
    (elfOneStart >= elfTwoStart && elfOneStop <= elfTwoStop) ||
    (elfTwoStart >= elfOneStart && elfTwoStop <= elfOneStop);

  // console.log(overlaps);
  return overlaps;
};

// const partOnePairs = pairs.filter(pairFullyOverlap);
// console.log(partOnePairs.length);

const pairsPartiallyOverlap = (pairsRange) => {
  const [elfOneStart, elfOneStop] = pairsRange.at(0);
  const [elfTwoStart, elfTwoStop] = pairsRange.at(1);

  let oneRange = [];
  let twoRange = [];

  for (let i = elfOneStart; i <= elfOneStop; i++) {
    oneRange.push(i);
  }

  for (let i = elfTwoStart; i <= elfTwoStop; i++) {
    twoRange.push(i);
  }

  let overlap = oneRange.some((item) => twoRange.includes(item));
  return overlap;
};

const partTwoPairs = pairs.filter(pairsPartiallyOverlap);
console.log(partTwoPairs.length);
