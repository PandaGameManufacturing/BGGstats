'use strict';

// requires
require("./assets/asset-loader");
let loadChart = require("./chart-logic/chart-logic-loader");

loadChart.hotness ("slot1");
loadChart.rank    ("slot2");
loadChart.top10   ("slot3");