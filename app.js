'use strict';

const http = require('http');
const express = require('express');
const logging = require('./logging');
const rgb_control = require('./rgb_control');

const app = express();

app.use(logging);

app.get('/:red/:green/:blue', (req, res) => {
  var rgb = {red : req.params.red - 0, green : req.params.green - 0, blue :req.params.blue- 0}
  if ( 0 <= rgb.red <= 255 && 0 <= rgb.green <= 255 && 0 <= rgb.blue <= 255) {
    rgb_control.set(rgb);
    res.send(rgb);
  }
});
app.get('/', (req, res) => {
  res.send(rgb_control.get());
});

const server = http.createServer(app);

server.listen(3000);
