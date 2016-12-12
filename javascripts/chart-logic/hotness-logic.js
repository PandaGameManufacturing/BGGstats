'use strict';
/*jshint loopfunc: true */

let getData = require("../get-data/get-data-loader"),
    createChart = require("../chart-visuals/chart-visuals-loader"),
    arrayOfPromises = [],
    data = {};

let hotnessLogic = slot => {
  getData.hotness.then( result => {                             // get hotness data
    data = JSON.parse(result).slice(0,5);                       // push first five results to data.hotness
    for (let i = 0; i < 5; i++) {                               // iterate over the top 5
      let bggId = data[i].gameId;
      let arrayItem = getData.details(bggId).then( result => {  // get more game details for each game
      let massagedData = JSON.parse(result).items.item[0];
      data[i].details = massagedData;                           // add a details key to to each game
      }).catch(function(error) { console.log("Game Details API Call Error", error); });
      arrayOfPromises.push(arrayItem);                          // push each promise to array
    }
    Promise.all([                                               // listen for when all promises resolve
        arrayOfPromises[0],
        arrayOfPromises[1],
        arrayOfPromises[2],
        arrayOfPromises[3],
        arrayOfPromises[4]
      ]).then(values => {
      createChart.hotness("The Hotness", data, slot); // create chart after all API calls resolve
    }, reason => {
      console.log("hotness API calls didn't resolve", reason);
    });

  }).catch(function(error) { console.log("Data Hotness API Call Error", error); });
};

module.exports = hotnessLogic;