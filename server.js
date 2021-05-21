const express = require('express');
const app = express();
const port = 80;
const router = require('./router');

app.use('/', router);
app.use(express.favicon(__dirname + '/public/favicon.ico'));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
