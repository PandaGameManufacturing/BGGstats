"use strict";

// requires
let getData = require("../get-data/get-data-loader"),
    isDataEmpty = require("../assets/empty-data-checker");

let getCompareData = (compareString, compareDate, fallbackString, fallbackDate) => {

  return new Promise(function(resolve, reject) {

    // pull data from database based on compare date settings at top
    getData.rankings(compareDate).then(function(compareObject) {

      // is data from a week ago there?
      if(isDataEmpty(compareObject)) {
        console.log(`:: ERROR: There's no data available from Firebase from ${compareString} (${compareDate})`);
        console.log(`::        Trying fallback date (${fallbackDate})`);

          // if no data from week ago, pull data from last fallback date
          getData.rankings(fallbackDate).then(function(fallbackObject) {
            if(isDataEmpty(fallbackObject)) {
              console.log(`:: ERROR: Database doesn't have rankings data from ${fallbackString} (${fallbackDate})`);
            } else {
              console.log(`::    - Database has rankings data from ${fallbackString} (${fallbackDate})`);
              // return fallback data
              resolve(fallbackObject);
            }

        });
      // success, there is data from a week ago
      } else {
        console.log(`::    - Database has rankings data from ${compareString} (${compareDate})`);
        // return compare data
        resolve(compareObject);
      }

    });
  });
};

module.exports = getCompareData;





