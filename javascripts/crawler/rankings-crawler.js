"use strict";
console.log("I'm the rankings crawler");

let database = require("../push-data/push-data-loader"),
    addCrawlTimes = require("./crawl-time-formatter"),
    Crawler = require("simplecrawler"),
    data = {
      Name: null,
      BggId: null,
      Rank: null,
      Top10: null,
      Top100: null
    };

addCrawlTimes(data); // add crawl time in different formats to object

let crawl = Crawler("http://boardgamegeek.com/browse/boardgame")
    .on("fetchcomplete", function () {
        console.log("You fetched a resource!");

        // push data to data
        data.Name = "test name";

        // push up data to firebase
        console.log("You built an object:", data);

        // push object within a collection that's the YYYYMMDD
        database.pushData(data, `/GameRank/${data.CrawlYMD}.json`);

    });

crawl.on("fetchcomplete", function(queueItem, responseBuffer, response) {
    console.log("I just received %s (%d bytes)", queueItem.url, responseBuffer.length);
    console.log("It was a resource of type %s", response.headers['content-type']);
});

// crawl settings
crawl.maxDepth = 1;

// start crawl
crawl.start();