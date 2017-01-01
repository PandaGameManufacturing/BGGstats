'use strict';

// requires
let assets = require("./assets/asset-loader"),
    createChart = require("./chart-visuals/chart-visuals-loader"),
    getData = require("./get-data/get-data-loader");

// get data for the day (or fallback to yesterday's data)
getData.charts().then( unparsed => {
  // parse the data
  let data = JSON.parse(unparsed);
  console.log("data:", data);

  //if there is movement data, draw the movement chart first
  if (data.movement) {
    createChart.rank("Today's Biggest Movers Among All Games", "yesterday", data, "slot1");
  }

  // createChart.hotness.hotnessChart ("Most Viewed",            data, "slot2");
  // createChart.top10                ("Top 10",                 data, "slot3");
});