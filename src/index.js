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
  finder(person.first, person.last)
    .then((res) => {
      console.log(res);
    })

    .catch((err) => {
      console.log(err);
    });
}

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
function logTwoResults(person1, person2) {
  //takes in person1 + person 2 as parama
  finder(person1.first, person1.last)
    .then((res) => {
      console.log(res);
    })
    //using the callback as an argument for the first param(-person1), if promise is sucessful the response should be logged to console
    .catch((err) => {
      console.log(err);
    });
  // if the repsonse for person 1 is unsuccessful, then the error will be logged to consosle
  finder(person2.first, person2.last)
    .then((res) => {
      console.log(res);
    })
    //using the callback as an argument for the first param(-person2), if promise is sucessful the response should be logged to console

    .catch((err) => {
      console.log(err);
    });
  // if the repsonse for person 2 is unsuccessful, then the error will be logged to consosle
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
function logThreeResultsCities(person1, person2, person3) {
  finder(person1.first, person1.last)
    .then((res) => {
      console.log(res[0].city);
    })

    .catch((err) => {
      console.log(err);
    });

  finder(person2.first, person2.last)
    .then((res) => {
      console.log(res[0].city);
    })

    .catch((err) => {
      console.log(err);
    });

  finder(person3.first, person3.last)
    .then((res) => {
      console.log(res[0].city);
    })

    .catch((err) => {
      console.log(err);
    });
}
// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
