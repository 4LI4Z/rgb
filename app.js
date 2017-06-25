'use strict';

const http = require(http);
const express = require(express);
const logging = require(logging);
const rgb_control = require(rgb_control);

const app = express();

app.use(logging);

app.get('/:red/:green/:blue', rgb_control.set({req.params.red,
                                               req.params.green,
                                               req.params.blue}));
app.get('/', rgb_control.get);

const server = http.createServer(app);

server.listen(3000);
