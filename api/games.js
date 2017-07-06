const express = require('express')

const db = require('../db/game-queries')

const router = express.Router()

router.post('/', (req, res, next) => {
  db.add(req.body)
  .then(game => res.json(game))
  .catch(err => next(err));
});

router.get('/', (req, res, next) => {
  db.getAll()
  .then(games => res.json(games))
  .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;

  db.getOne(id)
  .then(game => res.json(game))
  .catch(err => next(err));
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id;

  db.atomicUpdate(id, req.body)
  .then(() => res.sendStatus(200))
  .catch(err => next(err));
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;

  db.destroy(id)
  .then(() => res.sendStatus(200))
  .catch(err => next(err));
});

module.exports = router
