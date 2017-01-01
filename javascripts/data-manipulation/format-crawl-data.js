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
let today          = getDateMinus(0),
    compareString  = "yesterday",     // for console logs
    compareDate    = getDateMinus(1), // compare to a week back
    fallbackString = "2 days ago",     // for console logs
    fallbackDate   = getDateMinus(2);  // compare to 2 days ago instead

// set data globally
let todayGames = [],
    compareGames = [];

//create structure for compiled data
let chartData = {
  hotness: [],
  top10: {
   games: [],
   data: [],
  },
  movement: {
    positive: [],
    negative: []
  }
};

// add crawl times
getCrawlTimes(chartData);

let formatCrawlData = lastRanked => {

  console.log("::::::::::::::::::::::::::::::::::::::::::::::::::");
  console.log("::           Manipulating Crawl Data            ::");
  console.log("::::::::::::::::::::::::::::::::::::::::::::::::::");
  console.log("");


  // add last ranked game
  chartData.totalRankedGames = lastRanked;

  // get today and yesterday data
  let dataTodayPromise = getTodayData(today);
  let dataComparePromise = getCompareData(compareString, compareDate, fallbackString, fallbackDate);

  // pull down the data the app needs to draw movement charts first
  Promise.all([dataTodayPromise, dataComparePromise]).then(data => {

    // set data globally
    todayGames = data[0];
    compareGames = data[1];

    console.log(":: ✓ Data retrieved");
    console.log("::    - Data from today has", Object.keys(todayGames).length, "rankings");
    console.log("::    - Compare data has", Object.keys(compareGames).length, "rankings");

    // build an array of movement from two sets of data and push up movement data
    return calculateMovement.dayChange(todayGames, compareGames);

  }).then( movementArray => {

    console.log(`:: ✓ Movement array calculated. It has ${movementArray.length} games.`);
    console.log(`::    - Biggest mover is up ${movementArray[0].movementDay} (bggID: ${movementArray[0].bggID})`);
    console.log(`::    - Lowest mover is down ${movementArray[14].movementDay} (movementArray: ${movementArray[14].bggID})`);

    // convert ids of movement games to game objects
    getGameObjects(movementArray);

    return movementArray;

  }).then( movementArray => {

    // put movement data in correct place
    for (let i = 0; i < 10; i++) {
      chartData.movement.positive.push(movementArray[i]);
    }
    for (let i = 10; i < 15; i++) {
      chartData.movement.negative.push(movementArray[i]);
    }

    // push up movement chart data to Charts collection under today's date
    console.log("chartData:", chartData);
    pushData(chartData, `/Charts/${today}.json`, "PATCH");
    console.log(":: ✓ Movement data pushed up");

  });

};


//   }).then( data => {



//     let movementData = data;

//     // get top 10 games
//     getData.top10().then(function(top10data) {

//       let unsorted = [],
//           top10Duplicates =[],
//           top10 = [],
//           movement = [];

//       // pull out id and rank for top10 data
//       for (let prop in top10data) {
//         unsorted.push({
//           "bggID": top10data[prop].bggID,
//           "rank": top10data[prop].rank
//         });
//       }

//       // sort top 10 by rank
//       sortByKey(unsorted, "rank");

//       // push sorted to top10 array
//       for (let i = 0; i < unsorted.length; i++) {
//         top10Duplicates.push(unsorted[i].bggID);
//       }

//       // remove duplicates
//       top10 = top10Duplicates.filter(function(item, pos) {
//           return top10Duplicates.indexOf(item) == pos;
//       });

//       // pust top 10  game details object into array
//       for (let prop in top10data) {
//         for (let i = 0; i < top10.length; i++) {
//           if (top10data[prop].bggID === top10[i]) {
//             // set array to the whole game object
//             top10[i] = top10data[prop];
//             // console.log(`details for game ${i+1}:`, top10data[prop]);
//             break;
//           }
//         }
//       }

//       chartData.top10.games = data.top10;

//       // return two game arrays I'll need to build out the charts
//       return {top10, movement};


//     }).then( data => {

//       return getData.hotness().then(function(value) {
//         // parse, cut result to first 5
//         let hotnessData = value.slice(0,5);
//         let hotness = [];
//         for (let i = 0; i < hotnessData.length; i++) {
//           hotness.push(hotnessData[i].gameId);
//         }
//         // get game details for hotness games
//         // getGameDetails(hotness);

//         // concat all game ids
//         let allGameIds = data.movement.concat(hotness, data.top10);


//         // chartData.charts.hotness = hotness;
//         //push all hotness data for now while api is crappy
//         chartData.hotness = hotnessData;
//         // store the last ranked game
//         // chartData.totalRankedGames = lastRanked;

//         // // add crawl times
//         // getCrawlTimes(chartData);
//         // // push up data to Charts collection under today's date
//         // console.log("chartData:", chartData);
//         // pushData(chartData, `/Charts/${today}.json`, "PATCH");
//         // console.log(":: ✓ Chart data pushed up for the day");

//         }, function(reason) {
//           console.log("ERROR: Couldn't get hotness API data", reason);
//       });

//     });
//   });
// };

function sortByKey(array, key) {
  return array.sort(function(a, b) {
    let x = a[key]; let y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}

// function that takes an array of ids and changes it to an array of game objects
function getGameObjects(arrayOfIds) {
  // iterate over all of the games from today
  for (let prop in todayGames) {
    // iterate over game ids in an array
    for (let i = 0; i < arrayOfIds.length; i++) {
      // if the bggid matches...
      if (todayGames[prop].bggID === arrayOfIds[i]) {
        // set that array index to the whole game object
        arrayOfIds[i] = todayGames[prop];
        // start looping back over when there is a match
        break;
      }
    }
  }
}

// invoking function when testing file directly
  // formatCrawlData();

module.exports = formatCrawlData;