var express = require('express');
var monk = require('../db/db');

var games = monk.get('games');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  games.find({})
  .then(function(results) {
    res.render('index', { games: results });
  })
  .catch(function(err) {
    next(err);
  });
});

router.get('/games/add', function(req, res, next) {
  res.render('add-game');
});

module.exports = router;
