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
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    })
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
  logResult(person1);
  logResult(person2);
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
  /** I assigned the arguments in the array called people,
  * so I can loop through the array and remove the repetitive codes. */
  const people = [person1, person2, person3];

  for (let person of people) {
    finder(person.first, person.last)
      .then((result) => {
        for (let each of result) {
          console.log(each.city);
        }
      })
      .catch(error => {
        console.log(error);
    })
  }
  // finder(person1.first, person1.last)
  //   .then((person1) => {
  //     console.log(person1.city);
  //   })
  //   .catch(error => {
  //     console.log(error);
  // })

  // finder(person2.first, person2.last)
  //   .then((person2) => {
  //     console.log(person2.city);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })

  // finder(person3.first, person3.last)
  //   .then((person3) => {
  //     console.log(person3.city);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
}

// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
