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
    .then(res => {
    console.log(res)
  })
    .catch(rej => {
    console.log(rej)
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
function logTwoResults(person1, person2, person3) {
  finder(person1.first, person1.last)
    .then(res => {
    console.log(res)
  })
    .catch(rej => {
    console.log(rej)
    })
  
   finder(person2.first, person2.last)
    .then(res => {
    console.log(res)
  })
    .catch(rej => {
    console.log(rej)
    })
}

//Dan's Solution
// function logTwoResults(person1, person2) {
//   const persons = (person1, person2];
//   persons.forEach((person) => logResult(person));
//   logResult(person1)
//   logResult(person2)
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
function logThreeResultsCities(person1, person2, person3) {

 finder(person1.first, person1.last)
    .then(res => {
    console.log(res[0].city)
  })
    .catch(rej => {
    console.log(rej)
    })
  
   finder(person2.first, person2.last)
    .then(res => {
    console.log(res[0].city)
  })
    .catch(rej => {
    console.log(rej)
    })
  
   finder(person3.first, person3.last)
    .then(res => {
    console.log(res[0].city)
  })
    .catch(rej => {
    console.log(rej)
    })
}


// Triane's solution
//  function logThreeResultsCities(...info) {
//       //used a spread operator in my param 
//       info.forEach(({ first, last }) => {
//         //used the foreach method to look through first and last names I made it a object because thats what it wanted
//         finder(first, last)
//         //using finder I looked through first and last
//           .then(([{ city }]) => console.log(city))
//           //in my then I made city a key [] object {} then told it to console log 
//           .catch((error) => console.log(error));
//       });
// }


//Dan's Solution
// function logThreeResultsCities(person1, person2,
//   person3) {
//   const people = [person1, person2, person3];
//   people.forEach(person => {
//     finder(person.first, person.last)
//       .then(res => {
//         console.log(res[0].city);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   });
// }
// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
