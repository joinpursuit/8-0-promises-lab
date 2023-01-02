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

// main param is person and returns that object
function logResult(person) {
  // finder function uses first and last names to find the object that matches
  finder(person.first, person.last)
  // if they match then log the result
  .then((result) => {
    console.log(result)
  })
  // if they dont match catch the err and log it
  .catch((err) => {
    console.log(err)
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

// takes two parameters and returns an array of 2 objects
function logTwoResults(person1, person2) {
  // use finder to find person 1
  finder(person1.first, person1.last)
 // if possible log result
  .then((result) => {
    console.log(result)
  })

  .catch((err) => {
    console.log(err)
  })
  // same process but for 2nd person
  finder(person2.first, person2.last)
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
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

// takes in 3 params, return the city of each
function logThreeResultsCities(person1, person2,person3) {
  // finder() to locate specific person
  finder(person1.first, person1.last)
  // if that person is found log the city
  .then((result) => {
    console.log(result[0].city)
  })
  // if not catch and log error
  .catch((err) => {
    console.log(err)
  })
  // same process for person2
  finder(person2.first, person2.last)
  .then((result) => {
    console.log(result[0].city)
  })
  .catch((err) => {
    console.log(err)
  })
  // same process for person3
  finder(person3.first, person3.last)
  .then((result) => {
    console.log(result[0].city)
  })
  .catch((err) => {
    console.log(err)
  })

}

// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
