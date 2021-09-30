const finder = require("./helpers/finder");

const logResult = ({ first, last }) => {
  finder(first, last)
    .then((val) => console.log(val))
    .catch((err) => console.log(err));
};

const logTwoResults = (...obj) => {
  obj.forEach(({ first, last }) => {
    finder(first, last)
      .then((val) => console.log(val))
      .catch((err) => console.log(err));
  });
};

const logThreeResultsCities = (...obj) => {
  obj.forEach(({ first, last }) => {
    finder(first, last)
      .then(([{ city }]) => console.log(city))
      .catch((err) => console.log(err));
  });
};

// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
