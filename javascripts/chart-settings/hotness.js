"use strict";

let help = require("./global-help-text"),
    assets = require("../assets/asset-loader");

let getSettings = data => {

  let settings = {
    // chart title
    chartTitle: `<strong>The Hotness</strong>: The most viewed games`,
    // help text
    helpText:
      `This top 5 list is based on BoardGameGeeks The Hotness list, which reflects the dynamic popularity of board games based on recent views on BoardGameGeek.com. Data is refreshed daily.`,
    dataSource: data, // all data is wrapped up in a single data object
  };

  return settings;

};

module.exports = getSettings;