'use strict';

var exec = require('child_process').exec;

//GPIO PORT 17 RED
const _red_pin = 17;
//GPIO PORT 24 GREEN
const _green_pin = 24;
//GPIO PORT 22 BLUE
const _blue_pin = 22;

var set = function(rgb) {
  if (rgb.red & rgb.green & rgb.blue) {
    setPinLevel(_red_pin, rgb.red);
    setPinLevel(_green_pin, rgb.green);
    setPinLevel(_blue_pin, rgb.blue);
  }
}
var get = function(callback) {
  var rgb = {red : getPinLevel(_red_pin, callback) ,
          green : getPinLevel(_green_pin, callback) ,
          blue : getPinLevel(_blue_pin), callback});
  callback(rgb);
};

var getPinLevel = function(pin) {
//pigs gdc *PORT* to get Intensity where 0 <= *VALUE* <= 255
  exec('pigs gdc ' + pin, (error, stdout, stderr) => {
    if (!error) {
      return stdout;
    } else {
      console.log('There was an Error using pigpio: stderr:' + stderr);
      console.log(error.message);
    }
  });
}

var setPinLevel = function(pin , level) {
//pigs p *PORT* *VALUE* to set Intensity where 0 <= *VALUE* <= 255
  exec('pigs p ' + pin + " " + level, (error, stdout, stderr) => {
    if (!error) {
      console.log(stdout);
    } else {
      console.log('There was an Error using pigpio: stderr:' + stderr);
      console.log(error.message);
    }
  });
}

module.exports = {set : set, get : get};
