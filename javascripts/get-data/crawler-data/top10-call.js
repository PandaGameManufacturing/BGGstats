"use strict";

// requires
let getData = require("../get-data-serverside"),
    getToday = require("../../assets/get-date");

// URL config
let baseURL    = "https://bggstats-2de27.firebaseio.com/",
    collection = "Rankings",
    tag        = "time_top10",
    today      = getToday(),
    tagValue   = `${today}_top10_true`;

// tagValue is a custom tag that lets me pull down using two queries
// it's workaround since you can't use ?orderBy= twice in a firebase query

let getCrawlTop10 = () => {
  // base url then path
  return getData(`${baseURL}`, `${collection}.json?orderBy=%22${tag}%22&equalTo=%22${tagValue}%22`);
};

module.exports = getCrawlTop10;