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

  // Top 10% Movement Chart
  if (data.movementWeek10) { // check that the data's there first
    createChart.movement(
      "Biggest Movers in Top 10%", // chart title
      data, // pushes all data
      "week10", // code word for switch to know where to go in data
      "slot1" // slot in the app to show this chart
    );
  }

  // Most Viewed Shelf
  if (data.hotness) { // check that the data's there first
    createChart.shelf.hotness ("Most Viewed", data, "slot2");
  }

  // Week Movement Chart
  if (data.movementWeek) { // check that the data's there first
    createChart.movement(
      "This Week's Biggest Movers", // chart title
      data, // pushes all data
      "week", // code word for switch to know where to go in data
      "slot3" // slot in the app to show this chart
    );
  }

  // Top 10  Chart
  if (data.top10) { // check that the data's there first
    createChart.top10("Top 10", data, "slot4");
  }

  // Day Movement Chart
  if (data.movementDay) { // check that the data's there first
    createChart.movement(
      "Today's Biggest Movers", // chart title
      data, // pushes all data
      "day", // code word for switch to know where to go in data
      "slot5" // slot in the app to show this chart
    );
  }

});