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

  let today = getData(`${baseURL}${collection}/${subcollection}.json`);

  return today.then( todayRawData => {
    let todayData = JSON.parse(todayRawData);
    let doesTodayHaveData = !isDataEmpty(todayData);
    if (doesTodayHaveData) {
      // if today's data is there return today's data
      return todayData;
    } else {
      // if it doesn't exist, return yesterday's data
      let yesterday = getData(`${baseURL}${collection}/${backup}.json`);
      return yesterday.then( yesterdayRawData => {
        return JSON.parse(yesterdayRawData);
      });
    }
  });
};

module.exports = getCharts;