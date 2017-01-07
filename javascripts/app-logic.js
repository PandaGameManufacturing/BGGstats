'use strict';

// requires
let assets = require("./assets/asset-loader"),
    createChart = require("./chart-visuals/chart-visuals-loader"),
    getData = require("./get-data/get-data-loader");

// get data for the day (or fallback to yesterday's data)
getData.charts().then( data => {

  // inject total games and last crawl time in footer
  createChart.footer(data);

  // SHOW CHARTS

  let helpTextEnding =  " Rankings are based on BoardGameGeek's Geek Rating. Data is calculated daily.";

  // Top 10% Movement Chart
  if (data.movementWeek10) { // check that the data's there first
    createChart.movement(
      "<strong>Top 10%:</strong> The biggest movers over the last", // chart titletitle
      `This chart shows which games moved the most since 7 days ago among the top 10% of ranked games. There are currently ${assets.addCommas(Math.round(data.totalRankedGames/10))} games in the top 10%.${helpTextEnding}`, // help text
      "slot1", // slot in the app to show this chart
      data, // pushes all data
      "week", // date range
      "10" // filter
    );
  }

  // Most Viewed Shelf
  if (data.hotness) { // check that the data's there first
    createChart.shelf.hotness (
      "<strong>Most Viewed</strong>",
      "This top 5 list is based on BoardGameGeeks The Hotness list, which reflects the dynamic popularity of board games based on recent views on BoardGameGeek.com. Data is refreshed daily.",
      "slot2",
      data
    );
  }

  // Week Movement Chart
  if (data.movementWeek) { // check that the data's there first
    createChart.movement(
      "<strong>All Games:</strong> The biggest movers over the last", // chart title
      "This chart shows which ranked games moved the most since 7 days ago." + helpTextEnding, // help text
      "slot3", // slot in the app to show this chart
      data, // pushes all data
      "week" // data range
    );
  }

  // // Top 10 Chart
  // if (data.top10) { // check that the data's there first
  //   createChart.top10("Top 10", "slot4", data);
  // }

  // Day Movement Chart
  if (data.movementDay) { // check that the data's there first
    createChart.movement(
      "<strong>All Games:</strong> The biggest movers over the last", // chart title
      "This chart shows which ranked games moved the most since yesterday." + helpTextEnding, // help text
      "slot5", // slot in the app to show this chart
      data, // pushes all data
      "day" // date range
    );
  }

});