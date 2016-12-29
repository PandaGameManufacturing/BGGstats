'use strict';

let $ = require("jquery"),
    chartLoader = require("../assets/google-charts-loader"),
    getData = require("../get-data/get-data-loader"),
    createChart = require("../chart-visuals/chart-visuals-loader");

let top10Logic = (data, slot) => {

  // pull top 10 data from database
  getData.top10().then( databaseData => {

      // error if can't get top 10 data from database
      }, error => {
      console.log("Couldn't get top10 data from database:", error);
    });

};


module.exports = top10Logic;