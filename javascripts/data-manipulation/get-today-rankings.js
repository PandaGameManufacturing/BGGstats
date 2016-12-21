"use strict";

// requires
let getData = require("../get-data/get-data-loader"),
    isDataEmpty = require("../assets/empty-data-checker");

let getTodayData = today => {

  return new Promise(function(resolve, reject) {

    // pull down all today's data from Rankings Table
    getData.rankings(today).then(function(data) {

      // console log if the data is there
      if(isDataEmpty(data)) {
        console.log(`:: ERROR: There's no data available from Firebase for the day (${today})`);
      } else {
        console.log(`:: ✓ Database has rankings data from today (${today})`);
        resolve(data);
      }
    });
  });
};

module.exports = getTodayData;