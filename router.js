const express = require('express');
const router = express.Router();
const hornControler = require('./hornControler');

router.get('/:time1', hornControler.horn);

router.get('/favicon.ico', (req, res) => res.status(204));

module.exports = router;