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

    let hotness = data;
    return hotness; // return hotness array of ids

  }).then( data => {

    let hotnessData = data;

    // console.log("hotness data", data);
    // get top 10 games and push up game details
    getData.top10().then(function(top10data) {
      // console.log("top10:", top10);

      let unsorted = [],
          top10 = [],
          hotness = [];

      // pull out id and rank for top10 data
      for (let prop in top10data) {
        unsorted.push({
          "bggID": top10data[prop].bggID,
          "rank": top10data[prop].rank
        });
      }

      sortByKey(unsorted, "rank");

      console.log("unsorted:", unsorted);

      for (let i = 0; i < unsorted.length; i++) {
        top10.push(unsorted[i].bggID);
      }

      // make API calls for the 10 games and push up game details
      getGameDetails(top10);

      // format hotness array
      for (let i = 0; i < hotnessData.length; i++) {
        hotness.push(hotnessData[i].bggID);
      }

      return {top10, hotness};

      // for (var i = 0; i < top10.length; i++) {
      //   let value = top10[i];
      //   // let value = top10[i][Object.keys(top10[i])[0]];
      //   console.log("value in loop:", value);
      // }

      // make API calls for the 15 games and push up game details
      // getGameDetails(data);


      // return top10;


    }).then( data => {

      console.log("all data:", data);


    });


    // console.log("ranks from today:", data[0]);

    //make call to database to get top10.. then get game details details and push up....


  });

};


//     // 3. loop over 15 games, build out game object

//     // 4. push up each game object to Games collection by id




// invoking function when testing file directly
formatCrawlData();

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

module.exports = formatCrawlData;