const { nums, words } = require("./data/data.js");

const findIndex = () => {
  return nums.find((num, index) => {
    if (num % 3 === 0) {
      return console.log(`${num}: ${index}`);
    }
  });
};
findIndex();
