'use strict'

var logger = function (req, res , next) {
  console.log(req.ip + " " + " " + req.method + " " + req.path);
  next();
}
module.exports = logger;
