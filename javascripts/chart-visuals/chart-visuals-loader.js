'use strict';

// Requires
let shelf = require("./hotness-chart"),
    published = require("./published-chart"),
    movement = require("./rank-chart"),
    top10 = require("./top10-chart"),
    footer = require("./footer");

module.exports = {
  shelf,
  published,
  movement,
  top10,
  footer
};