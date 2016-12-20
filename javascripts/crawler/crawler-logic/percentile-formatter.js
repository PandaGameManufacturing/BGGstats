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

    // time_percentile1: "20161217_percentile1_false",
    // time_percentile5: "20161217_percentile5_false",
    // time_percentile10: "20161217_percentile10_false",
    // time_percentile25: "20161217_percentile25_false",
    // time_percentile50: "20161217_percentile50_false",
    // time_percentile75: "20161217_percentile75_false",

let addPercentile = function(data, rank, totalRanked) {

    data.percentile = Math.ceil(rank/totalRanked*100);

    if (data.percentile <= 1) {
      addTags(data, true, true, true, true, true, true);
    } else if (data.percentile <= 5) {
      addTags(data, false, true, true, true, true, true);
    } else if (data.percentile <= 10) {
      addTags(data, false, false, true, true, true, true);
    } else if (data.percentile <= 25) {
      addTags(data, false, false, false, true, true, true);
    } else if (data.percentile <= 50) {
      addTags(data, false, false, false, false, true, true);
    } else if (data.percentile <= 75) {
      addTags(data, false, false, false, false, false, true);
    } else {
      addTags(data, false, false, false, false, false, false);
    }
};

let addTags = function(data, boolean1, boolean2, boolean3, boolean4, boolean5, boolean6) {

  let n1 = 1,
      n2 = 5,
      n3 = 10,
      n4 = 25,
      n5 = 50,
      n6 = 75;

  data[`percentile${n1}`] = boolean1;
  data[`time_percentile${n1}`] = `${data.timeYMD}_percentile${n1}_${boolean1}`;

  data[`percentile${n2}`] = boolean2;
  data[`time_percentile${n2}`] = `${data.timeYMD}_percentile${n2}_${boolean2}`;

  data[`percentile${n3}`] = boolean3;
  data[`time_percentile${n3}`] = `${data.timeYMD}_percentile${n3}_${boolean3}`;

  data[`percentile${n4}`] = boolean4;
  data[`time_percentile${n4}`] = `${data.timeYMD}_percentile${n4}_${boolean4}`;

  data[`percentile${n5}`] = boolean5;
  data[`time_percentile${n5}`] = `${data.timeYMD}_percentile${n5}_${boolean5}`;

  data[`percentile${n6}`] = boolean6;
  data[`time_percentile${n6}`] = `${data.timeYMD}_percentile${n6}_${boolean6}`;

};

module.exports = addPercentile;
