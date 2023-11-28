import { readFileSync } from "fs";
const input = readFileSync("./input.txt", "utf-8");
const game = input.split("\n");

/**
 * Rock -- 1
 * Paper -- 2
 * Scissors -- 3
 * Loose -- 0
 * Draw -- 3
 * Win -- 6
 */
const outcomes = {
  X: { A: 4, B: 1, C: 7 },
  Y: { A: 8, B: 5, C: 2 },
  Z: { A: 3, B: 9, C: 6 },
};

const roundOutcome = ([elf, me]) => {
  return outcomes[me][elf];
};

const score = game
  .map((round) => round.split(" "))
  .map((round) => roundOutcome(round))
  .reduce((gameScore, roundScore) => gameScore + roundScore);

console.log(score);

/**
 * X -- loose
 * Y -- draw
 * Z -- win
 */

const outcomesFromResult = {
  A: { X: 3, Y: 4, Z: 8 },
  B: { X: 1, Y: 5, Z: 9 },
  C: { X: 2, Y: 6, Z: 7 },
};

const roundOutcomeProblemTwo = ([elf, me]) => {
  return outcomesFromResult[elf][me];
};

const scoreAdjusted = game
  .map((round) => round.split(" "))
  .map((round) => roundOutcomeProblemTwo(round))
  .reduce((gameScore, roundScore) => gameScore + roundScore);

console.log(scoreAdjusted);
