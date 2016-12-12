"use strict";

    // BGG API Calls
let settings = require("./database-settings"),
    pushRankData = require("./push-to-GameRank"),
    pushPublishedData = require("./push-to-GamesPublished");

module.exports = {
  settings,
  pushRankData,
  pushPublishedData
};