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
  .then((person) => {
    console.log(person);
  })
  .catch((error)=> {
    if(!person.first || !person.last) {
      console.log("First and Last name are required to search.");
    } else {
      console.log("No results found for the given search parameters.");
    }
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
  logResult(person1);
  logResult(person2);
  /*
  Revisit this to test array concatenation through "return"
  on function finder.  But a conventional "return" attempts
  execution before promise is filled, so Promise<pending>.
  Probably we're not supposed to do it with a conventional return
  anyways (see reading).  But conventional returns are very handy
  so there's got to be some way to work with a return.   I think
  the solution in "8-ball" example in reading was, pass in an argument
  into a function "A", inside that function create function "B" that
  returns a Promise.  But since B is inside A, A's argument can be
  accessed and modified.
  */
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
  function cityB(person) {
    finder(person.first, person.last)
      .then((person) => {
        for (const individual of person) {
          console.log (individual.city);
          // "person" is an array of objects
        }
      })
      .catch((error) => {
        if (!person.first || !person.last) {
          console.log("First and Last name are required to search.");
        } else {
          console.log("No results found for the given search parameters.");
        }
      });
  }
  cityB(person1);
  cityB(person2);
  cityB(person3);
}

// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
