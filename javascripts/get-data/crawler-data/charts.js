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
  if (!isDataEmpty(getData(`${baseURL}${collection}/${subcollection}.json`))) {
    // if today's data is there return today's data
    let today = getData(`${baseURL}${collection}/${subcollection}.json`);
    return today;
  } else {
    // if it doesn't exist, return yesterday's data
    let yesterday = getData(`${baseURL}${collection}/${backup}.json`);
    console.log("data from today not found. serving data from yesterday");
    return yesterday;
  }
};

module.exports = getCharts;