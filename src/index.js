// Do not change the line directly below.
const finder = require("./helpers/finder");

/**
 * logResult()
 * ========================
 * Logs out the entire array of objects returned from the `finder()` function.
 *
 * @param {Object} person - A person's names.
 * @param {Object} person.first - The person's first name.
 * @param {Object} person.last - The person's last name.
 */
function logResult(person) {
  finder(person.first, person.last).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  })
};

/**
 * logTwoResults()
 * ========================
 * Logs out the entire array of objects returned from the `finder()` function for two different people.
 *
 * @param {Object} person1 - A person's names.
 * @param {Object} person1.first - The person's first name.
 * @param {Object} person1.last - The person's last name.
 * @param {Object} person2 - A person's names. In the same format as person1.
 */
function logTwoResults(cardiA, cardiB) {
logResult(cardiA);
logResult(cardiB);
}

/**
 * logThreeResultsCities()
 * ========================
 * Logs out just the cities from all three people given to the function. You may assume that each search result will only return a single person.
 *
 * @param {Object} person1 - A person's names.
 * @param {Object} person1.first - The person's first name.
 * @param {Object} person1.last - The person's last name.
 * @param {Object} person2 - A person's names. In the same format as person1.
 * @param {Object} person3 - A person's names. In the same format as person1.
 */
function logThreeResultsCities(cardiA, cardiB, cardiC) {
  finder(cardiA.first, cardiA.last)
  .then((bop)=> {
    console.log(bop[0].city);
  })
  .catch((error)=> {
  console.log(error);
  })
  finder(cardiB.first, cardiB.last)
  .then((bop)=> {
    console.log(bop[0].city);
  })
  .catch((error)=> {
  console.log(error);
  })
  finder(cardiC.first, cardiC.last)
  .then((bop)=> {
    console.log(bop[0].city);
  })
  .catch((error)=> {
  console.log(error);
  })
}

// finder(person.first, person.last, person.city)
//   logResult(cardiA)
//   logResult(cardiB)
//   logResult(cardiC)
// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
