const fs = require("fs");
const path = require("path");

function _convert(line) {
  const [first, last, city, age] = line.split(", ");
  return {
    last,
    first,
    city,
    age: Number(age),
  };
}

function _find(first, last) {
  return (person) => person.first === first && person.last === last;
}

function finder(first, last) {
  return new Promise((resolve, reject) => {
    if (!first || !last) {
      const error = "First and Last name are required to search.";
      reject(error);
    }

    const filepath = path.join(__dirname, "..", "data", "people.txt");
    fs.readFile(filepath, "utf8", (err, data) => {
      const lines = data.split("\n");
      const people = lines.map(_convert);
      const result = people.filter(_find(first, last));
      if (result.length) {
        resolve(result);
      } else {
        const error = "No results found for the given search parameters.";
        reject(error);
      }
    });
  });
}

module.exports = finder;
