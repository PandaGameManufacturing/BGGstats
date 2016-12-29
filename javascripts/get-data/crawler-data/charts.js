"use strict";

// requires
let getData = require("../get-data-clientside"),
    getToday = require("../../assets/get-date"),
    isDataEmpty = require("../../assets/empty-data-checker");

// URL config
let baseURL       = "https://bggstats-2de27.firebaseio.com",
    collection    = "/Charts",
    subcollection = getToday(),
    backup        = getToday(1); // today minus 1 day

let getCharts = () => {
  if (isDataEmpty(getData(`${baseURL}${collection}/${subcollection}.json`))) {
    // if it doesn't exist, return yesterday's data
    return getData(`${baseURL}${collection}/${backup}.json`);
  } else {
    // if today's data is there, return today's data
    return getData(`${baseURL}${collection}/${subcollection}.json`);
  }
};

module.exports = getCharts;