"use strict";

let pushData = require("../push-data/push-data-serverside");

let weekChange = (dataToday, dataCompare) => {

  return new Promise( (resolve, reject) => {

    // crunch the numbers so we know the biggest movers

    // make new objects with flatter data
    let today = {}, compare = {}, movement = [];

    // push today's ids and ranks to new objects
    for (let prop in dataToday) {
      let todayId = dataToday[prop].bggID;
      let todayrank = dataToday[prop].rank;
      // add key "game":rank to today object
      today[todayId] = todayrank;
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
          object.movementWeek = comparerank - todayrank;
          object.bggID = prop;

          movement.push(object);
        }
      }
    }

    // sort movement array by movement
    movement.sort(function (a, b) {
      if (a.movementWeek < b.movementWeek) { return 1;  }
      if (a.movementWeek > b.movementWeek) { return -1; }
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
       pushData(prettyArray[i], `Games/{prettyArray[i].bggID}`, "PATCH");
    }

    console.log(":: ✓ Game movement for biggest movers pushed to database ");

    // return formatted data
    resolve(prettyArray);
    // console.log("prettyArray:", prettyArray);

  });
};

module.exports = {weekChange};