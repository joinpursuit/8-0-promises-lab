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
  // v-- finding through the list of names, 
  // v--- specifcally for first and last name w/ finder() function
  finder(person.first, person.last)

    // v-- .then();1st conditon, if person is found return the persons name
    .then((person) => {
      console.log(person)
    })

    // v--- .catch();2nd condition, if person name NOT found return error
    .catch((error) => {
      console.log(`${error}`)
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
  // similiar as the first function but you are looking through through the name list for two people
  // if no name is found catch the error
  // log each person seperate to have each person name found whether it be fully or partially there 

  finder(person1.first, person1.last)
    .then((person1) => {
      console.log(person1)
    })
    .catch((error) => {
      console.log(`${error}`)
    })
  finder(person2.first, person2.last)
    .then((person2) => {
      console.log(person2)
    })
    .catch((error) => {
      console.log(`${error}`)
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
function logThreeResultsCities(person1, person2, person3) {
  // need the array spot so you place [0] to represent the place of the person
  finder(person1.first, person1.last)
    .then((person1) => {
      console.log(person1[0].city)
    })
    .catch((error) => {
      console.log(`${error}`)
    })

  finder(person2.first, person2.last)
    .then((person2) => {
      console.log(person2[0].city)
    })
    .catch((error) => {
      console.log(`${error}`)
    })

  finder(person3.first, person3.last)
    .then((person3) => {
      console.log(person3[0].city)
    })
    .catch((error) => {
      console.log(`${error}`)
    })
  // finder()
  //   .then(() => {
  //     console.log()
  //   })
  //   .catch((error) => {
  //     console.log(`${error}`)
  //   })

  // console.log(person1.city, person2.city, person3.city)
}


// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
