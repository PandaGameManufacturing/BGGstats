"use strict";

// requires
let getData = require("../get-data/get-data-serverside"),
    pushData = require("../push-data/push-data-serverside"),
    formatAPIdata = require("./format-api-data"),
    addCrawlTimes = require("../crawler/crawler-logic/crawl-time-formatter");

let promises = [];

// This function takes an array of ids and returns game objects via bgg api
let getGameDetails = array => {

  return new Promise( (resolve, reject) => {

    // get 5 hotness game details
    for (let i = 0; i < array.length; i ++) {
     // set location of API calls and insert id
      let host = `bgg-json.azurewebsites.net`;
      let path = `/thing/${array[i]}`;
      let p = getData(host, path);
      promises.push(p);
    }

  // once all API calls are done, return game objects
    Promise.all(promises).then(gameDataArray => {
      resolve(formatAPIdata.azure(gameDataArray));
    });

  });
};


module.exports = getGameDetails;