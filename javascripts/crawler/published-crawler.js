// "use strict";

// let publishedCrawler = require("./crawler-logic/published-crawler-logic"),
//     cron = require("node-cron");

// let year = 2016;

// // advanced search for board games (minus expansions) by a publish year
// let baseURL = `https://boardgamegeek.com/geeksearch.php?action=search&advsearch=1&objecttype=boardgame&q=&range%5Byearpublished%5D%5Bmin%5D=${year}&range%5Byearpublished%5D%5Bmax%5D=${year}&nosubtypes%5B%5D=boardgameexpansion&B1=Submit`;

// // run this crawl at 00:05 every day
// // cron.schedule('5 0 * * *', () => {
//   console.log(":: Published Crawler Booting Up ::");
//   publishedCrawler(baseURL);
// // });