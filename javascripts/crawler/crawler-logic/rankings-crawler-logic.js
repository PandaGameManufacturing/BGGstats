"use strict";
console.log("I'm the rankings crawler");

let database = require("../../push-data/push-data-loader"),
    addCrawlTimes = require("./crawl-time-formatter"),
    Crawler = require("simplecrawler"),
    cheerio = require("cheerio"),
    data = {};

let rankingsCrawlerLogic = function(gameStart, gameEnd, url) {

  // set url to crawl
  let crawl = Crawler(`${url}`)
    .on("fetchcomplete", function () { console.log("You fetched a resource!"); });

  crawl.on("fetchcomplete", function(queueItem, responseBuffer, response) {
    console.log("I just received %s (%d bytes)", queueItem.url, responseBuffer.length);
    console.log("It was a resource of type %s", response.headers['content-type']);

    // loop over the games on the page
    for (let i = gameStart; i <= gameEnd; i++) {

      // push data to a temporary object
      data.Name = Crawler.getGameName(responseBuffer, queueItem, i);     // name
      let BggUrl = Crawler.getGameId(responseBuffer, queueItem, i);      // bgg id
      data.BggId = BggUrl.replace(/\D+/g, ''); // remove everything execpt digits
      data.Rank = i;                                                     // rank
      if (i <= 10) { data.Top10 = true;} else {data.Top10 = false;}      // top 10 boolean
      if (i <= 100) { data.Top100 = true;} else {data.Top100 = false;}   // top 100 boolean
      addCrawlTimes(data);                                                        // crawl time data

      // push object within a collection that's the YYYYMMDD
      database.pushData(data, `/GameRank/${data.CrawlYMD}.json`);

    }

  });

  // crawl settings
  crawl.maxDepth = 1;

  // function for targeting game name
  Crawler.getGameName = function(buffer, queueItem, gameNumber) {
    let $ = cheerio.load(buffer.toString("utf8"));
    return $(`#results_objectname${gameNumber}`).find('a').text();
    };

  // function for targeting game id
  Crawler.getGameId = function(buffer, queueItem, gameNumber) {
    let $ = cheerio.load(buffer.toString("utf8"));
    return $(`#results_objectname${gameNumber}`).find('a').attr("href");
    };

  // start crawl
  crawl.start();

};

module.exports = rankingsCrawlerLogic;