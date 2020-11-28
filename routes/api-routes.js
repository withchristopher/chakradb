// Dependencies
// =============================================================
const router = require('express').Router();
const Toothless = require('../models/toothless');

// Routes
// =============================================================

// GET route for getting all of the toothless
router.get('/api/toothless', (req, res) => {
  Toothless.findAll({}).then(dbToothless => {
    res.json(dbToothless);
  });
});

// GET route for deleting a tooth
router.get('/api/toothless/:id', (req, res) => {
  Toothless.findAll({
    where: {
      id: req.params.id
    }
  }).then(dbToothless => {
    res.json(dbToothless);
  });
});

// POST route for saving a new toothless
router.post('/api/toothless', (req, res) => {
  Toothless.create({
    text: req.body.text,
    complete: req.body.complete
  }).then(dbToothless => {
    res.json(dbToothless);
  });
});

// DELETE route for deleting a tooth
router.delete('/api/toothless/:id', (req, res) => {
  Toothless.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbToothless => {
    res.json(dbToothless);
  });
});

// PUT route for updating a tooth
router.put('/api/toothless/:id', (req, res) => {
  Toothless.update(
    {
      text: req.body.text,
      complete: req.body.complete
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(dbToothless => {
    res.json(dbToothless);
  });
});

module.exports = router;
