"use strict";

// requires
let getData = require("../get-data/get-data-loader");

let formatCrawlerData = function() {
  console.log("format crawler page loads:");
  getData.rankings().then(function(data) {
    console.log("rankings data:", data);
  });

  // 1. pull down all games from today from Rankings Table

  // 2. create two arrays of ids showing top 10 games and bottom 5

  // 3. loop over 15 games, build out game object

  // 4. push up each game object to Games collection by id

};

module.exports = formatCrawlerData;