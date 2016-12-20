"use strict";

// requires
let rankingsCrawler = require("./crawler-logic/rankings-crawler-logic2"),
    getData = require("../get-data/get-data-loader");

// config options
let baseURL = "http://boardgamegeek.com/browse/boardgame/page/131",
    gameStart = 13001,
    pageCounter = 131;

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
  console.log(`:: Crawled games ${gameEnd-99}-${gameEnd} on page ${pageCounter} ::`);
  pageCounter++;
  // rankingsCrawler(gameEnd+1, `${baseURL}/page/${pageCounter}`, totalRanked, startNextCrawl);
  rankingsCrawler(gameEnd+1, `http://boardgamegeek.com/browse/boardgame/page/${pageCounter}`, totalRanked, startNextCrawl);

};