const axios = require("axios");
const chai = require("chai");
const expect = chai.expect;

describe("GET /tasks", function() {
  it("should list all tasks", function(done) {
    axios
      .get(
        "https://books-api-nyt-62a23e681e0a.herokuapp.com/books/currentFiction"
      )
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.data.num_results).to.equal(15);
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
