var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express',view: 'index' });
  res.render('index', { title: 'Inicio',view: 'home' });
});

module.exports = router;
