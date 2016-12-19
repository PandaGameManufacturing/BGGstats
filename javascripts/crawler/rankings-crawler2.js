"use strict";

// requires
let rankingsCrawler = require("./crawler-logic/rankings-crawler-logic2"),
    getData = require("../get-data/get-data-loader");

// config options
let baseURL = "http://boardgamegeek.com/browse/boardgame",
    gameStart = 1,
    pageCounter = 2;

// action to take after a page successfully completes crawling
let startNextCrawl = (gameEnd, totalRanked) => {

  console.log(`You finished up at ${gameEnd}`);
  if (gameEnd <= 200) {
    rankingsCrawler(gameEnd+1, `${baseURL}/page/${pageCounter}`, totalRanked, startNextCrawl);
  }

};

// before first crawl, pull total ranked games to calculate percentile
getData.getTotalRanked().then(function(data) {
  console.log("total ranked data after promise:", data);
  let totalRanked = data.totalRanked;

// start crawler
  console.log(":: Rankings Crawler Booting Up ::");
  rankingsCrawler(gameStart, baseURL, totalRanked, startNextCrawl);

});