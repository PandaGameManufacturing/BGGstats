"use strict";

// requires
let getData = require("../get-data/get-data-serverside"),
    pushData = require("../push-data/push-data-serverside");

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

      // format and push up each game
      for (let i = 0; i < gameDataArray.length; i++) {

        // map data
        let name = gameDataArray[i].items.item[0].name[0].$.value;

        // console.log(`Game ${i+1} Name: ${name}`);

      }



    });

    resolve(15);
  });

};

module.exports = getGameDetails;