"use strict";

let database = require("../../database-settings/database-settings"),
    pushData = require("../../push-data/push-data-loader"),
    addCrawlTimes = require("./crawl-time-formatter"),
    addTopTen = require("./top10-formatter"),
    addPercentile = require("./percentile-formatter"),
    Crawler = require("simplecrawler"),
    cheerio = require("cheerio");

let rankingsCrawlerLogic = function(gameStart, url, totalRanked, callback) {
  console.log("total ranked from within crawler:", totalRanked);


  let resultsCounter = 1; // BGG id for 100 results on page

  // set url to crawl
  let crawl = Crawler(`${url}`)
    .on("fetchcomplete", function () { console.log("You fetched a resource!"); });

  crawl.on("fetchcomplete", function(queueItem, responseBuffer, response) {
    console.log("I just received %s (%d bytes)", queueItem.url, responseBuffer.length);
    console.log("It was a resource of type %s", response.headers['content-type']);


    // loop over the games on the page 201-300, or 501-600, etc
    let gameEnd = gameStart + 99;

    for (let i = gameStart; i <= gameEnd; i++) {

      // push data to a temporary object
      let data = {};
      addCrawlTimes(data);                                                            // crawl time data
      let BggUrl = Crawler.getGameId(responseBuffer, queueItem, resultsCounter);      // bgg id
      data.bggID = BggUrl.replace(/\D+/g, ''); // remove everything execpt digits
      resultsCounter++; // BGG id for 100 results on page
      data.Rank = i;
      addTopTen(data, data.Rank);
      addPercentile(data, data.Rank, totalRanked);
      pushData.post(data, `/Rankings.json`);
    }

    callback(gameEnd, totalRanked);

  });

  // crawl settings
  crawl.maxDepth = 1;

  // function for targeting game id
  Crawler.getGameId = function(buffer, queueItem, resultsNumber) {
    let $ = cheerio.load(buffer.toString("utf8"));
    return $(`#results_objectname${resultsNumber}`).find('a').attr("href");
    };

  // start crawl
  crawl.start();

};

module.exports = rankingsCrawlerLogic;