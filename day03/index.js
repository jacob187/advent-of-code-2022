const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8');
const rucksacks = input.split('\n');

//Part One Solution
const sameItems = ([one, two]) =>
  one.split('').find((item) => two.includes(item));

const numbericalValue = (item) => {
  if (item.charCodeAt(0) < 97) {
    // Is an uppercase letter
    return item.charCodeAt(0) - 38;
  } else {
    return item.charCodeAt(0) - 96;
  }
};

const sumCommonItems = rucksacks
  .map((rucksack) => {
    const lenEachCompartment = rucksack.length / 2;
    const compartmentOne = rucksack.substring(0, lenEachCompartment);
    const compartmentTwo = rucksack.substring(
      lenEachCompartment,
      rucksack.length
    );
    const compartmentValues = [compartmentOne, compartmentTwo];
    return compartmentValues;
  })
  .map((compartments) => sameItems(compartments))
  .map((commonItem) => numbericalValue(commonItem))
  .reduce((total, item) => total + item);

console.log(sumCommonItems);

//Part Two Solution
const groupBadge = ([one, two, three]) => {
  return one.split('').find((item) => {
    return two.includes(item) && three.includes(item);
  });
};

const sumGroupBadges = rucksacks
  .reduce((groups, rucksack, i) => {
    if (i % 3 === 0) {
      groups.push(rucksacks.slice(i, i + 3));
    }
    return groups;
  }, [])
  .map((group) => groupBadge(group))
  .map((groupBadge) => numbericalValue(groupBadge))
  .reduce((total, groupBadge) => total + groupBadge);

console.log(sumGroupBadges);
