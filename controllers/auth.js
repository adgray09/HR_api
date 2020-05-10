const User = require("../models/user");
const jwt = require('jsonwebtoken');

module.exports = (app) => {
    app.post("/sign-up", (req, res) => {
        // console.log("-----------", req.body)
        const user = new User(req.body);
        user
            .save()
            .then(user => {
                var token = jwt.sign(
                    { _id: user._id },
                    process.env.SECRET, 
                    { expiresIn: "60 days" }
                )
                res.cookie("nToken", token, { maxAge: 900000, httpOnly: true });
                res.send("user created successfully");
            })
            .catch(err => {
                console.log("------", err)
                return res.status(400).send({ err: err });
            });
    })
}