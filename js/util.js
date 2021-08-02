'use strict';

function drawNum() {
  var idx = getRandomInt(0, gNums.length);
  var num = gNums[idx];
  gNums.splice(idx, 1);
  return num;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
