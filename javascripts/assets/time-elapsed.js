"use strict";

// function takes crawl time in milliseconds and return hours since last crawl
let timeElapsed = crawlTime => {
  let lastCrawlTime = crawlTime;
  let today = new Date();
  let nowMilliseconds = today.getTime();
  let differenceMilliseconds =  nowMilliseconds - lastCrawlTime;
                                    // milli  sec  min
  let hours = differenceMilliseconds / 1000 / 60 / 60;
  return Math.ceil(hours);
};

module.exports = timeElapsed;