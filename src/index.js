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
function logResult({first, last}) {
  if(!first || !last){
    console.log("First and Last name are required to search.")
  }
  finder(first, last)
    .then((result)=>{
      console.log(result)
    })
    .catch(()=> {
      console.log("No results found for the given search parameters.")
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
function logTwoResults({first: first1, last: last1}, {first: first2, last: last2}) {
  if(!first1 || !first2 || !last1 || !last2){
    console.log("First and Last name are required to search.")
  }

  finder(first1, last1)
    .then((result)=>{
      console.log(result)
    })
    .then(() => {
      finder(first2, last2)
        .then((result2)=> {
          console.log(result2)
        })
        .catch(() =>
        console.log("No results found for the given search parameters."))
    })
    .catch(()=>{
      console.log("No results found for the given search parameters.")
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
function logThreeResultsCities(person1, person2, person3) {
  const {first: first1, last: last1} = person1;
  const {first: first2, last: last2} = person2;
  const {first: first3, last: last3} = person3;

  if(!first1 || !first2 || !first3 || !last1 || !last2 || !last3){
    console.log("First and Last name are required to search.")
  }

  finder(first1, last1)
  .then((result) => {
    console.log(result[0].city)
  })
  .then(() => {
    finder(first2, last2)
      .then((result2)=> {
        console.log(result2[0].city)
      })
      .then(() => {
        finder(first3, last3)
          .then((result3)=> {
            console.log(result3[0].city)
          })
          .catch(() =>
          console.log("No results found for the given search parameters."))
      })
      .catch(() =>
      console.log("No results found for the given search parameters."))
  })
  .catch(()=>{
    console.log("No results found for the given search parameters.")
  })
}

// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
