'use strict';

// requires
let assets = require("./assets/asset-loader"),
    createChart = require("./chart-visuals/chart-visuals-loader"),
    getData = require("./get-data/get-data-loader"),
    settings = require("./chart-settings/chart-settings-loader");

let loadCharts = data => {

  // Top 1000 Views
  if (data.movementToday1000) { createChart.movement      (settings.day1000(data),  "slot1"); }
  if (data.movementWeek1000)  { createChart.movement      (settings.week1000(data), "slot1"); }

  // Most Viewed Shelf
  if (data.hotness)           { createChart.shelf.hotness (settings.hotness(data),  "slot2");  }

  // All Games View
  if (data.movementDay)       { createChart.movement      (settings.dayAll(data),   "slot3");  }
  if (data.movementWeek)      { createChart.movement      (settings.weekAll(data),  "slot3");  }

  // Top 10 Chart
  // if (data.top10)             { createChart.top10         (settings.top10(data),    "slot4");  }

};

let bootUpApp = eventListenersCallback => {

  // get data for the day (or fallback to yesterday's data)
  getData.charts().then( data => {

    // inject total games and last crawl time in footer
    createChart.footer(data);
    // check that the data's there first, then draw charts
    loadCharts(data);
    // add event listeners once all content is drawn
    eventListenersCallback();

  });
};

module.exports = bootUpApp;