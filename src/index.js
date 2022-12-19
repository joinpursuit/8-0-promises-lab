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
  //console.log(finder(person.first, person.last))
  finder(person.first, person.last).then((people)=>{
 console.log(people)
  }).catch((err)=> {
  console.log(err)
  })
 // console.log(logResult({first:"Katelyn", last:"lopez"}))
};

// Log result is the Waiter
// Person is the order 
// Person.first, Person.last is the food
// Finder is the chef
// what happens when ----THEN
// people is the whole order


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
function logTwoResults(result1,result2) {
  logResult (result1)
  logResult (result2)
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
  finder(person1.first, person1.last)
        //if possible, get the result
        .then((result) => {
            //log the city
            console.log(result[0].city);
        })
        //catch the error
        .catch((err) => {
            console.log(err);
        })

    //same for person 2
    finder(person2.first, person2.last)
        //if possible, get the result
        .then((result) => {
            //log the city
            console.log(result[0].city);
        })
        //catch the error
        .catch((err) => {
            console.log(err);
        })

    //same for person 3
    finder(person3.first, person3.last)
        //if possible, get the result
        .then((result) => {
            //log the city
            console.log(result[0].city);
        })
        //catch the error
        .catch((err) => {
            console.log(err);
        })
      }

// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
