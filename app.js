'use strict';

const http = require(http);
const express = require(express);
const logging = require(logging);
const rgb_control = require(rgb_control);

const app = express();

app.use(logging);

app.get('/:red/:green/:blue', rgb_control.set);
app.get('/', rgb_control.get);

const server = hhtp.createServer(app);

server.listen(3000);
