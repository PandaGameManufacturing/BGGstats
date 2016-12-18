'use strict';

// requires
let assets = require("./assets/asset-loader"),
    loadChart = require("./chart-logic/chart-logic-loader");

loadChart.hotness ("slot1");
loadChart.rank    ("slot2");
loadChart.top10   ("slot3");
