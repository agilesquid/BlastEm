const express = require('express');
const app = express();
const port = 80;
const router = require('./router');

app.use('/', router);

app.get('/favicon.ico', (req, res) => res.status(204));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
