"use strict";
console.log("I'm the rankings crawler");

let database = require("../push-data/push-data-loader"),
    getPrettyDate = require("../assets/get-date"),
    Crawler = require("simplecrawler"),
    data = {
      Name: null,
      BggId: null,
      Rank: null,
      Top10: null,
      Top100: null,
      CrawlYear: null,      // YYYY as number
      CrawlDate: null,      // YYYYMMDD as string
      CrawlMoment: null,    // ISO 8601 format
      CrawlSnapShot: null   // full army-time date and time
    };

// gather dates
let date = new Date();
data.CrawlSnapShot = date.toTimeString();
data.CrawlMoment = date;
data.CrawlDate = getPrettyDate();
data.CrawlYear = date.getFullYear();

let crawl = Crawler("http://boardgamegeek.com/browse/boardgame")
    .on("fetchcomplete", function () {
        console.log("You fetched a resource!");

        // push data to data
        data.Name = "test name";

        // push up data to firebase
        console.log("You built an object:", data);
        database.pushData(data, `/GameRank/${data.CrawlDate}.json`);
        // push object within a collection that's the YYYYMMDD
    });

crawl.on("fetchcomplete", function(queueItem, responseBuffer, response) {
    console.log("I just received %s (%d bytes)", queueItem.url, responseBuffer.length);
    console.log("It was a resource of type %s", response.headers['content-type']);
});

// crawl settings
crawl.maxDepth = 1;

// start crawl
crawl.start();