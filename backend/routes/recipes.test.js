let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
let should = chai.should();
const { expect } = require("chai");
const allRecipes = require("./mockAllRecipes.json");
const singleRecipe = require("./mockSingleRecipe.json");

chai.use(chaiHttp);

describe("/GET recipes", () => {
  it("it should GET all the recipes", (done) => {
    chai
      .request(server)
      .get("/api/recipes")
      .send(allRecipes)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});

describe("/GET recipes by ID", () => {
  it("it should GET a recipe by ID", (done) => {
    chai
      .request(server)
      .get("/api/recipes/716429")
      .send(singleRecipe)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});

describe("test wrong endpoint", () => {
  it("should send 404 when route does not exist", (done) => {
    chai
      .request(server)
      .get("/api/recipe/")
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a("object");
        res.body.should.have.property("message").eql("Not Found");
        done();
      });
  });
});
// https://www.digitalocean.com/community/tutorials/test-a-node-restful-api-with-mocha-and-chai
