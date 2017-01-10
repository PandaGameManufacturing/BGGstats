"use strict";

let help = require("./global-help-text"),
    assets = require("../assets/asset-loader");

let getSettings = data => {

  let settings = {
    // chart title
    chartTitle: `<strong>Top 1,000:</strong> Biggest movers in the last`,
    // help text
    helpText:
      `This chart shows which games moved the most since yesterday ago among the top 1,000 of ranked games. There are currently ${assets.addCommas(Math.round(data.totalRankedGames/10))} games in the top 10%.${help.helpTextEnding}`,
    // data filter
    dataFilter: "1000",
    dataSource: data, // all data is wrapped up in a single data object
    // date range
    dateRange:  "day",
    dateString: "yesterday"
  };

  return settings;

};

module.exports = getSettings;