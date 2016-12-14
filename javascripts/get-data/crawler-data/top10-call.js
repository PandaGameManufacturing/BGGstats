"use strict";
console.log("load top10 call");

// requires
let getData = require("../get-data");

let options = "?Top10=true";

let getCrawlTop10 = function(date) {
  return getData(`https://bggstats-2de27.firebaseio.com/GameRank/${date}.json${options}`);
};



module.exports = getCrawlTop10;