// Dependencies
// =============================================================
const router = require('express').Router();
const Keywords = require('../models/keywords');
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


//// Keywords

router.get('/api/keywords', (req, res) => {
  Keywords.findAll({}).then(dbKeywords => {
    res.json(dbKeywords)
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  });
});


router.post('/api/keywords', (req, res) => {
  // create a new keyword
  Keywords
    .create({
      keyword_name: req.body.keyword_name
    })
    .then(dbKeywordsData => res.json(dbKeywordsData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.put('/api/keywords/:id', (req, res) => {
  // update a keyword by its `id` value
  Keywords
    .update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(dbKeywordsData => {
      if (!dbKeywordsData[0]) {
        res.status(404).json({ message: 'No keyword found with this id' });
        return;
      }
      res.json(dbKeywordsData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/api/keywords/:id', (req, res) => {
  // delete a keyword by its `id` value
  Keywords
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbKeywordsData => {
      if (!dbKeywordsData) {
        res.status(404).json({ message: 'No keyword found with this id' });
        return;
      }
      res.json(dbKeywordsData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
