"use strict";

// requires
let getData = require("../get-data-serverside");

// URL config
let baseURL    = "https://bggstats-2de27.firebaseio.com/",
    collection = "Games/";

// get a specific game info in the Games collection
let databaseGameInfo = gameId => {
  return getData(`${baseURL}${collection}${gameId}.json`);
};

module.exports = databaseGameInfo;