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

function logResult(person, key) {
  // null coaleshing operator

  // const first = person.first
  // const last = person.last
  const { first, last } = person ?? {} //con el doble ?? garantizamos el caso de que cuando sea indefinido tome un objeto vacio.

  if (!first || !last) {
    console.log("First and Last name are required to search.")
    return
  }

  // Finder es una funcion asincrona porque necesita LEER archivos externos que NO DEPENDEN DIRECTAMENTE de nuestra aplicacion.
  finder(first, last)
    // THEN es una funcion que se ejecuta una vez la PROMESA se resuelva exitosamente.
    // Recibe como parametro una funcion del tipo (response) => {}; donde response es la data retornada por la funcion asincrona tras ser resuelta exitosamente.
    .then(response => console.log(key ? response[0][key] : response))
    .catch(error => console.log(error))
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
  logResult(person1)
  logResult(person2)
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
  logResult(person1, 'city')
  logResult(person2, 'city')
  logResult(person3, 'city')
}

// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
