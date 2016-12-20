"use strict";

let database = require("../../database-settings/database-settings"),
    pushData = require("../../push-data/push-data-serverside"),
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
      addCrawlTimes(data);                                                            // crawl time data
      let BggUrl = Crawler.getGameId(responseBuffer, queueItem, resultsCounter);      // bgg id
      data.BggId = BggUrl.replace(/\D+/g, ''); // remove everything execpt digits
      let GameYear = Crawler.getGameYear(responseBuffer, queueItem, resultsCounter);  // bgg year
      data.BggYear = GameYear.replace(/\D+/g, ''); // remove everything execpt digits
      data.Name = Crawler.getGameName(responseBuffer, queueItem, resultsCounter);     // name
      resultsCounter++; // BGG id for 100 results on page
      data.Rank = i;                                                                  // rank
      if (i <= 10) {
        data.Top10 = true; // top 10 boolean
        data.Top10Tag = `${data.CrawlYMD}_Top10_true`; // top10 tag to pull down top10 with a date in one call
      } else {
        data.Top10 = false;
        data.Top10Tag = `${data.CrawlYMD}_Top10_false`;

      }
      if (i <= 100) {
        data.Top100 = true; // top 100 boolean
        data.Top100Tag = `${data.CrawlYMD}_Top100_true`; // top100 tag to pull down top100 with a date in one call
      } else {
        data.Top100 = false;
        data.Top100Tag = `${data.CrawlYMD}_Top100_false`;
      }

      // push object within a collection that's the YYYYMMDD
      // push.pushData(data, `/GameRank/${data.CrawlYMD}.json`);
      pushData(data, `/GameRank.json`, "POST");

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

  // function for game year
  Crawler.getGameYear = function(buffer, queueItem, resultsNumber) {
    let $ = cheerio.load(buffer.toString("utf8"));
    return $(`#results_objectname${resultsNumber}`).find('span').text();
    };

  // start crawl
  crawl.start();

};

module.exports = rankingsCrawlerLogic;