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

  // Top 1000 - Week
  if (data.movementWeek1000) { // check that the data's there first
    createChart.movement(
      "<strong>Top 1,000:</strong> Biggest movers in the last", // chart titletitle
      `This chart shows which games among the top 1,000 moved the most since 7 days ago. There are currently ${assets.addCommas(Math.round(data.totalRankedGames))} ranked games.` +helpTextEnding, // help text
      "7 days ago",
      data, // pushes all data
      "week", // date range
      "1000" // filter
    );
  }

  // Top 1000 - Day
  if (data.movementToday1000) { // check that the data's there first
    createChart.movement(
      "<strong>Top 1,000:</strong> Biggest movers in the last", // chart titletitle
      `This chart shows which games moved the most since yesterday ago among the top 1,000 of ranked games. There are currently ${assets.addCommas(Math.round(data.totalRankedGames/10))} games in the top 10%.${helpTextEnding}`, // help text
      "7 days ago",
      data, // pushes all data
      "day", // date range
      "1000" // filter
    );
  }

  // Most Viewed Shelf
  if (data.hotness) { // check that the data's there first
    createChart.shelf.hotness (
      "<strong>The Hotness</strong>: The most viewed games",
      "This top 5 list is based on BoardGameGeeks The Hotness list, which reflects the dynamic popularity of board games based on recent views on BoardGameGeek.com. Data is refreshed daily.",
      data
    );
  }

  // Week Movement
  if (data.movementWeek) { // check that the data's there first
    createChart.movement(
      "<strong>All Games:</strong> Biggest movers in the last", // chart title
      `This chart shows which ranked games moved the most since 7 days ago. There are currently ${assets.addCommas(Math.round(data.totalRankedGames))} ranked games. ${helpTextEnding}`, // help text
      "7 days ago",
      data, // pushes all data
      "week", // data range
      "all" // filter
    );
  }

  // // Top 10 Chart
  // if (data.top10) { // check that the data's there first
  //   createChart.top10("Top 10", "slot5", data);
  // }

  // Day Movement
  if (data.movementDay) { // check that the data's there first
    createChart.movement(
      "<strong>All Games:</strong> Biggest movers in the last", // chart title
      `This chart shows which ranked games moved the most since yesterday. There are currently ${assets.addCommas(Math.round(data.totalRankedGames))} ranked games. ${helpTextEnding}`, // help text
      "yesterday",
      data, // pushes all data
      "day", // date range
      "all" // filter
    );
  }

});