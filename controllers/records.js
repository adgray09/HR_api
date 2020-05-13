const Record = require('../models/record');

module.exports = function (app) {

    // CREATE
  app.post('/records/new', (req, res) => {
    // INSTANTIATE INSTANCE OF POST MODEL
    const record = new Record(req.body);

    // SAVE INSTANCE OF POST MODEL TO DB
    record.save((err, post) => {
      // REDIRECT TO THE ROOT
      return res.redirect(`/`);
    })
  });

  // get request at index

  app.get('/', (req, res) => {
    Record.find()
    .then(records => {
        res.send({ records });
        // res.render('home', {});
    }).catch(err => {
        console.log(err.message);
    })
})

  app.get('/records/category', (req, res) => {
    Record.find(req.params.id).select("-name -symptoms -_id -__v")
    .then(categories => {
      res.send({ categories })
    }).catch(err => {
    console.log(err.message)
  })
})

};
