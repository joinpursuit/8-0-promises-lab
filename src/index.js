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
async function logResult({first,last}) {
  try {
    const da =  await finder(first,last);
    console.log(da);
    
  } catch (error) {
    console.log(error);
    
  }
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
function logTwoResults(p1,p2) {
  let tmp = [p1,p2].map(el=>finder(el.first,el.last));

  Promise.all(tmp).then(vals=>{
    vals.forEach(el=>console.log(el));
  }).catch(err=>{
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
function logThreeResultsCities(p1,p2,p3) {
  let tmp = Object.values(arguments).map(el=>finder(el.first,el.last));

  Promise.all(tmp).then(vals=>{
    vals.forEach(el=>console.log(el[0].city));
  }).catch(err=>{
    console.log(err);
  })
}

// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
