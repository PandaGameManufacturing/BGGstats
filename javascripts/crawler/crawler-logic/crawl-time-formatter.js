"use strict";

let getPrettyDate = require("../../assets/get-date");

 // CRAWL TIME FORMATS
  // CrawlYear         YYYY as number
  // CrawlYMD          YYYYMMDD as string
  // CrawlISO          ISO 8601 format
  // CrawlLocal        human-readable army time date and time
  // CrawlMilliseconds milliseconds since 1970

let addCrawlTimes = function(object) {
  let date = new Date();
  object.CrawlISO = date;
  object.CrawlLocal = date.toTimeString();
  object.CrawlYMD = getPrettyDate();
  object.CrawlYear = date.getFullYear();
  object.CrawlMilliseconds = date.getTime();
};

module.exports = addCrawlTimes;