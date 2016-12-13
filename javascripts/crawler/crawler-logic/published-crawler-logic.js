"use strict";
console.log("I'm the published crawler");

let database = require("../../push-data/push-data-loader"),
    addCrawlTimes = require("./crawl-time-formatter"),
    Crawler = require("simplecrawler"),
    cheerio = require("cheerio");

let publishedCrawlerLogic = function(url) {

  // set url to crawl
  let crawl = Crawler(`${url}`)
    .on("fetchcomplete", function () { console.log("You fetched a resource!"); });

  crawl.on("fetchcomplete", function(queueItem, responseBuffer, response) {
    console.log("I just received %s (%d bytes)", queueItem.url, responseBuffer.length);
    console.log("It was a resource of type %s", response.headers['content-type']);

      // push data to a temporary object
      let data = {};

      data.pages = Crawler.getNumberOfPages(responseBuffer, queueItem);
      console.log("pages:", data.pages);

      addCrawlTimes(data); // crawl time data
      console.log("data:", data);

      // push object within a collection that's the YYYYMMDD
      database.pushData(data, `/GamesPublished/${data.CrawlYMD}.json`);
  });

  // crawl settings
  crawl.maxDepth = 1;

  // function for targeting game id
  Crawler.getNumberOfPages = function(buffer, queueItem) {
    console.log("getNumberOfPages function ran");
    let $ = cheerio.load(buffer.toString("utf8"));
    return $('title="last page"').text();
    };

  // start crawl
  crawl.start();

};

module.exports = publishedCrawlerLogic;