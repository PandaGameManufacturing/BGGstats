"use strict";

let rankingsCrawler = require("./crawler-logic/rankings-crawler-logic");

  let gameStart = 1,
      gameEnd   = 100,
      url       = "http://boardgamegeek.com/browse/boardgame";

  // crawl page 1
  rankingsCrawler(gameStart, gameEnd, url);