const path = require('path');
const express = require('express');
const app = express();
const http_proxy = require('http-proxy-middleware');
const port = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));