"use strict";

console.log("I'm the rankings crawler");

let Crawler = require("simplecrawler");

let crawl = Crawler("http://boardgamegeek.com/browse/boardgame")
    .on("fetchcomplete", function () {
        console.log("You fetched a resource!");
    });

crawl.maxDepth = 1;

crawl.on("fetchcomplete", function(queueItem, responseBuffer, response) {
    console.log("I just received %s (%d bytes)", queueItem.url, responseBuffer.length);
    console.log("It was a resource of type %s", response.headers['content-type']);
});

crawl.start();