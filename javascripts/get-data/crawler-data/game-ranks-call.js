"use strict";

// requires
let getData = require("../get-data-clientside"),
    getToday = require("../../assets/get-date");

// URL config
let baseURL      = "https://bggstats-2de27.firebaseio.com",
    collection   = "/GameRank",
    tag          = "CrawlYMD",
    today_       = getToday();

// tagValue is a custom tag that lets me pull down using two queries
// it's workaround since you can't use ?orderBy= twice in a firebase query

let today = () => {
  // base url then path
  return getData(`${baseURL}`, `${collection}.json?orderBy=%22${tag}%22&equalTo=%22${today_}%22`);
};

let compareDate = compareDate_ => {
  // base url then path
  return getData(`${baseURL}`, `${collection}.json?orderBy=%22${tag}%22&equalTo=%22${compareDate_}%22`);
};

module.exports = {today, compareDate};