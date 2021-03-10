const { expect } = require("chai");
const { fetchData } = require("./helperFunctions");

describe("helperFunctions", () => {
  it("fetchData successful", async () => {
    const data = await fetchData("https://jsonplaceholder.typicode.com/todos");
    expect(data).to.be.a("array");
  });
});
