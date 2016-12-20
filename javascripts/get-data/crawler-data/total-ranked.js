"use strict";

// requires
let getData = require("../get-data-serverside"),
    getDateMinus = require("../../assets/get-date");

// URL config
let baseURL    = "https://bggstats-2de27.firebaseio.com/",
    collection = "BGG",
    subcollection = getDateMinus(1); // get yesterday's data since we don't have today's yet

let getTotalRanked = () => {
  return getData(`${baseURL}${collection}/${subcollection}.json`);
};

module.exports = getTotalRanked;