"use strict";

console.log("percintile formater runs");

    // percentiles

    // percentile: 4,
    // percentile1: true,
    // percentile5: true,
    // percentile10: true,
    // percentile25: true,
    // percentile50: true,
    // percentile75: true,

    // time tags

    // time_percentile1: "20161217_time_percentile1_false",
    // time_percentile5: "20161217_time_percentile5_false",
    // time_percentile10: "20161217_time_percentile10_false",
    // time_percentile25: "20161217_time_percentile25_false",
    // time_percentile50: "20161217_time_percentile50_false",
    // time_percentile75: "20161217_time_percentile75_false",

let addPercentile = function(data, rank, totalRanked) {







  // // top10
  // for (let topNumber = 10; topNumber <= 10000; topNumber*=10) {
  //   if (rank <= topNumber) {
  //     data[`top${topNumber}`] = true; // top 10/100/1000/10000 boolean
  //      // top10/100/1000/10000 tag to pull down top10 with a date in one call
  //     data[`time_top${topNumber}`] = `${data.timeYMD}_top${topNumber}_true`;
  //   } else {
  //     data[`top${topNumber}`] = false;
  //     data[`time_top${topNumber}`] = `${data.timeYMD}_top${topNumber}_false`;
  //   }
  // }
};

module.exports = addPercentile;