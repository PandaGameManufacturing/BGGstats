"use strict";

  // top10, top100, top1000, top10000 formats

  // top10: false,
  // time_top10: '20161219_top10_false',

let addTopTen = function(data, rank) {
  // top10
  for (let topNumber = 10; topNumber <= 10000; topNumber*=10) {
    if (rank <= topNumber) {
      data[`top${topNumber}`] = true; // top 10/100/1000/10000 boolean
       // top10/100/1000/10000 tag to pull down top10 with a date in one call
      data[`time_top${topNumber}`] = `${data.timeYMD}_top${topNumber}_true`;
    } else {
      data[`top${topNumber}`] = false;
      data[`time_top${topNumber}`] = `${data.timeYMD}_top${topNumber}_false`;
    }
  }
};

module.exports = addTopTen;