'use strict';

// requires
let assets = require("./assets/asset-loader"),
    createChart = require("./chart-visuals/chart-visuals-loader"),
    getData = require("./get-data/get-data-loader");

// get data for the day
getData.charts().then( unparsed => {
  let data = JSON.parse(unparsed);
  //once the app has the data, draw the charts
  createChart.hotness.hotnessChart ("Most Viewed",            data, "slot1");
  createChart.rank                 ("Today's Biggest Movers", data, "slot2");
  createChart.top10                ("Top 10",                 data, "slot3");
});