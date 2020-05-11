const app = require("./../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const agent = chai.request.agent(app);

chai.should();
chai.use(chaiHttp);

const server = require('../server');
const Record = require('../models/record')

describe("Record", function() {
    const agent = chai.request.agent(server);
    const newRecord = {
        name: "testname",
        category: "testcategory",
        symptoms: "testsymptom",
    }

    before(function (done) {
        agent
        .post('/sign-up')
        .set("content-type", "application/x-www-form-urlencoded")
        .send(newRecord)
        .then(function (res) {
            done();
        })
        .catch(function (err) {
            done(err);
        });
    });

    it('Should create with valid attributes at POST /records/new', function(done) {
        // Checks how many posts there are now
        Record.estimatedDocumentCount().then(function (initialDocCount) {
            chai.request(app)
                .post("/records/new")
                  // This line fakes a form post,
                  // since we're not actually filling out a form
                .set("content-type", "application/x-www-form-urlencoded")
                  // Make a request to create another
                .send(newRecord)
                .then(function (res) {
                    Record.estimatedDocumentCount()
                        .then(function (newDocCount) {
                              // Check that the database has one more record in it
                            expect(res).to.have.status(200);
                              // Check that the database has one more record in it
                            expect(newDocCount).to.be.equal(initialDocCount + 1)
                            done();
                        }).catch(function (err) {
                            done(err);
                        });
                })
                .catch(function (err) {
                    done(err);
                });
        })
        .catch(function (err) {
            done(err);
        });
        done()
    });
    after(function (done) {
        Record.findOneAndDelete(newRecord)
        .then(function (res) {
            agent.close()

            Record.findOneAndDelete({
                name: newRecord.name
            })
            .then(function (res) {
                done()
            })
            .catch(function (err) {
                done(err);
            });
        })
        .catch(function (err) {
            done(err);
        });
    });
});
