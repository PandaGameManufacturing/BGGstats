"use strict";
console.log("I'm the rankings crawler");

let database = require("../push-data/push-data-loader"),
    Crawler = require("simplecrawler"),
    rankObject = {
      Name: null,
      BggId: null,
      Rank: null,
      Top10: null,
      Top100: null,
      Bottom5: null,
      Year: null,
      CrawlDate: null,
      CrawlSnapShot: null
    };

let crawl = Crawler("http://boardgamegeek.com/browse/boardgame")
    .on("fetchcomplete", function () {
        console.log("You fetched a resource!");

        // push data to rankObject
        rankObject.Name = "test name";
        rankObject.Year = 2016;

        // push up data to firebase
        console.log("You built an object:", rankObject);
        database.pushRankData(rankObject);
    });

crawl.on("fetchcomplete", function(queueItem, responseBuffer, response) {
    console.log("I just received %s (%d bytes)", queueItem.url, responseBuffer.length);
    console.log("It was a resource of type %s", response.headers['content-type']);
});

// crawl settings
crawl.maxDepth = 1;

// start crawl
crawl.start();