"use strict";

let rankingsCrawler = require("./crawler-logic/rankings-crawler-logic"),
    cron = require("node-cron");

let baseURL = "http://boardgamegeek.com/browse/boardgame";

let pg1config  = { "gameStart":   1, "gameEnd":  100, "url": `${baseURL}`         },
    pg2config  = { "gameStart": 101, "gameEnd":  200, "url": `${baseURL}/page/2`  },
    pg3config  = { "gameStart": 201, "gameEnd":  300, "url": `${baseURL}/page/3`  },
    pg4config  = { "gameStart": 301, "gameEnd":  400, "url": `${baseURL}/page/4`  },
    pg5config  = { "gameStart": 401, "gameEnd":  500, "url": `${baseURL}/page/5`  },
    pg6config  = { "gameStart": 501, "gameEnd":  600, "url": `${baseURL}/page/6`  },
    pg7config  = { "gameStart": 601, "gameEnd":  700, "url": `${baseURL}/page/7`  },
    pg8config  = { "gameStart": 701, "gameEnd":  800, "url": `${baseURL}/page/8`  },
    pg9config  = { "gameStart": 801, "gameEnd":  900, "url": `${baseURL}/page/9`  },
    pg10config = { "gameStart": 901, "gameEnd": 1000, "url": `${baseURL}/page/10` };

  console.log(":: Rankings Crawler Booting Up ::");
  rankingsCrawler(pg1config.gameStart,  pg1config.gameEnd,  pg1config.url);  // crawl page 1
  rankingsCrawler(pg2config.gameStart,  pg2config.gameEnd,  pg2config.url);  // crawl page 2
  rankingsCrawler(pg3config.gameStart,  pg3config.gameEnd,  pg3config.url);  // crawl page 3
  rankingsCrawler(pg4config.gameStart,  pg4config.gameEnd,  pg4config.url);  // crawl page 4
  rankingsCrawler(pg5config.gameStart,  pg5config.gameEnd,  pg5config.url);  // crawl page 5
  rankingsCrawler(pg6config.gameStart,  pg6config.gameEnd,  pg6config.url);  // crawl page 6
  rankingsCrawler(pg7config.gameStart,  pg7config.gameEnd,  pg7config.url);  // crawl page 7
  rankingsCrawler(pg8config.gameStart,  pg8config.gameEnd,  pg8config.url);  // crawl page 8
  rankingsCrawler(pg9config.gameStart,  pg9config.gameEnd,  pg9config.url);  // crawl page 9
  rankingsCrawler(pg10config.gameStart, pg10config.gameEnd, pg10config.url); // crawl page 10