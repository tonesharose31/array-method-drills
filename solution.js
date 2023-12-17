const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  return nums.every(num => num >= 2);
};
console.log(isEveryNumGreaterThan2());

const isEveryWordShorterThan7 = () => {
  return words.every(word => word.length < 7);
};
console.log(isEveryWordShorterThan7());

// Filter

const arrayLessThan5 = () => {
  return nums.filter(value => value < 5);
};
console.log(arrayLessThan5());

const arrayOddLengthWords = () => {
  return words.filter(word => word.length % 2 !== 0);
};
console.log(arrayOddLengthWords());

// Find

const firstValDivisibleBy4 = () => {
  return nums.find(num => num % 4 === 0);
};
console.log(firstValDivisibleBy4());


const firstWordLongerThan4Char = () => {
  //
};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
  //
};

const firstWordIndexLessThan2Char = () => {
  //
};

// For Each

const logValuesTimes3 = () => {
  //
};

const logWordsWithExclamation = () => {
  //
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  //
};

const arrayWordsUpcased = () => {
  //
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  //
};

const doSomeWordsHaveAnA = () => {
  //
};

module.exports = {
  isEveryNumGreaterThan2,
  isEveryWordShorterThan7,
  arrayLessThan5,
  arrayOddLengthWords,
  firstValDivisibleBy4,
  firstWordLongerThan4Char,
  firstNumIndexDivisibleBy3,
  firstWordIndexLessThan2Char,
  logValuesTimes3,
  logWordsWithExclamation,
  arrayValuesSquaredTimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
};
