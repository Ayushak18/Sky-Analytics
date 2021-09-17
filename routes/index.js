var express = require('express');
const { aggregate } = require('../model/country');
var router = express.Router();
let Country = require('../model/country');

router.get('/', function (req, res, next) {
  Country.find({}, (error, countries) => {
    if (error) {
      next(error);
    } else {
      res.json(countries);
    }
  });
});

router.get('/country/:id', (req, res, next) => {
  Country.findById(req.params.id, (error, country) => {
    if (error) {
      next(error);
    } else if (req.query.year) {
      if (req.query.year) {
        Country.aggregate(
          [
            { $unwind: `$${Object.keys(country._doc)[1]}` },
            {
              $group: {
                _id: `$${Object.keys(country._doc)[1]}.${req.query.year}`,
              },
            },
          ],
          (error, data) => {
            if (error) {
              next(error);
            } else {
              res.json(data);
            }
          }
        );
      }
    } else if (true) {
      Country.findById(req.params.id, (error, countryById) => {
        if (error) {
          next(error);
        } else {
          res.json(countryById);
        }
      });
    }
  });
});

router.get('*', (req, res, next) => {
  res.json({ Message: 'Wrong URL' });
});

module.exports = router;
