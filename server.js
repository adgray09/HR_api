require('dotenv').config();
const express = require('express');
const MongoClient = require('mongodb').MongoClient
const app = express();
const bodyParser = require('body-parser');
const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


require('./controllers/auth.js')(app)
require('./controllers/records.js')(app);
require('./data/record-db');


app.get('/', (req, res) => {
    res.send("Hello world")
})

app.listen(port, () => {
    console.log('we are live on ' + port)
})

module.exports = app;
