const express = require('express');
const router = express.Router();
const hornControler = require('./hornControlerTest');

router.get('/:time1', hornControler.horn);

module.exports = router;
