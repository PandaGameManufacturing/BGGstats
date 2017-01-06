'use strict';

// requires
let assets = require("./assets/asset-loader"),
    createChart = require("./chart-visuals/chart-visuals-loader"),
    getData = require("./get-data/get-data-loader");

// get data for the day (or fallback to yesterday's data)
getData.charts().then( data => {

  // inject total number of games in footer
  let targetEl = document.getElementById("totalGames");
  targetEl.innerHTML = `${assets.addCommas(data.totalRankedGames)} games`;

  // inject last crawl time in footer
  let targetEl2 = document.getElementById("time");
  let hours = assets.timeElapsed(data.timeMilliseconds);
  targetEl2.innerHTML = `${hours} hours ago`;

  // SHOW CHARTS

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

  // // Top 10 Chart
  // if (data.top10) { // check that the data's there first
  //   createChart.top10("Top 10", data, "slot4");
  // }

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