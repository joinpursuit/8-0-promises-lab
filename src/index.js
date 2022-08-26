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
  const first = person.first
  const last = person.last

  finder(first,last)
    .then((lennie) => {
      console.log(lennie)
    })
    .catch((err)=>{
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
function logTwoResults(person1,person2) {
  const first1 = person1.first
  const last1 = person1.last
  const first2 = person2.first
  const last2 = person2.last

  finder(first1,last1)
    .then((lennie) => {
      console.log(lennie)
    })
    .catch((err)=>{
      console.log(err)
    })

  finder(first2,last2)
    .then((mars) => {
      console.log(mars)
    })
    .catch((err)=>{
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
function logThreeResultsCities(person1,person2,person3) {
  const first1 = person1.first
  const last1 = person1.last
  const first2 = person2.first
  const last2 = person2.last
  const first3 = person3.first
  const last3 = person3.last

  finder(first1,last1)
    .then((lennie) => {
      const result = lennie
      console.log(result[0]["city"])
    })
    .catch((err)=>{
      console.log(err)
    })

  finder(first2,last2)
    .then((mars) => {
      const result = mars
      console.log(result[0]["city"])
    })
    .catch((err)=>{
      console.log(err)
    })

  finder(first3,last3)
    .then((chris) => {
      const result = chris
      console.log(result[0]["city"])
    })
    .catch((err)=>{
      console.log(err)
    })
}

// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
