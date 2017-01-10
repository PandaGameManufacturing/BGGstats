'use strict';

// requires
let assets = require("./assets/asset-loader"),
    createChart = require("./chart-visuals/chart-visuals-loader"),
    getData = require("./get-data/get-data-loader"),
    settings = require("./chart-settings/chart-settings-loader");

let startApp = eventListenersCallback => {

  // get data for the day (or fallback to yesterday's data)
  getData.charts().then( data => {

    // inject total games and last crawl time in footer
    createChart.footer(data);

    // check that the data's there first, then draw charts
    loadCharts(data);

    eventListenersCallback();

    // setup event listeners
    console.log("setup event listeners");

  });
};

let loadCharts = data => {
    console.log("load charts");
    // Top 1000 - Week
  if (data.movementWeek1000)  { createChart.movement      (settings.week1000(data)); }
  // Top 1000 - Day
  if (data.movementToday1000) { createChart.movement      (settings.day1000(data));  }
  // Most Viewed Shelf
  if (data.hotness)           { createChart.shelf.hotness (settings.hotness(data));  }
  // All Games - Week
  if (data.movementWeek)      { createChart.movement      (settings.weekAll(data));  }
  // All Games - Day
  if (data.movementDay)       { createChart.movement      (settings.dayAll(data));   }

  // // // Top 10 Chart
  // // if (data.top10) { // check that the data's there first
  // //   createChart.top10("Top 10", "slot5", data);
  // // }

};

module.exports = startApp;