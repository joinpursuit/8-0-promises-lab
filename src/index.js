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
  finder(person.first, person.last).then((person) => { // using promise then method to find person first and last name or log error
    console.log(person)
  }).catch((error)=> {
    console.log (error)
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
 function logTwoResults(...people) {
  // method 1 - to avoid repeat code - method 1 calls the previous function but method 2 works
  people.forEach(person => logResult(person)) // calling the first function 
 }
  // method 2
   //   function logTwoResults(person1,person2) {
    //   finder(person1.first,person1.last).then((person) => {
    //     console.log(person)
    //   }).catch((error)=> {
    //     console.log (`${error}`)
    //   })
    //   finder(person2.first,person2.last).then((person) => {
    //     console.log(person)
    //   }).catch((error)=> {
    //     console.log (`${error}`)
    //   })
   // }

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

 function logThreeResultsCities(...people) { // method 1
  people.forEach(person => {                  // to repeat calling finder repeatedly we use forEach loop
    finder(person.first, person.last)
      .then((personFound) => {
          console.log(personFound[0].city)
    }).catch((error) => {
          console.log(error)
    })
  })
 }

 // function logThreeResultsCities(person1,person2,person3) {
 //  method 2
 //   finder(person1.first,person1.last).then((person) => {
 //     console.log(person[0].city)
 //   }).catch((error)=> {
 //     console.log (`${error}`)
 //   })
 //   finder(person2.first,person2.last).then((person) => {
 //     console.log(person[0].city)
 //   }).catch((error)=> {
 //     console.log (`${error}`)
 //   })
 //   finder(person3.first,person3.last).then((person) => {
 //     console.log(person[0].city)
 //   }).catch((error)=> {
 //     console.log (`${error}`)
 //   })
 // }

 // Do not change any of the code below this line.
 module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
 };
