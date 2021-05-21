const express = require('express');
const router = express.Router();
const hornControler = require('./hornControler');

router.get('/:time1', hornControler.horn);

module.exports = router;
