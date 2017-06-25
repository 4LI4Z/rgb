'use strict';
var exec = require('child_process').exec;

const _red_port = 17;                                                           //GPIO PORT 17 RED
const _green_port = 24;                                                         //GPIO PORT 24 GREEN
const _blue_port = 22;                                                          //GPIO PORT 22 BLUE

var set = function(rgb) {
  //pigs p *PORT* *VALUE* to set Intensity where 0 <= *VALUE* <= 255
  if(rgb.red & rgb.green & rgb.blue) {
    var command = 'pigs p '+ _red_port + " " + rgb.red
              + ' & pigs p ' + _green_port + " " + rgb.green
              + ' & pigs p ' + _blue_port + " " + rgb.blue;

    exec('command', (error, stdout, stderr) => {
      if(!error) {
        console.log('There was an Error using pigpio: stderr:' + stderr);
      } else {
        console.log(error.message);
      }
    });
  }
}
var get = function() {
  //pigs gdc *PORT* to get Intensity where 0 <= *VALUE* <= 255
  var level = {red: 0, green : 0, blue : 0};
  var commands = {red : 'pigs gdc '+ _red_port,
              green : 'pigs gdc '+ _green_port,
              blue : 'pigs gdc '+ _blue_port};
  exec(commands.red, (error, stdout, stderr) => {
    if(!error) {
      level.red = stdout;
    } else {
      console.log(error.message);
    }
  });
  exec(commands.green, (error, stdout, stderr) => {
    if(!error) {
      level.green = stdout;
    } else {
      console.log(error.message);
    }
  });
  exec(commands.blue, (error, stdout, stderr) => {
    if(!error) {
      level.blue = stdout;
    } else {
      console.log(error.message);
    }
  });
  return level;
};

module.exports = {set : set, get : get};
