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
  finder(person.first, person.last) //a finder function is called using the first and last name of the persons given 
  .then((name) => { //should the given person have both their names entered 'then'
    console.log(name);//console log the name
  })
  .catch((error) => { //should the given person not have either the first or last name, the error is caught
    console.log(error);//and an error message will be logged
  });
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
  finder(person1.first, person1.last) //a finder function is called on the person(s) object, using the last and first names 
    .then((name) => { //should the object contain the correct key/value pair, 'then' log the name given
      console.log(name)
    })
    .catch((error) => {//should the object contain incomplete information, the error will be caught
      console.log(error);//and log an error message
    });
  finder(person2.first, person2.last)//same logic as above, but referring to a different persons object
    .then((name) => {
      console.log(name);
    })
    .catch((error) => {
      console.log(error);
    });
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
  finder(person1.first, person1.last)// a finder function is called on the person object
    .then((name) => { //'then' using the name given
      name.forEach((city1) => { //for each name given in this object
        console.log(city1.city);//log the first city that is listed
      });
    })
    .catch((error) => {//should the names be incomplete, or lacking city information, the error is caught
      console.log(error);//and logged to the console with an error message
    });
  finder(person2.first,person2.last)
    .then((name) => {
      name.forEach((city2) => {
        console.log(city2.city);
      });
    })
    .catch((error) => {
      console.log(error);
    });
  finder(person3.first, person3.last)
    .then((name) => {
      name.forEach((city3) => {
        console.log(city3.city);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
