var express = require('express');
var monk = require('../db/db');

var game = monk.get('games');
var router = express.Router();

router.post('/', function(req, res, next) {
  game.insert(req.body);
  res.redirect('/');
});

router.post('/:id/delete', function(req, res, next) {
  game.remove({_id: req.params.id})
  .then(function() {
    res.redirect('/');
  })
  .catch(function(err) {
    next(err);
  });
});

module.exports = router;
