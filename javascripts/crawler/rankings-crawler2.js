"use strict";

// requires
let rankingsCrawler = require("./crawler-logic/rankings-crawler-logic2"),
    getData = require("../get-data/get-data-loader");

// config options
let crawlStartPage = 1,
    gameStart = (crawlStartPage * 100) -99, // 100 pages per page
    baseCrawlURL = "http://boardgamegeek.com/browse/boardgame/";

// before first crawl, pull total ranked games to calculate percentile
getData.getTotalRanked().then(function(data) {
  // console.log("total ranked data after promise:",  data);
  let totalRanked = data.totalRankedGames;

  // start crawler
  console.log(":::::::::::::::::::::::::::::::::::");
  console.log("::  Rankings Crawler Booting Up  ::");
  console.log(":::::::::::::::::::::::::::::::::::");
  console.log("");

  // start crawler at correct url if the first page is page 1
  if (gameStart == 1) {
    rankingsCrawler(
      baseCrawlURL, // start on first page
      gameStart,
      crawlStartPage,
      totalRanked,
      startNextCrawl
    );
  } else {
    rankingsCrawler(
      `${baseCrawlURL}/page/${crawlStartPage}`, // crawl on page provided
      gameStart,
      crawlStartPage,
      totalRanked,
      startNextCrawl
    );
  }

});

// logic for crawling another page if it's required
let startNextCrawl = (gameEnd, totalRanked) => {
  console.log(`:: ✓ Crawled page ${crawlStartPage}     games ${gameEnd-99}-${gameEnd}`)
  ;
  console.log("");
  crawlStartPage++;
  // rankingsCrawler(gameEnd+1, `${baseURL}/page/${crawlStartPage}`, totalRanked, startNextCrawl);

  // start next crawl on the next game
  rankingsCrawler(
    `${baseCrawlURL}/page/${crawlStartPage}`, // crawl next page
    gameEnd+1, // start at game with rank of
    crawlStartPage, // current page
    totalRanked, // last ranked game from yesterday to calculate percentile
    startNextCrawl // callback
  );
};