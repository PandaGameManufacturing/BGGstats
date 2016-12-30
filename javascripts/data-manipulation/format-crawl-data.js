"use strict";

// requires
let getDateMinus = require("../assets/get-date"),
    getTodayData = require("./get-today-rankings"),
    getCompareData = require("./get-compare-rankings"),
    calculateMovement = require("./calculate-movement"),
    getGameDetails = require("./get-game-details"),
    getData = require("../get-data/get-data-loader"),
    pushData = require("../push-data/push-data-serverside"),
    getCrawlTimes = require("../crawler/crawler-logic/crawl-time-formatter");


// configuration options
let today          = getDateMinus(5),
    compareString  = "yesterday",     // for console logs
    compareDate    = getDateMinus(6), // compare to a week back
    fallbackString = "2 days ago",     // for console logs
    fallbackDate   = getDateMinus(7);  // compare to 2 days ago instead

let formatCrawlData = () => {

  console.log("::::::::::::::::::::::::::::::::::::::::::::::::::");
  console.log("::           Manipulating Crawl Data            ::");
  console.log("::::::::::::::::::::::::::::::::::::::::::::::::::");
  console.log("");

  let dataTodayPromise = getTodayData(today);
  console.log("dataTodayPromise:", dataTodayPromise);
  let dataComparePromise = getCompareData(compareString, compareDate, fallbackString, fallbackDate);

  // pull down the data I need
  Promise.all([dataTodayPromise, dataComparePromise]).then(data => {

    console.log(":: ✓ Data retrieved");
    console.log("::    - Data from today has", Object.keys(data[0]).length, "rankings");
    console.log("::    - Compare data has", Object.keys(data[1]).length, "rankings");

    return data;

}).then( data => {

    // build an array of movement from two sets of data
    // push up movement data
    let movement = calculateMovement.dayChange(data[0], data[1]);
    return movement;

  }).then( data => {

    console.log(`:: ✓ Movement array calculated. It has ${data.length} games.`);
    console.log(`::    - Biggest mover is up ${data[0].movementDay} (bggID: ${data[0].bggID})`);
    console.log(`::    - Lowest mover is down ${data[14].movementDay} (bggID: ${data[14].bggID})`);

    // make API calls for the 15 games and push up game details
    let arrayOfGames = [];
    for (let i = 0; i < data.length; i++) {
      arrayOfGames.push(data[i].bggID);
    }

    // push up game details for movement games
    getGameDetails(arrayOfGames);

    console.log(":: ✓ Data pushed up to database");
    console.log("::   - details and movement for top 15 movers pushed up");

    let movement = data;
    return movement; // return hotness array of ids

  }).then( data => {

    let movementData = data;

    // get top 10 games
    getData.top10().then(function(top10data) {

      let unsorted = [],
          top10 = [],
          movement = [];

      // pull out id and rank for top10 data
      for (let prop in top10data) {
        unsorted.push({
          "bggID": top10data[prop].bggID,
          "rank": top10data[prop].rank
        });
      }

      // sort top 10 by rank
      sortByKey(unsorted, "rank");

      // push sorted to top10 array
      for (let i = 0; i < unsorted.length; i++) {
        top10.push(unsorted[i].bggID);
      }

      // make API calls for the 10 games and push up game details
      getGameDetails(top10);

      // format movement array
      for (let i = 0; i < movementData.length; i++) {
        movement.push(movementData[i].bggID);
      }

      // return two game arrays I'll need to build out the charts
      return {top10, movement};


    }).then( data => {

      return getData.hotness().then(function(value) {
        // parse, cut result to first 5
        let hotnessData = JSON.parse(value).slice(0,5);
        let hotness = [];
        for (let i = 0; i < hotnessData.length; i++) {
          hotness.push(hotnessData[i].gameId);
        }
        // get game details for hotness games
        getGameDetails(hotness);

        // concat all game ids
        let allGameIds = data.movement.concat(hotness, data.top10);

        //create structure for compiled data
        let chartData = {
          charts: {
            hotness: [],
            top10: {
             games: [],
             data: [],
            },
            movement: {
              positive: [],
              negative: []
            }
          },
          games: {},
        };

        // compile data
        chartData.charts.top10 = data.top10;
        for (let i = 0; i < 10; i++) {
          chartData.charts.movement.positive.push(data.movement[i]);
        }
        for (let i = 10; i < 15; i++) {
          chartData.charts.movement.negative.push(data.movement[i]);
        }
        chartData.charts.hotness = hotness;


        return {chartData, allGameIds};

        }, function(reason) {
          console.log("ERROR: Couldn't get hotness API data", reason);
      });


    }).then( data => {

      // wait 20 seconds for all data to get pushed up
      setTimeout(function() {

        let promises = [];

        for (let i = 0; i < data.allGameIds.length; i++) {
          // pull down all the games data from the database
          let p = getData.databaseGame(data.allGameIds[i]);
          promises.push(p);
        }

        // once the data is available,
        Promise.all(promises).then(gameArray => {
          for (let i = 0; i < gameArray.length; i++) {
            // create key with game id in the games property with game data
            data.chartData.games[gameArray[i].bggID] = gameArray[i];
          }
            // add crawl times
            getCrawlTimes(data.chartData);
            // push up data to Charts collection under today's date
            pushData(data.chartData, `/Charts/${today}.json`, "PUT");
            console.log(":: ✓ Chart data pushed up for the day");

        });
      }, 20000);

    });
  });
};

// invoking function when testing file directly
// formatCrawlData();

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        let x = a[key]; let y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}



module.exports = formatCrawlData;