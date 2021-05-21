const express = require('express');
const router = express.Router();
const hornControler = require('./hornControler');

const http = require('http');


const server = http.createServer(function(req, res) {
        if(req.url === '/favicon.ico') {
            console.log('ignore');
        } else {
            console.log(req.url);
     

router.get('/:time1', hornControler.horn);


}
});

module.exports = router;