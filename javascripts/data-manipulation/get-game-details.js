"use strict";

// requires
let getData = require("../get-data/get-data-serverside"),
    pushData = require("../push-data/push-data-serverside"),
    formatAPIdata = require("./format-api-data"),
    addCrawlTimes = require("../crawler/crawler-logic/crawl-time-formatter");

// This function takes an array of ids, gets game details for the ids, and pushes up details to the correct place
let getGameDetails = array => {

  return new Promise( (resolve, reject) => {

    // make API calls for the array of games
    let promises = [];
    for (let i = 0; i < array.length; i++) {

      // set location of API calls and insert id
      let host = `https://boardgamegeek.com`;
      let path = `/xmlapi2/thing?id=${array[i]}&stats=1`;
      let p = getData(host, path);
      promises.push(p);
    }

    // once the API calls are done, push up game data
    Promise.all(promises).then(gameDataArray => {
      // format games
      let formattedGames = formatAPIdata(gameDataArray);

      // add game data to database in Games collection under the game's bggID
      for (let i = 0; i < formattedGames.length; i++) {
        console.log("formattedGames:", formattedGames[i]);
        addCrawlTimes(formattedGames[i]); // add crawl times tied to pushing up game details
        // let data = JSON.stringify(formattedGames[i]); // convert from an object to JSON
        pushData(formattedGames[i], `/Games/${formattedGames[i].bggID}.json`, "PATCH");
      }

      resolve(formattedGames);

    });


  });

};

module.exports = getGameDetails;