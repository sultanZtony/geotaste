// Imports the server.js file to be tested.
const server = require("../server");
// Assertion (Test Driven Development) and Should,  Expect(Behaviour driven 
// development) library
const chai = require("chai");
// Chai HTTP provides an interface for live integration testing of the API's.
const chaiHttp = require("chai-http");
const { response } = require("express");
chai.should();
chai.use(chaiHttp);
const { assert, expect } = chai;

describe("Geotaste!", () => {

  //========= Music Page ===============
  it("Loaded Song Data", (done) => {
    chai 
      .request(server)
      .get("/music?song_choice=82253")
      .end((err,res) => {
        expect(res.body).to.be.a("object");
        expect(res.status).to.equal(200);
        done();
      });
  });

  it("No Song ID", (done) => {
    chai 
      .request(server)
      .get("/music?song_choice=")
      .end((err,res) => {
        expect(res.body).to.be.a("object");
        expect(res.status).to.equal(400);
        done();
      });
  });

  it("No Song Choice", (done) => {
    chai 
      .request(server)
      .get("/music")
      .end((err,res) => {
        expect(res.body).to.be.a("object");
        expect(res.status).to.equal(400);
        done();
      });
  });
//===============Country Page==================
 it("No data passed to country page", (done) => {
    chai 
      .request(server)
      .get("/country-id")
      .end((err,res) => {
        expect(res.body).to.be.a("object");
        expect(res.status).to.equal(400);
        done();
      });
  });

  it("No country ID sent to country page", (done) => {
    chai 
      .request(server)
      .get("/country-id?country=")
      .end((err,res) => {
        expect(res.body).to.be.a("object");
        expect(res.status).to.equal(400);
        done();
      });
  });

  it("Country ID sent to country page", (done) => {
    chai 
      .request(server)
      .get("/country-id?country=United%20States%20of%America")
      .end((err,res) => {
        expect(res.body).to.be.a("object");
        expect(res.status).to.equal(200);
        done();
      });
  });
});