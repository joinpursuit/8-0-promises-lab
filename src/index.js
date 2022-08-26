// Do not change the line directly below.
const finder = require('./helpers/finder');

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
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
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
  const twoPersons = [person1, person2];

  twoPersons.forEach((p) => {
    logResult(p);
  });
  // finder(person1.first, person1.last)
  //   .then((response1) => {
  //     console.log(response1);
  //   })
  //   .catch((error1) => {
  //     console.log(error1);
  //   });

  // finder(person2.first, person2.last)
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
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
  const threePersons = [person1, person2, person3];

  threePersons.forEach((p) => {
    finder(p.first, p.last)
      .then((response) => {
        console.log(response[0].city);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // finder(person2.first, person2.last)
  //   .then((response2) => {
  //     response2.forEach((p2) => {
  //       console.log(p2.city);
  //     });
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // finder(person3.first, person3.last)
  //   .then((response3) => {
  //     response3.forEach((p3) => {
  //       console.log(p3.city);
  //     });
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
}

// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
