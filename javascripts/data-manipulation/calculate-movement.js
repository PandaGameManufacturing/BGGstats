"use strict";

// requires
let pushData = require("../push-data/push-data-serverside"),
    addCrawlTimes = require("../crawler/crawler-logic/crawl-time-formatter");

let calculateMovement = (dataToday, dataCompare, filter) => {

  return new Promise( (resolve, reject) => {

    // if there's a percentile filter, only compare top 10% games, etc
    if (filter) {

        // new arry to hold filtered data
        let filteredData = [];

        // loop over today's data
        for (let prop in dataToday) {
          // e.g if games is <= top 10% of games, keep it for comparision
          if (dataToday[prop].rank <= filter) {
            filteredData.push(dataToday[prop]);
          }
        }

      // reset today data to only include data on the correct percentile
      dataToday = filteredData;

    }



    // crunch the numbers so we know the biggest movers

    // make new objects with flatter data
    let today = {}, percentile = {}, name = {}, year = {}, image = {}, thumbnail = {}, thumbnailMini = {}, compare = {}, movement = [];

    // push today's ids and ranks to new objects
    for (let prop in dataToday) {
      let todayId = dataToday[prop].bggID;
      let todayrank = dataToday[prop].rank;
      let todayPercentile = dataToday[prop].percentile;
      let todayYear = dataToday[prop].yearPublished;
      let todayName = dataToday[prop].name;
      let todayImage = dataToday[prop].image;
      let todayThumbnail = dataToday[prop].thumbnail;
      let todayThumbnailMini = dataToday[prop].thumbnailMini;
      // add key "game":rank to today object
      today[todayId] = todayrank;
      percentile[todayId] = todayPercentile;
      year[todayId] = todayYear;
      name[todayId] = todayName;
      image[todayId] = todayImage;
      thumbnail[todayId] = todayThumbnail;
      thumbnailMini[todayId] = todayThumbnailMini;
    }

    // push compare today's Ids and ranks to new objects
    for (let prop in dataCompare) {
      let compareId = dataCompare[prop].bggID;
      let comparerank = dataCompare[prop].rank;
      compare[compareId] = comparerank;
    }

    // delete games that the have same rank or fell off the list from today object
    for (let prop in today) {
      let todayrank = today[prop];
      let todaybggID = prop;
      let comparerank = compare[todaybggID];

      // exclude games that became unranked
      if (comparerank !== undefined) {
        // if a game's rank has changed, track it

        if (todayrank !== comparerank) {
          // push change in movement to the movement array
          let object = {};
          object.movement = comparerank - todayrank;
          object.bggID = prop;
          object.rank = todayrank;
          addCrawlTimes(object);
          object.yearPublished = year[object.bggID];
          object.percentile = percentile[object.bggID];
          object.name = name[object.bggID];
          object.image = image[object.bggID];
          object.thumbnail = thumbnail[object.bggID];
          object.thumbnailMini = thumbnailMini[object.bggID];
          movement.push(object);
        }
      }
    }

    // sort movement array by movement
    movement.sort(function (a, b) {
      if (a.movement < b.movement) { return 1;  }
      if (a.movement > b.movement) { return -1; }
      return 0;
    });

    // pull top ten movements and bottom 5 movers
    let top10 = movement.slice(0, 10);
    let lastIndex = movement.length;
    let bottom5 = movement.slice(lastIndex - 5, lastIndex);

    // combine top 10 and bottom 5 into 1 array
    let prettyArray = top10.concat(bottom5);

    // add game data to database in Games collection under the game's bggID
    for (let i = 0; i < prettyArray.length; i++) {
      pushData(prettyArray[i], `/Games/${prettyArray[i].bggID}.json`, "PATCH");
    }

    // return formatted data
    resolve(prettyArray);

  });
};

module.exports = calculateMovement;