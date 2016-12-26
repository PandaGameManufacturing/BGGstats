'use strict';
/*jshint loopfunc: true */

let getData = require("../get-data/get-data-loader"),
    createChart = require("../chart-visuals/chart-visuals-loader"),
    arrayOfPromises = [],
    data = {};

let hotnessLogic = (data, slot) => {
  createChart.hotness.hotnessChart("The Hotness", data, slot); // create chart after all API
};

module.exports = hotnessLogic;