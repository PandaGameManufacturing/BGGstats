'use strict';

// requires
require("./assets/asset-loader");
require("../sass/style.scss");
require("./chart-visuals/chart-visuals-loader");
let load_chart = require("./chart-logic/chart-logic-loader");

load_chart.hotness("slot1");