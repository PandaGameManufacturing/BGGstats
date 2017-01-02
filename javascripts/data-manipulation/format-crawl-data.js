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
    // yesterday
    yesterdayString  = "yesterday",
    yesterdayDate    = getDateMinus(1),         // compare to a day back
    yesterdayFallbackString = "2 days ago",
    yesterdayFallbackDate   = getDateMinus(2),  // compare to 2 days ago instead
    // week ago
    weekString  = "a week ago",
    weekDate    = getDateMinus(7),              // compare to a week back
    weekFallbackString = "6 days ago",
    weekFallbackDate   = getDateMinus(6);       // compare to 6 days ago instead

// set data globally
let todayGames = [],
    yesterdayGames = [],
    weekGames = [],
    todayMovement = [],
    weekMovement = [],
    weekMovement10 = [];

//create structure for compiled data
let chartData = {
  hotness: [],
  top10: {
   games: [],
   data: [],
  },
  movementDay: {
    positive: [],
    negative: []
  },
  movementWeek: {
    positive: [],
    negative: []
  },
  movementWeek10: {
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

  chartData.totalRankedGames = lastRanked;   // add last ranked game

  // get today
  let dataTodayPromise = getTodayData(today);
  // get yesterday
  let dataYesterdayPromise = getCompareData(yesterdayString, yesterdayDate, yesterdayFallbackString, yesterdayFallbackDate);
  // get a week ago
  let dataWeekPromise = getCompareData(weekString, weekDate, weekFallbackString, weekFallbackDate);


  // pull down the data the app needs to draw movement charts first
  Promise.all([dataTodayPromise, dataYesterdayPromise, dataWeekPromise]).then(data => {

    // set data globally
    todayGames     = data[0];
    yesterdayGames = data[1];
    weekGames      = data[2];

    console.log(`::`);
    console.log(":: ✓ Data retrieved");
    console.log("::    - Data from today has", Object.keys(todayGames).length, "rankings");
    console.log("::    - Data from yesterday has", Object.keys(yesterdayGames).length, "rankings");
    console.log("::    - Data from a week ago has", Object.keys(weekGames).length, "rankings");
    console.log(`::`);

    return calculateMovement(todayGames, yesterdayGames);

    }).then( day => {

    todayMovement = day; // set returned promise
    return calculateMovement(todayGames, weekGames); // setup another promise;

    }).then( week => {

    weekMovement = week;
    return calculateMovement(todayGames, weekGames, 10); // pass percentile filter;

  }).then( week10 => {

    weekMovement10 = week10;

    // today data
    console.log(`:: ✓ Day Movement array calculated (${todayMovement.length} games)`);
    console.log(`::    - Biggest mover is up ${todayMovement[0].movement} (bggID: ${todayMovement[0].bggID})`);
    console.log(`::    - Lowest mover is down ${todayMovement[14].movement} (bggID: ${todayMovement[14].bggID})`);
    console.log(`::`);

    // week data
    console.log(`:: ✓ Week Movement array calculated (${weekMovement.length} games)`);
    console.log(`::    - Biggest mover is up ${weekMovement[0].movement} (bggID: ${weekMovement[0].bggID})`);
    console.log(`::    - Lowest mover is down ${weekMovement[14].movement} (bggID: ${weekMovement[14].bggID})`);
    console.log(`::`);

    // week 10% data
    console.log(`:: ✓ Week 10% Movement array calculated (${weekMovement10.length} games)`);
    console.log(`::    - Biggest mover is up ${weekMovement10[0].movement} (bggID: ${weekMovement10[0].bggID})`);
    console.log(`::    - Lowest mover is down ${weekMovement10[14].movement} (bggID: ${weekMovement10[14].bggID})`);
    console.log(`::`);

    return {todayMovement, weekMovement, weekMovement10};

  }).then( data => {

    // convert ids of movement games to game objects
    getGameObjects(data.todayMovement);
    getGameObjects(data.weekMovement);
    getGameObjects(data.weekMovement10);

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

    // put week 10% movement data in correct place
    for (let i = 0; i < 10; i++) {
      chartData.movementWeek10.positive.push(data.weekMovement10[i]);
    }
    for (let i = 10; i < 15; i++) {
      chartData.movementWeek10.negative.push(data.weekMovement10[i]);
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