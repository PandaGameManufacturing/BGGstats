'use strict';
/*jshint loopfunc: true */

let getData = require("../data/data-loader"),
    createChart = require("../chart-visuals/chart-visuals-loader"),
    data = {};

let hotnessLogic = () => {
  getData.hotness.then( result => {                        // get hotness data
    data = JSON.parse(result).slice(0,5);                  // push first five results to data.hotness
    for (let i = 0; i < 5; i++) {                          // iterate over the top 5
      let bggId = data[i].gameId;
      getData.details(bggId).then( result => {             // get more game details for each game
      let massagedData = JSON.parse(result).items.item[0];
      data[i].details = massagedData;                      // add a details key to to each game
      }).catch(function(error) { console.log("Game Details API Call Error", error); });
    }
    createChart.hotness(
      "The Hotness",
      data
    );
  }).catch(function(error) { console.log("Data Hotness API Call Error", error); });
};

module.exports = hotnessLogic;