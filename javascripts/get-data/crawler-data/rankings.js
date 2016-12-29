"use strict";

// requires
let getData = require("../get-data-serverside"),
    getToday = require("../../assets/get-date");

// URL config
let baseURL      = "https://bggstats-2de27.firebaseio.com",
    collection   = "/Rankings",
    tag          = "timeYMD";

let getRankings = date => {
  // base url then path
  return getData(`${baseURL}`, `${collection}.json?orderBy=%22${tag}%22&equalTo=%22${date}%22`);
};

module.exports = getRankings;