"use strict";

// requires
let database = require("../../database-settings/database-settings"),
    pushData = require("../../push-data/push-data-serverside"),
    addCrawlTimes = require("./crawl-time-formatter"),
    addTopTen = require("./top10-formatter"),
    addPercentile = require("./percentile-formatter"),
    Crawler = require("simplecrawler"),
    cheerio = require("cheerio"),
    moment = require("moment"),
    manipulateData = require("../../data-manipulation/data-manipulation-loader");

let rankingsCrawlerLogic = function(url, gameStart, currentPage, totalRanked, callback) {

  let resultsCounter = 1, // BGG id for 100 results on page. resets after function runs
      stopCrawling = false, // trigger for crawling next page
      crawlStartTime = new Date().getTime(), // track how long the total crawl takes
      momentStartTime = moment().format('llll'); // Tue, Dec 20, 2016 2:17 PM

  // set url to crawl
  let crawl = Crawler(`${url}`)
  .on("fetchcomplete", function(queueItem, responseBuffer, response) {
    // display when new page is fetched
    console.log(`::   Fetched Page ${currentPage}     ${queueItem.url}`);

    let gameEnd = gameStart + 99; // set crawler to crawl up to 100 games per page

    // loop over the games on the page 201-300, or 501-600, etc
    for (let i = gameStart; i <= gameEnd; i++) {

      let data = {};                                  // push data to a temporary object
      addCrawlTimes(data);                            // add crawl times
      data.bggID = Crawler.getGameId(responseBuffer, queueItem, resultsCounter); // bgg id
      data.rank = i;                                  // rank of game based on incrementing on GameStart
      addTopTen(data, data.rank);                     // adds top10, top100, etc tags
      addPercentile(data, data.rank, totalRanked);    // adds top 1%, 5%, etc tags

      // check if it's ranked by bgg
      let isRanked = Crawler.checkIfRanked(responseBuffer, queueItem, resultsCounter);
      if (isRanked) { // if a game is ranked, push it up
        pushData(data, `/Rankings.json`, "POST");
      } else {
        stopCrawling = true; // set stop crawl boolean

        // save last rank to database for tomrrow's percentile calculations
        let lastRankedData = {}; // temporary object

        // build out object
        let lastRanked = data.rank - 1;
        lastRankedData.totalRankedGames = lastRanked; // set last ranked game
        addCrawlTimes(lastRankedData); // add timestamps
        lastRankedData.totalTrackedGamesAndExpansions = Crawler.getTotalTracked(responseBuffer, queueItem, resultsCounter); // get total games tracked (not ranked)

        // push last ranked game data up
        pushData(lastRankedData, `/BGG/${data.timeYMD}.json`, "PUT");

        // calculate how long the crawl took
        let crawlEndTime = new Date().getTime();
        let timeInMilliseconds = crawlEndTime - crawlStartTime;
        let crawlMinutes = Math.ceil(timeInMilliseconds/1000/60);

        //console log that everything has completed
        console.log(`:: ✓ Crawled page ${currentPage}     games ${gameStart}-${lastRanked}`);
        console.log("");
        console.log(":::::::::::::::::::::::::::::::::::::::::::::");
        console.log(`::  The Crawler stopped at game ${lastRanked}      ::`);
        console.log(`::  - Duration: ${crawlMinutes} minutes                 ::`);
        console.log(`::  - Started:  ${momentStartTime}  ::`);
        console.log(":::::::::::::::::::::::::::::::::::::::::::::");

        manipulateData.crawler();

        break;
      }

      resultsCounter++; // increment results on the page counter

    }

    // crawl next page if the crawler hasn't run into untracked games
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

  // function for checking total tracked games
  Crawler.getTotalTracked = function(buffer, queueItem, resultsNumber) {
    let $ = cheerio.load(buffer.toString("utf8"));
    let dirtyData = $(`.js-tablist`).eq(5).find('ul').find('li').eq(0).text();
    return dirtyData.replace(/\D+/g, ''); // remove everything execpt digits
  };

  // start crawl
  crawl.start();

};

module.exports = rankingsCrawlerLogic;