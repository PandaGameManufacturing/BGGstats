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
    t = require("exectimer"),
    manipulateData = require("../../data-manipulation/data-manipulation-loader");

// start timer for total crawl time
var tick = new t.Tick("TIMER");
tick.start();

let rankingsCrawlerLogic = function(url, gameStart, currentPage, totalRanked, callback) {

  let resultsCounter = 1, // BGG id for 100 results on page. resets after function runs
      stopCrawling = false, // trigger for crawling next page
      momentStartTime = moment().format('llll'); // Tue, Dec 20, 2016 2:17 PM

  // set url to crawl
  let crawl = Crawler(`${url}`)
  .on("fetchcomplete", function(queueItem, responseBuffer, response) {
    // display when new page is fetched
    // console.log(`::   Fetched Page ${currentPage}     ${queueItem.url}`);

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

        // end timer
        tick.stop();
        let myTimer = t.timers.TIMER,
            ticks = myTimer.duration(),
            seconds = ticks/1000000000,
            avgTime = Math.round(seconds/lastRanked * 100) / 100,
            minutes = Math.ceil(seconds/60),
            gamesPerMin = Math.round(lastRanked/minutes * 100) / 100;

        //console log that everything has completed
        console.log(`:: ✓ Crawled page ${currentPage}     games ${numberWithCommas(gameStart)} - ${numberWithCommas(lastRanked)}`);
        console.log("");
        console.log("::::::::::::::::::::::::::::::::::::::::::::::::::");
        console.log(`:: ✓ The Crawler stopped`);
        console.log(`::`);
        console.log(`::   Total Games Crawled   ${numberWithCommas(lastRanked)}`);
        console.log(`::   Crawl Duration        ${minutes} minutes`);
        console.log(`::   Avg. Processing Time  ${avgTime} seconds`);
        console.log(`::   Games Per Minute      ${gamesPerMin} games/min`);
        console.log(`::   Crawl Started         ${momentStartTime}`);
        console.log("");


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
    // pull href path
    let hrefData = $(`#results_objectname${resultsNumber}`).find('a').attr("href");
    // pull out href="boardgame/148943/ from stuff like href="/boardgame/148943/coup-rebellion-g54" to exclude non-bggId numbers
    let smallerPath = hrefData.match(/boardgame\/(.*?)\//);
    // remove everything execpt digits on first match
    let prettyData = smallerPath[0].replace(/\D+/g, '');
    return prettyData;
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

  // function to add commas to large numbers
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


  // start crawl
  crawl.start();

};


module.exports = rankingsCrawlerLogic;