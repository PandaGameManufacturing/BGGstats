"use strict";

let pushData = require("../push-data/push-data-serverside");

let pushUpMovementData = (data, today, todayGames) => {
    // convert ids of movement games to game objects
    getGameObjects(data.todayMovement, todayGames);
    getGameObjects(data.weekMovement, todayGames);
    getGameObjects(data.weekMovement1000, todayGames);
    getGameObjects(data.todayMovement1000, todayGames);

    // create structure for compiled data
    let chartData = {};

    chartData.movementDay = {
      positive: [],
      negative: []
    };

    chartData.movementWeek = {
      positive: [],
      negative: []
    };

    chartData.movementWeek1000 = {
      positive: [],
      negative: []
    };

    chartData.movementToday1000 = {
      positive: [],
      negative: []
    };

    // put today movement data in correct place
    for (let i = 0; i < 10; i++) {
      chartData.movementDay.positive.push(data.todayMovement[i]);
    }
    for (let i = 10; i < 15; i++) {
      chartData.movementDay.negative.push(data.todayMovement[i]);
    }

    // put week movement data in correct place
    for (let i = 0; i < 10; i++) {
      chartData.movementWeek.positive.push(data.weekMovement[i]);
    }
    for (let i = 10; i < 15; i++) {
      chartData.movementWeek.negative.push(data.weekMovement[i]);
    }

    // put day 1,000 movement data in correct place
    for (let i = 0; i < 10; i++) {
      chartData.movementToday1000.positive.push(data.todayMovement1000[i]);
    }
    for (let i = 10; i < 15; i++) {
      chartData.movementToday1000.negative.push(data.todayMovement1000[i]);
    }

    // put week 1,000 movement data in correct place
    for (let i = 0; i < 10; i++) {
      chartData.movementWeek1000.positive.push(data.weekMovement1000[i]);
    }
    for (let i = 10; i < 15; i++) {
      chartData.movementWeek1000.negative.push(data.weekMovement1000[i]);
    }

    // push up movement chart data
    pushData(chartData, `/Charts/${today}.json`, "PATCH");
    console.log(":: ✓ Data pushed up to database");
    console.log("::    - Movement data pushed up");

};

module.exports = pushUpMovementData;

// function that takes an array of ids and changes it to an array of game objects
function getGameObjects(arrayOfIds, todayGames) {
  // iterate over all of the games from today
  for (let prop in todayGames) {
    // iterate over game ids in an array
    for (let i = 0; i < arrayOfIds.length; i++) {
      // if the bggId or gameId matches...
      if (todayGames[prop].bggID === arrayOfIds[i]) {
        // set that array index to the whole game object
        arrayOfIds[i] = todayGames[prop];
        // start looping back over when there is a match
        break;
      }
    }
  }
}