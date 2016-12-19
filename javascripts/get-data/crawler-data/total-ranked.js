"use strict";

// requires
let getData = require("../get-data-serverside"),
    getToday = require("../../assets/get-date");

// URL config
let baseURL    = "https://bggstats-2de27.firebaseio.com/",
    collection = "BGG",
    subcollection = getToday(),
    url = `${baseURL}${collection}/${subcollection}.json`;
    console.log("url I'm getting:", url);

// tagValue is a custom tag that lets me pull down using two queries
// it's workaround since you can't use ?orderBy= twice in a firebase query

let getTotalRanked = () => {
  return getData(url);
};

module.exports = getTotalRanked;