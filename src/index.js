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


function logResult(person){
  let find = finder(person.first, person.last)
    find.then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})
}




// if(finder(first,last)===person){
//   resolve(person)
// }


// if(first ===null || last ===null){
//   resolve("First and Last name are required to search.");
//     logResult.catch((error)=>{console.log(error)})

//     if(finder(first,last)===undefined){
//   resolve("No results found for the given search parameters.")
//   logResultcatch((error)=>{console.log(error)})

//     }
      
//   }
  

// }
//   // if(finder(first,last)) {
  //   resolve(people);
  //   finder.then((people)=>{console.log(people)})
  // } else {  
  //   reject();
  //   finder.catch((error)=>{console.log(error)})
  // }}

  // let promase = new Promise((resolve, reject) => {
  // if(finder(person)){
  //   resolve(finder(person));
  //   promase.then((result)=>{console.log(result)})
  // }
  // else{
  //   if(first===null ||last ===null){
  //   reject("First and Last name are required to search."
  //   )}
  //   if(person=== (null||undefined)){
  //     reject("No results found for the given search parameters."
  //     )}
  //     promase.catch((error)=>{console.log(error)})
  //   }
  // })





// try{

  
  
// (console.log("No results found for the given search parameters."));
//   }  
  
//   else if(first === undefined ||last === undefined){
//     (console.log("First and Last name are required to search."));
//   }
// }
//   catch{((console.log(person))) }

// }
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
  let find = finder(person1.first,person1.last)
  let find2 = finder(person2.first,person2.last)
  find.then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})
  find2.then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})
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
  let find = finder(person1.first, person1.last, person1.city)
  let find2 = finder(person2.first, person2.last, person2.city)
  let find3 = finder(person3.first, person3.last, person3.city)

  find.then((result)=>{console.log(result[0].city)}).catch((error)=>{console.log(error)})

  find2.then((result)=>{console.log(result[0].city)}).catch((error)=>{console.log(error)})


  find3.then((result)=>{console.log(result[0].city)}).catch((error)=>{console.log(error)})
}

// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
