var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bablot.co' });
});

/* GET FAQ page. */
router.get('/faq', function(req, res, next) {
  res.render('faq', { title: 'Bablot - FAQ' });
});

/* GET Builder page. */
router.get('/builder', function(req, res, next) {
  res.render('builder');
});

module.exports = router;
