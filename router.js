const express = require('express');
const router = express.Router();
const hornControler = require('./hornControlerTest');
const app = express();


app.use(express.static('Public'));

router.get('/:time1', hornControler.horn);

module.exports = router;