"use strict";
console.log("I'm the rankings crawler");

let database = require("../../push-data/push-data-loader"),
    addCrawlTimes = require("./crawl-time-formatter"),
    Crawler = require("simplecrawler"),
    cheerio = require("cheerio");

let rankingsCrawlerLogic = function(gameStart, gameEnd, url) {

  let resultsCounter = 1; // BGG id for 100 results on page

  // set url to crawl
  let crawl = Crawler(`${url}`)
    .on("fetchcomplete", function () { console.log("You fetched a resource!"); });

  crawl.on("fetchcomplete", function(queueItem, responseBuffer, response) {
    console.log("I just received %s (%d bytes)", queueItem.url, responseBuffer.length);
    console.log("It was a resource of type %s", response.headers['content-type']);

    // loop over the games on the page 201-300, or 501-600, etc
    for (let i = gameStart; i <= gameEnd; i++) {

      // push data to a temporary object
      let data = {};
      let BggUrl = Crawler.getGameId(responseBuffer, queueItem, resultsCounter);      // bgg id
      data.Name = Crawler.getGameName(responseBuffer, queueItem, resultsCounter);     // name
      resultsCounter++; // BGG id for 100 results on page
      data.Rank = i;                                                                  // rank
      if (i <= 10) { data.Top10 = true;} else {data.Top10 = false;}                   // top 10 boolean
      if (i <= 100) { data.Top100 = true;} else {data.Top100 = false;}                // top 100 boolean
      addCrawlTimes(data);                                                            // crawl time data

      // call this at the end so getGameId has time to do it's thing
      data.BggId = BggUrl.replace(/\D+/g, ''); // remove everything execpt digits

      // push object within a collection that's the YYYYMMDD
      // database.pushData(data, `/GameRank/${data.CrawlYMD}.json`);
      database.pushData(data, `/GameRank/20161122.json`);

    }
  });

  // crawl settings
  crawl.maxDepth = 1;

  // function for targeting game name
  Crawler.getGameName = function(buffer, queueItem, resultsNumber) {
    let $ = cheerio.load(buffer.toString("utf8"));
    return $(`#results_objectname${resultsNumber}`).find('a').text();
    };

  // function for targeting game id
  Crawler.getGameId = function(buffer, queueItem, resultsNumber) {
    let $ = cheerio.load(buffer.toString("utf8"));
    return $(`#results_objectname${resultsNumber}`).find('a').attr("href");
    };

  // start crawl
  crawl.start();

};

module.exports = rankingsCrawlerLogic;