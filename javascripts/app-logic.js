'use strict';

// requires
let assets = require("./assets/asset-loader"),
    createChart = require("./chart-visuals/chart-visuals-loader"),
    getData = require("./get-data/get-data-loader");

// Show charts in this order
// -Most Viewed
// -Biggest Movers in Top 10%
// -Today's Biggest Movers
// -This Week's Biggest Movers

// get data for the day (or fallback to yesterday's data)
getData.charts().then( unparsed => {
  // after there is data, parse it
  let data = JSON.parse(unparsed);
  console.log("data:", data);

  // Top 10% Movement Chart
  if (data.movementWeek10) { // check that the data's there first
    createChart.rank(
      "Biggest Movers in Top 10%", // chart title
      data, // pushes all data
      "week10", // code word for switch to know where to go in data
      "slot2" // slot in the app to show this chart
    );
  }

  // Week Movement Chart
  if (data.movementWeek) { // check that the data's there first
    createChart.rank(
      "This Week's Biggest Movers", // chart title
      data, // pushes all data
      "week", // code word for switch to know where to go in data
      "slot3" // slot in the app to show this chart
    );
  }

  // Day Movement Chart
  if (data.movementDay) { // check that the data's there first
    createChart.rank(
      "Today's Biggest Movers", // chart title
      data, // pushes all data
      "day", // code word for switch to know where to go in data
      "slot4" // slot in the app to show this chart
    );
  }


  // createChart.hotness.hotnessChart ("Most Viewed",            data, "slot2");
  // createChart.top10                ("Top 10",                 data, "slot3");
});