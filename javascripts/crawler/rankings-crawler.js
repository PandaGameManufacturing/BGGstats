"use strict";
console.log("I'm the rankings crawler");

let database = require("../push-data/push-data-loader"),
    addCrawlTimes = require("./crawl-time-formatter"),
    Crawler = require("simplecrawler"),
    cheerio = require("cheerio"),
    data = {
      BggId: null,
    };

let gameTarget = 23;

// set url
let crawl = Crawler("http://boardgamegeek.com/browse/boardgame")
  .on("fetchcomplete", function () { console.log("You fetched a resource!"); });

crawl.on("fetchcomplete", function(queueItem, responseBuffer, response) {
  console.log("I just received %s (%d bytes)", queueItem.url, responseBuffer.length);
  console.log("It was a resource of type %s", response.headers['content-type']);

  // push data to a temporary object
  data.Name = Crawler.getGameName(responseBuffer, queueItem, gameTarget);     // name
  data.Rank = gameTarget;                                                     // rank
  if (gameTarget <= 10) { data.Top10 = true;} else {data.Top10 = false;}      // top 10 boolean
  if (gameTarget <= 100) { data.Top100 = true;} else {data.Top100 = false;}   // top 100 boolean
  addCrawlTimes(data);                                                        // crawl time data

  // console log out data about to be pushed
  console.log("You built an object:", data);

  // push object within a collection that's the YYYYMMDD
  database.pushData(data, `/GameRank/${data.CrawlYMD}.json`);

});

// crawl settings
crawl.maxDepth = 1;

// functions for targeting the data I want
Crawler.getGameName = function(buffer, queueItem, gameNumber) {
  let $ = cheerio.load(buffer.toString("utf8"));
  return $(`#results_objectname${gameNumber}`).find('a').text();
  };

// start crawl
crawl.start();