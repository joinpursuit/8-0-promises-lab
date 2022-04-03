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
// creates a function with the paramerter an object of person's names 
function logResult(person) {
  // invokes the finder function with the person firt and last names 
  finder(person.first, person.last)

  // if the names are correct .then 
.then((foundPerson) => {

  // log the persons name 
  console.log(foundPerson)
})
// if the names are incorrect .catch 
.catch((error) => {
  // log an error message
  console.log(error)
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

// create a function with the parameters person 1 and person2 an object of people names 
function logTwoResults(person1,person2) {

  // invoke the function finder with the 1st person first and last name match 
    finder(person1.first, person1.last)
  // .then if the names match
    .then((foundPerson) => {
      // log the first person name 
      console.log(foundPerson)
    })
    // .catch if the names don't match 
    .catch((error) => { 
    // log an error message
      console.log(error)
    })

      // invoke the finder function with the second person first and last name 
      finder(person2.first, person2.last)

      // .then if the names match 
    .then((foundPerson) => {
      // log the second persons name 
      console.log(foundPerson)
    })
    // .catch if the names don't match 
    .catch((error) => {   
      // log an error message 
      console.log(error)

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
// create a function with parameters person 1 2 and 3 objects of people names 
function logThreeResultsCities(person1, person2, person3) {

  // invoke the finder function with the first person first and last name 
  finder(person1.first, person1.last)

  // .then if the names match 
  .then((foundPerson) => {
    // log the 0 index of the array .key of city
    console.log(foundPerson[0].city)
  })
  // .catch if the names dont match 
  .catch((error) => { 
  // log an error message 
    console.log(error)
  })

  // invoke the finder function with the second person first and last name 
    finder(person2.first, person2.last)

    // .then if the names match 
  .then((foundPerson) => {
        // log the 0 index of the array .key of city
    console.log(foundPerson[0].city)
  })
    // .catch if the names dont match 
  .catch((error) => { 
        // log an error message 
    console.log(error)
  })

    // invoke the finder function with the third person first and last name 
  finder(person3.first, person3.last)

    // .then if the names match 
  .then((foundPerson) => {
    // log the 0 index of the array .key of city
    console.log(foundPerson[0].city)
  })
  // .catch if the names dont match 
  .catch((error) => {   
    // log an error message
    console.log(error)
  })
  
}

// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
