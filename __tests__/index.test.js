const { logResult, logTwoResults, logThreeResultsCities } = require("../src");

beforeEach(() => {
  console.log = jest.fn();
});

describe("logResult()", () => {
  it("should log the person when given a valid name", async () => {
    await logResult({ first: "Ora", last: "Valentine" });
    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(console.log).toHaveBeenCalledWith([
      {
        last: "Valentine",
        first: "Ora",
        city: "Woodlake",
        age: 59,
      },
    ]);
  });

  it("should log the validation error when names are not given", async () => {
    await logResult({ first: "Ora" });
    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(console.log).toHaveBeenCalledWith(
      "First and Last name are required to search."
    );
  });

  it("should log the validation error when the names do not find a match", async () => {
    await logResult({ first: "Rita", last: "Ora" });
    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(console.log).toHaveBeenCalledWith(
      "No results found for the given search parameters."
    );
  });
});

describe("logTwoResults()", () => {
  it("should log each person individually when given a valid name both times", async () => {
    await logTwoResults(
      { first: "Tyler", last: "Yates" },
      { first: "Yvette", last: "Glenn" }
    );
    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(console.log).toHaveBeenCalledWith([
      {
        first: "Yvette",
        last: "Glenn",
        city: "Edmund",
        age: 52,
      },
    ]);
    expect(console.log).toHaveBeenCalledWith([
      {
        first: "Tyler",
        last: "Yates",
        city: "Zarephath",
        age: 55,
      },
    ]);
  });

  it("should log the validation error when the first name is partially missing", async () => {
    await logTwoResults({ first: "Tyler" }, { first: "Yvette", last: "Glenn" });
    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(console.log).toHaveBeenCalledWith(
      "First and Last name are required to search."
    );
  });

  it("should log the validation error when the first name does not find a match", async () => {
    await logTwoResults(
      { first: "Tyler", last: "Manchin" },
      { first: "Yvette", last: "Glenn" }
    );
    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(console.log).toHaveBeenCalledWith(
      "No results found for the given search parameters."
    );
  });

  it("should log the validation error when the second name is partially missing", async () => {
    await logTwoResults({ first: "Tyler", last: "Yates" }, { last: "Glenn" });
    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(console.log).toHaveBeenCalledWith(
      "First and Last name are required to search."
    );
  });

  it("should log the validation error when the second name does not find a match", async () => {
    await logTwoResults(
      { first: "Tyler", last: "Yates" },
      { first: "Yvette", last: "Yates" }
    );
    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(console.log).toHaveBeenCalledWith(
      "No results found for the given search parameters."
    );
  });
});

describe.only("logThreeResultsCities()", () => {
  it("should log all three cities, if given three valid people", async () => {
    await logThreeResultsCities(
      { first: "Joyce", last: "Wilkins" }, // Kohatk
      { first: "Marshall", last: "Short" }, // Soham
      { first: "Janet", last: "Evans" } // Lafferty
    );
    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(console.log).toHaveBeenCalledWith("Kohatk");
    expect(console.log).toHaveBeenCalledWith("Soham");
    expect(console.log).toHaveBeenCalledWith("Lafferty");
  });

  it("should log the validation error when a name is incomplete", async () => {
    await logThreeResultsCities(
      { first: "Joyce", last: "Wilkins" }, // Kohatk
      { first: "Marshall" }, // Soham
      { first: "Janet", last: "Evans" } // Lafferty
    );
    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(console.log).toHaveBeenCalledWith(
      "First and Last name are required to search."
    );
  });

  it("should log the validation error when a name does not find a match", async () => {
    await logThreeResultsCities(
      { first: "Joyce", last: "Wilkins" }, // Kohatk
      { first: "Marshall", last: "Short" }, // Soham
      { first: "Janet", last: "Peterson" } // Lafferty
    );
    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(console.log).toHaveBeenCalledWith(
      "No results found for the given search parameters."
    );
  });
});
