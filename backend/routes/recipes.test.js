let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
let should = chai.should();
chai.use(chaiHttp);

describe("Routes", () => {
  it("GET /api/recipes?ingredients should get all the recipes", (done) => {
    chai
      .request(server)
      .get("/api/recipes?ingredients=%0Abanana%2C%2Bmilk%2C%2Bchocolate")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });

  it("GET /api/recipes/:id should get a recipe by ID", (done) => {
    chai
      .request(server)
      .get("/api/recipes/716429")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });

  it("GET /api/recipe/ should send 404 when route does not exist", (done) => {
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
