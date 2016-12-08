'use strict';

// requires
require("./assets/asset-loader");
require("../sass/style.scss");
require("./charts/chart-loader");
let getData = require("./data/data-loader");
let data = {};

// get hotness data
getData.hotness.then( result => {
  data.hotness = JSON.parse(result).slice(0,5);     // push first five results to data.hotness
  console.log("data.hotness", data.hotness);
}).catch(function(error) { console.log("Data Hotness API Call Error", error); });

// get game details data
getData.details(135779).then( result => {
  // console.log("Game details data", result);
}).catch(function(error) { console.log("Game Details API Call Error", error); });