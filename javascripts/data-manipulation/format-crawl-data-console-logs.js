"use strict";

let start = () => {

  console.log("::::::::::::::::::::::::::::::::::::::::::::::::::");
  console.log("::           Manipulating Crawl Data            ::");
  console.log("::::::::::::::::::::::::::::::::::::::::::::::::::");
  console.log("");


};

let parsed = (todayGames, yesterdayGames, weekGames) => {

    console.log(`::`);
    console.log(":: ✓ Data parsed");
    console.log("::    - Data from today has", Object.keys(todayGames).length, "rankings");
    console.log("::    - Data from yesterday has", Object.keys(yesterdayGames).length, "rankings");
    console.log("::    - Data from a week ago has", Object.keys(weekGames).length, "rankings");
    console.log(`::`);

};

let movementCalculated = (todayMovement, todayMovement1000, weekMovement, weekMovement1000) => {

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

    // today top 1,000 data
    console.log(`:: ✓ Today Top 1000 Movement array calculated (${todayMovement1000.length} games)`);
    console.log(`::    - Biggest mover is up ${todayMovement1000[0].movement} (bggID: ${todayMovement1000[0].bggID})`);
    console.log(`::    - Lowest mover is down ${todayMovement1000[14].movement} (bggID: ${todayMovement1000[14].bggID})`);
    console.log(`::`);

    // week top 1,000 data
    console.log(`:: ✓ Week Top 1000 Movement array calculated (${weekMovement1000.length} games)`);
    console.log(`::    - Biggest mover is up ${weekMovement1000[0].movement} (bggID: ${weekMovement1000[0].bggID})`);
    console.log(`::    - Lowest mover is down ${weekMovement1000[14].movement} (bggID: ${weekMovement1000[14].bggID})`);
    console.log(`::`);

};

module.exports = {start, parsed, movementCalculated};