"use strict";

let help = require("./global-help-text"),
    assets = require("../assets/asset-loader");

let getSettings = data => {

  let settings = {
    // chart title
    chartTitle: `<strong>Top 10</strong>: Over the years`,
    // help text
    helpText:
      `The current top 10 board games according to BoardGameGeek, as well as the historical top 10 for the last several years. The current top 10 is refreshed daily.`,
    dataSource: data, // all data is wrapped up in a single data object
  };

  return settings;

};

module.exports = getSettings;