"use strict";

let help = require("./global-help-text"),
    assets = require("../assets/asset-loader");

let getSettings = data => {

  let settings = {
    // chart title
    chartTitle: `<strong>All Games:</strong> Biggest movers in the last`,
    // help text
    helpText:
      `This chart shows which ranked games moved the most since 7 days ago. There are currently ${assets.addCommas(Math.round(data.totalRankedGames))} ranked games. ${help.helpTextEnding}`,
    // data filter
    dataFilter: "all",
    dataSource: data, // all data is wrapped up in a single data object
    // date range
    dateRange:  "week",
    dateString: "7 days ago"
  };

  return settings;

};

module.exports = getSettings;