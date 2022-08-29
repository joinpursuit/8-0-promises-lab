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
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
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
function logTwoResults(person1, person2) {
  finder(person1.first, person1.last)
  .then((response) => {
    finder(person2.first,person2.last)
    .then((res)=> {
      console.log(response)
      console.log(res)
    })
    .catch((error1)=>{
      console.log(error1)
    })
  })
  .catch((error) => {
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

function logThreeResultsCities(person1,person2,person3) {
    finder(person1.first, person1.last)
      .then((res) => {
        res.forEach(element => {
          console.log(element.city)
        });
      })
      .catch((error) => console.log(error));
  
    finder(person2.first, person2.last)
      .then((res) => {
        res.forEach(element => {
          console.log(element.city)
        });
      })
      .catch((error) => console.log(error));
  
    finder(person3.first, person3.last)
      .then((res) => {
        res.forEach(element => {
          console.log(element.city)
        });
      })
      .catch((error) => console.log(error));
  }

// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
