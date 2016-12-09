'use strict';

// Requires
let hotness = require("./hotness-logic"),
    published = require("./published-logic"),
    rank = require("./rank-logic"),
    top10 = require("./top10-logic");

module.exports = {
  hotness,
  published,
  rank,
  top10
};