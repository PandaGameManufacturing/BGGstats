"use strict";

// requires
let getData = require("../get-data/get-data-serverside"),
    pushData = require("../push-data/push-data-serverside"),
    formatAPIdata = require("./format-api-data");

let getGameDetails = array => {

  return new Promise( (resolve, reject) => {

    // make API calls for the array of games
    let promises = [];
    for (let i = 0; i < array.length; i++) {
      // set location of API calls and insert id
      let url = `https://bgg-api.herokuapp.com/api/v1/thing?id=${array[i].bggID}&stats=1`;
      let p = getData(url);
      promises.push(p);
    }

    // once the API calls are done, push up game data
    Promise.all(promises).then(gameDataArray => {

      // format games
      let formattedGames = formatAPIdata(gameDataArray);

      // add game data to database in Games collection under the game's bggID
      for (let i = 0; i < formattedGames.length; i++) {
        pushData(formattedGames[i], `/Games/${formattedGames[i].bggID}.json`, "PATCH");
      }

      console.log(":: ✓ Game details for biggest movers pushed to database ");
      resolve(formattedGames);

    });


  });

};

module.exports = getGameDetails;