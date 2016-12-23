"use strict";

// requires
let getDateMinus = require("../assets/get-date"),
    getTodayData = require("./get-today-rankings"),
    getCompareData = require("./get-compare-rankings"),
    calculateMovement = require("./calculate-movement"),
    getGameDetails = require("./get-game-details");

// configuration options
let today          = getDateMinus(0),
    compareString  = "a week ago",     // for console logs
    compareDate    = getDateMinus(7), // compare to a week back
    fallbackString = "6 days ago",     // for console logs
    fallbackDate   = getDateMinus(6);  // compare to 6 days ago instead

let formatCrawlData = () => {

  console.log("::::::::::::::::::::::::::::::::::::::::::::::::::");
  console.log("::           Manipulating Crawl Data            ::");
  console.log("::::::::::::::::::::::::::::::::::::::::::::::::::");
  console.log("");

  let dataTodayPromise = getTodayData(today);
  let dataComparePromise = getCompareData(compareString, compareDate, fallbackString, fallbackDate);

  // pull down the data I need
  Promise.all([dataTodayPromise, dataComparePromise]).then(data => {

    console.log(":: ✓ Data retrieved");
    console.log("::    - Data from today has", Object.keys(data[0]).length, "rankings");
    console.log("::    - Compare data has", Object.keys(data[1]).length, "rankings");
    return data;

  }).then( data => {

    // build an array of movement from two sets of data
    return calculateMovement.weekChange(data[0], data[1]);

  }).then( data => {

    console.log(`:: ✓ Movement array calculated. It has ${data.length} games.`);
    console.log(`::    - Biggest mover is up ${data[0].movement} (bggID: ${data[0].bggID})`);
    console.log(`::    - Lowest mover is down ${data[14].movement} (bggID: ${data[14].bggID})`);

    // make API calls for the 15 games and push up data to database along with movement info
    getGameDetails(data);

    // get top 10 games and push up game details
    // console.log("today rankings:", data[0]);

    let hotness = data;
    return {hotness}; // return hotness array of ids

  }).then( data => {

    // console.log("I have some data:", data);

    // console.log(`:: ✓ Data for ${data} games pushed up.`);

     // do more stuff

  });

};




















//     // 3. loop over 15 games, build out game object

//     // 4. push up each game object to Games collection by id




// invoking function when testing file directly
formatCrawlData();

module.exports = formatCrawlData;