"use strict";

let rankingsCrawler = require("./crawler-logic/rankings-crawler-logic");

// crawl first 100 pages on page 1
for (let i = 1; i <= 100; i++) {
  let gameTarget = i;
  let url = "http://boardgamegeek.com/browse/boardgame";
  rankingsCrawler(gameTarget, url);
}