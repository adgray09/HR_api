const app = require("./../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const should = chai.should();

chai.use(chaiHttp);

const User = require('../models/user');
const agent = chai.request.agent(server);

describe("User", function() {

    it("Should be able to sign up", function(done) {
        User.findOneAndRemove({username: "testone"}, function() {
            agent
            .post("/sign-up")
            .send({ username: "testone", password: "password" })
            .end(function(err, res) {
            console.log(res.body);
            res.should.have.status(200);
            agent.should.have.cookie("nToken");
            done();
            })
        });
    });

    
});