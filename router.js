const express = require('express')
const router = express.router()
const hornControler = require('./hornControler')

router.get('/d/:time1', hornControler.horn)


moduals.exports = router