"use strict";

// requires
let getDateMinus = require("../assets/get-date"),
    getTodayData = require("./get-today-rankings"),
    getCompareData = require("./get-compare-rankings"),
    calculateMovement = require("./calculate-movement"),
    getGameDetails = require("./get-game-details"),
    getData = require("../get-data/get-data-loader");

// configuration options
let today          = getDateMinus(0),
    compareString  = "a week ago",     // for console logs
    compareDate    = getDateMinus(1), // compare to a week back
    fallbackString = "6 days ago",     // for console logs
    fallbackDate   = getDateMinus(2);  // compare to 6 days ago instead

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
    // push up movement info while I'm at it.
    let movement = calculateMovement.dayChange(data[0], data[1]);
    return movement;


  }).then( data => {

    console.log(`:: ✓ Movement array calculated. It has ${data.length} games.`);
    console.log(`::    - Biggest mover is up ${data[0].movementDay} (bggID: ${data[0].bggID})`);
    console.log(`::    - Lowest mover is down ${data[14].movementDay} (bggID: ${data[14].bggID})`);

    // make API calls for the 15 games and push up game details
    getGameDetails(data);

    console.log(":: ✓ Data pushed up to database");
    console.log("::   - details and movement for top 15 movers pushed up");

    // console.log("today rankings:", data[0]);

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

      // 1. get hotness data.
      // get top 10 games

      // 2. push up games
      // 3. pass along hotness array

      // return two game arrays I'll need to build out the charts
      return {top10, movement};



    }).then( data => {

      console.log("all data:", data);

      // getData.hotness().then(function(hotnessdata) {
      //   console.log("hotnessdata:", hotnessdata);
      // });



      // add crawl times

      // build charts data and push it up

      // top10 chart data... in another module

    });
  });
};





// invoking function when testing file directly
// formatCrawlData();

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

module.exports = formatCrawlData;