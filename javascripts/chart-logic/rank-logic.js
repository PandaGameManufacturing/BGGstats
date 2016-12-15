'use strict';

let $ = require("jquery"),
    chartLoader = require("../assets/google-charts-loader"),
    getData = require("../get-data/get-data-loader"),
    createChart = require("../chart-visuals/chart-visuals-loader");

let rankLogic = slot => {

  // make two calls to the database to get two sets of rankings data
  Promise.all([
    getData.ranks.today(),
    getData.ranks.compareDate()
  ]).then(values => {
    // parse data
    let data = {};
    data.today = JSON.parse(values[0]);
    data.compare = JSON.parse(values[1]);

    // crunch the numbers so we know the biggest movers



    // return formatted data
    return data;
  }).then(function(data){
    // now make a third call to get details of the biggest mover
    console.log("get some more data, but I have this", data);

    //build chart with this data
    createChart.rank("Biggest Movers", data, slot);

});

};

module.exports = rankLogic;