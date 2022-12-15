// Do not change the line directly below.
const finder = require("./helpers/finder");

// create a 'helper' function that will help us write less code while still being efficient
// taking two arguments one being the 'person' and the other 'prop'
// 'person' is the default argument that is being used in this lab
// 'prop' is just the property we want printed out instead of the whole 'person'
function logResultHelper(person, prop){

  // use the default 'finder()' function to look for a person
  finder(person.first, person.last)
    .then( person => {
      // if the 'finder()' function returns a person successfully, the function will then print the 'person' object to the console.
      // this is unless the 'prop' argument is provided at which point we will print the value of the specified property of the 'person' object
      console.log( !prop ? person : person[0][prop]);
    })
    .catch( error => {
      console.log(`${error}`);
    });

};

/**
 * logResult()
 * ========================
 * Logs out the entire array of objects returned from the `finder()` function.
 *
 * @param {Object} person - A person's names.
 * @param {Object} person.first - The person's first name.
 * @param {Object} person.last - The person's last name.
 */
function logResult(person){
  logResultHelper(person);
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
function logTwoResults(...people){
  people.forEach( person => logResultHelper(person) );
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
function logThreeResultsCities(...people){
  people.forEach( person => logResultHelper(person, "city") );
}

// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};

