# Promises Lab

An asynchronous function, `finder()`, can be used to search through a long text file filled with biographic information. In this lab, you'll need to use the promise returned by that function to log out a few values. Later on, you'll build more complex functions with this data!

## Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

## Instructions

You will complete three functions in the `src/index.js` file which will require you to use the `finder()` function, which is described in more detail below. For each function, read the expectations carefully. If you are lost, check the tests or check-in with an instructor to get help.

### finder()

The `finder()` function takes two strings as its arguments. It is expected that the object will contain a `first` and `last` key. Each key should match with the first and last name of a person in the `src/data/people.txt` file.

When invoked, it will return a promise that will eventually resolve to an array of objects. Each object in this array will be people whose first and last name match what was given. If no person can be found, or if the inputted object is malformed, an error message will be resolved.

```js
finder(); //> Promise { <pending> }

finder("Rhea", "Callahan");
//> Will eventually return:
//> [{ first: "Rhea", last: "Callahan", city: "Roosevelt", age: 40 }]

finder("Rhea");
//> Will eventually return:
//> "First and Last name are required to search."

finder("Rhea", "Waters");
//> Will eventually return:
//> "No results found for the given search parameters."
```

### Tips

Keep in mind the following:

- Whenever you receive a value from a promise, you should log it out. If a function requests you log out multiple values, _log out each separately._
- Remember that you may need to nest promises inside of one another to get everything working.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your repository.

```
npm test
```

This will run the test output once.

#### Test watcher

If you'd like, you can have the tests run constantly. This means that each time you save your file, your tests will re-run. To do so, you can run the following:

```
npm run watch
```

Follow the on-screen prompts to exit out of the constant runner.
