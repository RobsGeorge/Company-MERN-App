let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Company Model
let companySchema = require('../models/Company');

// CREATE Company
router.route('/create-company').post((req, res, next) => {
  companySchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Companies
router.route('/').get((req, res) => {
  companySchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Company
router.route('/edit-company/:code').get((req, res) => {
  companySchema.findOne({code: req.params.code}, (error, data) => {
    if (error) {
      res.json(error);
    } else {
      res.json(data);
    }
  });
});


// Update Company
router.route('/update-company/:code').put((req, res, next) => {
  companySchema.findOneAndUpdate({code: req.params.code}, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Company Updated successfully !')
    }
  })
})

// Delete Company
router.route('/delete-company/:code').delete((req, res, next) => {
  companySchema.findByIdAndRemove(req.params.code, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;
