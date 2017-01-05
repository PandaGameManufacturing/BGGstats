"use strict";

// requires
let getDateMinus = require("../assets/get-date"),
    getTodayData = require("./get-today-rankings"),
    getCompareData = require("./get-compare-rankings"),
    calculateMovement = require("./calculate-movement"),
    getGameDetails = require("./get-game-details"),
    getData = require("../get-data/get-data-loader"),
    getTop10 = require("./get-top10"),
    pushData = require("../push-data/push-data-serverside"),
    getCrawlTimes = require("../crawler/crawler-logic/crawl-time-formatter"),
    isDataEmpty = require("../assets/empty-data-checker");

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
    weekMovement10 = [],
    chartData = {};

// add crawl times
getCrawlTimes(chartData);

let formatCrawlData = lastRanked => {

  console.log("::::::::::::::::::::::::::::::::::::::::::::::::::");
  console.log("::           Manipulating Crawl Data            ::");
  console.log("::::::::::::::::::::::::::::::::::::::::::::::::::");
  console.log("");

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

    console.log(`::`);
    console.log(":: ✓ Data parsed");
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

    //create structure for compiled data
    chartData.movementDay = {
      positive: [],
      negative: []
    };

    chartData.movementWeek = {
      positive: [],
      negative: []
    };

    chartData.movementWeek10 = {
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

    // put week 10% movement data in correct place
    for (let i = 0; i < 10; i++) {
      chartData.movementWeek10.positive.push(data.weekMovement10[i]);
    }
    for (let i = 10; i < 15; i++) {
      chartData.movementWeek10.negative.push(data.weekMovement10[i]);
    }

    // push up movement chart data
    pushData(chartData, `/Charts/${today}.json`, "PATCH");
    console.log(":: ✓ Data pushed up to database");
    console.log("::    - Movement data pushed up");

  }).then( data => {

    // get top 10 data
    return getTop10.then( gameIds => {

      // convert ids of movement games to game objects
      getGameObjects(gameIds);

      // TO DO: calculate top10.data arrays here

      // create structure for compiled data
      chartData.top10 = { games: gameIds, data: []};
      console.log("chartData after top10:", chartData);

      // push up top10 chart data
      pushData(chartData, `/Charts/${today}.json`, "PATCH");
      console.log("::    - Top10 data pushed up");

      return gameIds;

    });

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
  formatCrawlData();

module.exports = formatCrawlData;