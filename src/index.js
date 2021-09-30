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
  let promise=finder(person.first, person.last);
  promise
  .then(newArr=> console.log(newArr))
  .catch(err => {
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
  let promise1=finder(person1.first, person1.last);
  let promise2=finder(person2.first, person2.last);
  Promise.all([promise1,promise2]).then(newArr=>{
    for(let arr of newArr) console.log(arr);
  }).catch(err=> {
    console.log(err);
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
  let promise1=finder(person1.first, person1.last);
  let promise2=finder(person2.first, person2.last);
  let promise3=finder(person3.first, person3.last);
  Promise.all([promise1, promise2, promise3]).then(newArr=>{
    let arr1,arr2,arr3;
    [arr1,arr2,arr3]=newArr;
    console.log(arr1[0].city);
    console.log(arr2[0].city);
    console.log(arr3[0].city);
  }).catch(e=> console.log(e));
}

// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
