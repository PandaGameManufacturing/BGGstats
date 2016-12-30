"use strict";

let getPrettyDate = require("../../assets/get-date");

 // time TIME FORMATS
  // timeYear         YYYY as number
  // timeYMD          YYYYMMDD as string
  // timeMilliseconds milliseconds since 1970

let addCrawlTimes = function(object) {
  let date = new Date();
  object.timeYMD = "1000";
  // object.timeYMD = getPrettyDate();
  object.timeYear = date.getFullYear();
  object.timeMilliseconds = date.getTime();
};

module.exports = addCrawlTimes;