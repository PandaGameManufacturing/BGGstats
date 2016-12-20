"use strict";

let database = require("../../database-settings/database-settings"),
    pushData = require("../../push-data/push-data-loader"),
    addCrawlTimes = require("./crawl-time-formatter"),
    addTopTen = require("./top10-formatter"),
    addPercentile = require("./percentile-formatter"),
    Crawler = require("simplecrawler"),
    cheerio = require("cheerio");

let rankingsCrawlerLogic = function(url, gameStart, currentPage, totalRanked, callback) {

  let resultsCounter = 1; // BGG id for 100 results on page. resets after function runs
  let stopCrawling = false; // trigger for crawling next page

  // set url to crawl
  let crawl = Crawler(`${url}`)
  .on("fetchcomplete", function(queueItem, responseBuffer, response) {
    // display when new page is fetched
    console.log(`:: Fetched Page ${currentPage} (${queueItem.url})`);

    let gameEnd = gameStart + 99; // set crawler to crawl up to 100 games per page

    // loop over the games on the page 201-300, or 501-600, etc
    for (let i = gameStart; i <= gameEnd; i++) {

      let data = {};                                  // push data to a temporary object
      addCrawlTimes(data);                            // add crawl times
      data.bggID = Crawler.getGameId(responseBuffer, queueItem, resultsCounter); // bgg id
      data.Rank = i;                                  // rank of game based on incrementing on GameStart
      addTopTen(data, data.Rank);                     // adds top10, top100, etc tags
      addPercentile(data, data.Rank, totalRanked);    // adds top 1%, 5%, etc tags

      // check if it's ranked by bgg
      let isRanked = Crawler.checkIfRanked(responseBuffer, queueItem, resultsCounter);

      if (isRanked) {
        // if so push it up
        pushData.post(data, `/Rankings.json`);
      } else {
        let lastRankedGame = data.Rank - 1;
        stopCrawling = true;

        // push up last rank

        console.log(`:: Crawled games ${gameStart}-${lastRankedGame} on page ${currentPage}`);
        console.log(`:: The Crawler stopped at game ${lastRankedGame}`);

        break;
      }

      resultsCounter++; // increment results on the page counter

    }

    // only crawl next page if the crawler has run into untracked games
    if (!stopCrawling) {
      callback(gameEnd, totalRanked);
    }

  }); // end of let crawl =

  // crawl settings
  crawl.maxDepth = 1;

  // function for targeting game id
  Crawler.getGameId = function(buffer, queueItem, resultsNumber) {
    let $ = cheerio.load(buffer.toString("utf8"));
    let dirtyData = $(`#results_objectname${resultsNumber}`).find('a').attr("href");
    return dirtyData.replace(/\D+/g, ''); // remove everything execpt digits
    };

  // function for checking if game is ranked
  Crawler.checkIfRanked = function(buffer, queueItem, resultsNumber) {
    let targetRow = resultsNumber - 1; // resultsNumber 1 row off target game
    let $ = cheerio.load(buffer.toString("utf8"));
    let currenRank = $(`#row_`).eq(targetRow).find('td').find('a').attr("name");
    if (currenRank === undefined) {
      return false;
      } else {
      return true;
      }
    };

  // start crawl
  crawl.start();

};

module.exports = rankingsCrawlerLogic;