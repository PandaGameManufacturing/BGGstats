'use strict';

let $ = require("jquery"),
    chartLoader = require("../assets/google-charts-loader"),
    getData = require("../get-data/get-data-loader"),
    createChart = require("../chart-visuals/chart-visuals-loader");

let rankLogic = slot => {

  // compare back 30 days logic
  let compareDate = 20161214;

  // make two calls to the database to get two sets of rankings data
  Promise.all([
    getData.ranks.today(),
    getData.ranks.compareDate(compareDate)
  ]).then(values => {
    // parse data
    let data = {};
    data.today = JSON.parse(values[0]);
    data.compare = JSON.parse(values[1]);

    ////// crunch the numbers so we know the biggest movers

    // make new objects with flatter data
    let today = {}, compare = {}, names = {}, year = {}, movement = [];

    // push today's ids and ranks to new objects
    for (let prop in data.today) {
      let todayId = data.today[prop].BggId;
      let todayRank = data.today[prop].Rank;
      // add key "game":rank to today object
      today[todayId] = todayRank;
      // add key "game":bggId to ids object
      names[todayId] = data.today[prop].Name;
      // add key "game":year to year object
      year[todayId] = data.today[prop].BggYear;
    }

    // push compare today's Ids and ranks to new objects
    for (let prop in data.compare) {
      let compareId = data.compare[prop].BggId;
      let compareRank = data.compare[prop].Rank;
      compare[compareId] = compareRank;
    }

    // delete games that the have same rank or fell off the list from today object
    for (let prop in today) {
      let todayName = names[prop];
      let todayRank = today[prop];
      let todayBggId = prop;
      let compareRank = compare[todayBggId];

      // exclude games that fell off the top 1000
      if (compareRank !== undefined) {
        // if a game's rank has changed, track it
        if (todayRank !== compareRank) {
          // push change in movement to the movement array
          let object = {};
          object.name = todayName;
          object.movement = compareRank - todayRank;
          object.bgg = prop;
          object.year = year[todayBggId];

          movement.push(object);
        }
      }
    }

    ///// massage movement array

    // sort movement array by movement
    movement.sort(function (a, b) {
      if (a.movement < b.movement) { return 1;  }
      if (a.movement > b.movement) { return -1; }
      return 0;
    });

    // pull top ten movements and bottom 5 movers
    let top10 = movement.slice(0, 10);
    let lastIndex = movement.length;
    let bottom5 = movement.slice(lastIndex - 5, lastIndex);

    // combine top 10 and bottom 5 into 1 array
    let prettyArray = top10.concat(bottom5);

    // return formatted data
    return prettyArray;

    // now make a third api call to get details of the biggest mover
  }).then(function(data){
    let latestData = data;
    let targetID = data[0].bgg;
    let BiggestMoverDetails = getData.details(targetID);

    BiggestMoverDetails.then(function(data) {
      let detailFor1 = JSON.parse(data);
      latestData[0].details = detailFor1.items.item[0];

    //build the chart once you have all the data
    createChart.rank("Biggest Movers", latestData, slot);

    }, function(error) {
      console.log("Error getting Biggest Mover Details", error);
      });





});

};

module.exports = rankLogic;