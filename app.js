'use strict';

const http = require('http');
const express = require('express');
const logging = require('./logging');
const rgb_control = require('./rgb_control');

const app = express();

app.use(logging);

app.get('/:red/:green/:blue', (req, res) => {
  rgb_control.set({red : req.params.red, green : req.params.green, blue :req.params.blue})
});
app.get('/', (req, res) => {
  res.send(rgb_control.get());
});

const server = http.createServer(app);

server.listen(3000);
