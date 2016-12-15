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

    console.log("data.today:", data.today);

    ////// crunch the numbers so we know the biggest movers

    // make new objects with flatter data
    let today = {}, compare = {}, ids = {}, movement = [];

    // push today's names and ranks to new objects
    for (let prop in data.today) {
      let todayName = data.today[prop].Name;
      let todayRank = data.today[prop].Rank;
      // add key "game":rank to today object
      today[todayName] = todayRank;
      // add key "game":bggId to ids object
      ids[todayName] = data.today[prop].BggId;
    }

    // push compare dates's names and ranks to new objects
    for (let prop in data.compare) {
      let compareName = data.compare[prop].Name;
      let compareRank = data.compare[prop].Rank;
      compare[compareName] = compareRank;
    }

    // delete names that the have same rank or fell off the list from today object
    for (let prop in today) {
      let todayName = prop;
      let todayRank = today[prop];
      let compareRank = compare[todayName];
      let todayBggId = prop.BggId;
      // exclude games that fell off the top 1000
      if (compareRank !== undefined) {
        // if a game's rank has changed, track it
        if (todayRank !== compareRank) {
          // push change in movement to the movement array
          let object = {};
          object.name = todayName;
          object.bgg = ids[todayName];
          object.movement = compareRank - todayRank;
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

    // keep the top ten movements and bottom 5 movers
    let top10 = movement.slice(0, 10);
    console.log("top10:", top10);
    let lastIndex = movement.length;
    console.log("lastIndex:", lastIndex);
    let bottom5 = movement.slice(lastIndex - 5, lastIndex);
    console.log("bottom5:", bottom5);

    console.log("movement:", movement);
    // console.log("today:", today);
    // console.log("compare:", compare);

    // data.today-KZ21WpB_6h9CWTIfoyM = [object Object]

    // return formatted data
    return data;
  }).then(function(data){
    // now make a third call to get details of the biggest mover
    console.log("get some more data, but I have this", data);

    //build chart with this data
    createChart.rank("Biggest Movers", data, slot);

});

};

module.exports = rankLogic;