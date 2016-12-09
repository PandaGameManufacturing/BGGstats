'use strict';

// requires
require("./assets/asset-loader");
require("../sass/style.scss");
require("./chart-visuals/chart-visuals-loader");
let loadChart = require("./chart-logic/chart-logic-loader");

loadChart.hotness("slot1");
// loadChart.top10("slot2");