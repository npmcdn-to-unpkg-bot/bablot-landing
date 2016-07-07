var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bablot.co' });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/examples', function(req, res, next) {
  res.render('examples');
});

router.get('/builder', function(req, res, next) {
  res.render('builder');
});

router.get('/payments', function(req, res, next) {
  res.render('payments');
});

module.exports = router;
