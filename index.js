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
const logResult = (person) => {
  finder(person.first, person.last).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
    //throw error does not work!
  })
}
//Received help from Vandhana for this function. Her example below:
// function logResult(person) {
//   finder(person.first,person.last).then((person) => {
//     console.log(person)
//   }).catch((error)=> {
//     console.log (`${error}`)
//   })
// }

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
const logTwoResults = (person1, person2) => {
  logResult(person1);
  logResult(person2);
  //logResult can be used as a helper function because it does the first part of the job for us
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
const logThreeResultsCities = (person1, person2, person3) => {
  //get all people 
  //get cities from people
  const people = [person1, person2, person3];

  for (let person of people) {
    finder(person.first, person.last).then((result) => {
      for (let each of result) {
        console.log(each.city);

    }
  }).catch((error) => {
    console.log(error);
  })
  }
}
 //Sang helped me out with this one!
// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
