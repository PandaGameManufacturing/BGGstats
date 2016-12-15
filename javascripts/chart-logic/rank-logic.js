'use strict';

let $ = require("jquery"),
    chartLoader = require("../assets/google-charts-loader"),
    getData = require("../get-data/get-data-loader"),
    createChart = require("../chart-visuals/chart-visuals-loader");

let rankLogic = slot => {

  // make two calls to the database
  Promise.all([
    getData.ranks.today(),
    getData.ranks.compareDate()
  ]).then(values => {
    // once we have the data, push it to an object
    let data = {};
    data.today = JSON.parse(values[0]);
    data.compare = JSON.parse(values[1]);
    console.log("data:", data);
  });

};

module.exports = rankLogic;