"use strict";

// requires
let getDateMinus = require("../assets/get-date"),
    getTodayData = require("./get-today-rankings"),
    getCompareData = require("./get-compare-rankings"),
    calculateMovement = require("./calculate-movement"),
    getGameDetails = require("./get-game-details"),
    getData = require("../get-data/get-data-loader"),
    getTop10 = require("./get-top10"),
    buildTop10 = require("./create-top-10-chart-data"),
    pushData = require("../push-data/push-data-serverside"),
    getCrawlTimes = require("../crawler/crawler-logic/crawl-time-formatter"),
    printLogs = require("./format-crawl-data-console-logs"),
    pushUpMovement = require("./push-up-movement-data");

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
    todayMovement1000 = [],
    weekMovement = [],
    weekMovement1000 = [],
    chartData = {};

// add crawl times
getCrawlTimes(chartData);

let formatCrawlData = lastRanked => {

  printLogs.start();

  chartData.totalRankedGames = lastRanked;   // add last ranked game

  // get today, yestday, and last week's rankings
  console.log(":: ✓ Checking for data");
  let dataTodayPromise = getTodayData(today);
  let dataYesterdayPromise = getCompareData(yesterdayString, yesterdayDate, yesterdayFallbackString, yesterdayFallbackDate);
  let dataWeekPromise = getCompareData(weekString, weekDate, weekFallbackString, weekFallbackDate);

  // pull down the data the app needs to draw movement charts first
  Promise.all([dataTodayPromise, dataYesterdayPromise, dataWeekPromise]).then(data => {

    // set data globally
    todayGames     = data[0];
    yesterdayGames = data[1];
    weekGames      = data[2];

    printLogs.parsed(todayGames, yesterdayGames, weekGames);

    return calculateMovement(todayGames, yesterdayGames);

    }).then( day => {

    todayMovement = day; // set returned promise

    return calculateMovement(todayGames, weekGames); // setup another promise;

    }).then( week => {

    weekMovement = week;
    return calculateMovement(todayGames, weekGames, 1000); // pass rank filter;

  }).then( week1000 => {

    weekMovement1000 = week1000;
    return calculateMovement(todayGames, yesterdayGames, 1000); // pass rank filter;

    }).then( today1000 => {
    todayMovement1000 = today1000;

    printLogs.movementCalculated(todayMovement, todayMovement1000, weekMovement, weekMovement1000);

    // return {weekMovement, weekMovement1000};
    return {todayMovement, weekMovement, weekMovement1000, todayMovement1000};

  }).then( data => {

    pushUpMovement(data, today, todayGames);


  }).then( data => {

    // get top 10 data
    return getTop10.then( gameIds => {

      // convert ids of movement games to game objects
      getGameObjects(gameIds);

      // create structure for compiled data
      chartData.top10 = {};
      chartData.top10.games = gameIds;

      // push up top10 chart data
      pushData(chartData, `/Charts/${today}.json`, "PATCH");
      console.log("::    - Top10 games pushed up");

      return gameIds;

    });


  }).then( GameObjects => {

      // calculate array of arrays for top 10 line chart
      let top10Chart = buildTop10(GameObjects);

      // create structure for compiled data
      chartData.top10.data = top10Chart;

      // push up top10 chart data
      pushData(chartData, `/Charts/${today}.json`, "PATCH");
      console.log("::    - Top10 data pushed up");

      return GameObjects;

  }).then( data => {

    // get hotness data
    return getData.hotness().then(function(data) {

    // pull top 5
    let hotnessData = data.slice(0,5);
    let hotnessGames = [];

    // remap keys
    for (let i = 0; i < hotnessData.length; i++) {
      hotnessGames.push({
        bggID: hotnessData[i].gameId,
        thumbnail: hotnessData[i].thumbnail,
        yearPublished: hotnessData[i].yearPublished,
        name: hotnessData[i].name
      });
    }

    // put the basic hotness games in the right place
    chartData.hotness = hotnessGames;

    // push up basic hotness chart data
    pushData(chartData, `/Charts/${today}.json`, "PATCH");
    console.log("::    - Basic hotness data pushed up");

    return hotnessGames;

    });

  }).then( basicGameInfo => {

    // create an array of all bggIDs
    let gameIds = [];

    // take an arry and push ids of games objects to gamesIds array
    function addIds(array) {
      for (let i = 0; i < array.length; i++) {
        gameIds.push(array[i].bggID);
      }
    }

    // collect all bggIDs for games the app wants details for
    addIds(chartData.hotness);

    // current api wrapper only lets me get a few at a time

    // addIds(chartData.movementDay.positive);
    // addIds(chartData.movementDay.negative);
    // addIds(chartData.movementWeek.positive);
    // addIds(chartData.movementWeek.negative);
    // addIds(chartData.movementWeek10.positive);
    // addIds(chartData.movementWeek10.negative);
    // addIds(chartData.top10.games);

    // create place for games
    chartData.games = {};

    // convert ids into game objects via BGG API
    getGameDetails(gameIds).then(function(array) {

      // loop over games and add each game object in Games under it's bggID
      for (let i = 0; i < array.length; i++) {
        chartData.games[array[i].bggID] = array[i];
      }

      // push up game details along with charts
      pushData(chartData, `/Charts/${today}.json`, "PATCH");
      console.log("::    - Detailed hotness data pushed up");

    });
  });
};

// function that takes an array of ids and changes it to an array of game objects
function getGameObjects(arrayOfIds) {
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

// invoking function when testing file directly
  // formatCrawlData();

module.exports = formatCrawlData;