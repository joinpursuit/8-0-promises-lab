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
    //the promise uses first and last name and returns an array if possible
    finder(person.first, person.last)
        //if possible, get the result
        .then((result) => {
            console.log(result);
        })
        //catch the error
        .catch((err) => {
            console.log(err);
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
    //the promise uses first and last name and returns an array if possible
    finder(person1.first, person1.last)
        //if possible, get the result
        .then((result) => {
            console.log(result);
        })
        //catch the error
        .catch((err) => {
            console.log(err);
        });

    //person2 now
    finder(person2.first, person2.last)
        //if possible, get the result
        .then((result) => {
            console.log(result);
        })
        //catch the error
        .catch((err) => {
            console.log(err);
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
function logThreeResultsCities() { }

// Do not change any of the code below this line.
module.exports = {
    logResult,
    logTwoResults,
    logThreeResultsCities,
};
