"use strict";

    // BGG API Calls
let details = require("./bgg-api/game-details-call"),
    hotness = require("./bgg-api/hotness-call"),

    // Crawler Data
    ranks = require("./crawler-data/game-ranks-call"),
    published = require("./crawler-data/games-published-call"),
    top10 = require("./crawler-data/top10-call"),
    getTotalRanked = require("./crawler-data/total-ranked"),
    rankings = require("./crawler-data/rankings"),
    databaseGame = require("./crawler-data/database-game-info"),

    // Local Data
    historic = require("./local-data/historical-top-10"),

    // Board Game Prices API Calls
    price = require("./prices-api/lowest-price-call"),

    // Data Template
    template = require("./data-template");

module.exports = {
  details,
  hotness,
  ranks,
  published,
  top10,
  getTotalRanked,
  rankings,
  databaseGame,
  historic,
  price
};