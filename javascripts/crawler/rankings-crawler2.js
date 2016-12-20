"use strict";

// requires
let rankingsCrawler = require("./crawler-logic/rankings-crawler-logic2"),
    getData = require("../get-data/get-data-loader");

// config options
let baseURL = "http://boardgamegeek.com/browse/boardgame",
    gameStart = 1,
    pageCounter = 2;

// before first crawl, pull total ranked games to calculate percentile
getData.getTotalRanked().then(function(data) {
  console.log("total ranked data after promise:", data);
  let totalRanked = data.totalRanked;

// start crawler
  console.log(":: Rankings Crawler Booting Up ::");
  rankingsCrawler(gameStart, baseURL, totalRanked, startNextCrawl);

});

// logic for crawling another page if it's required
let startNextCrawl = (gameEnd, totalRanked) => {

  console.log(`You finished up at ${gameEnd}`);
  rankingsCrawler(gameEnd+1, `${baseURL}/page/${pageCounter}`, totalRanked, startNextCrawl);
  console.log(`:: Crawling Page ${pageCounter} ::`);
  pageCounter++;

};