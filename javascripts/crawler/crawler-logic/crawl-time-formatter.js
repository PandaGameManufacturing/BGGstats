"use strict";

let getPrettyDate = require("../../assets/get-date");

 // time TIME FORMATS
  // timeYear         YYYY as number
  // timeYMD          YYYYMMDD as string
  // timeISO          ISO 8601 format
  // timeLocal        human-readable army time date and time
  // timeMilliseconds milliseconds since 1970

let addCrawlTimes = function(object) {
  let date = new Date();
  // object.timeISO = date;
  // object.timeLocal = date.toTimeString();
  object.timeYMD = getPrettyDate();
  object.timeYear = date.getFullYear();
  object.timeMilliseconds = date.getTime();
};

module.exports = addCrawlTimes;