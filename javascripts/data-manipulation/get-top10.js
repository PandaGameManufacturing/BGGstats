"use strict";

// requires
let getData = require("../get-data/get-data-loader");

 // promise returning top 10 games
let getTop10 = getData.top10().then(function(top10data) {

  let unsorted = [],
      top10Duplicates =[],
      top10 = [];

  // pull out id and rank for top10 data
  for (let prop in top10data) {
    unsorted.push({
      "bggID": top10data[prop].bggID,
      "rank": top10data[prop].rank
    });
  }

  // sort top 10 by rank
  sortByKey(unsorted, "rank");

  // push sorted to top10 array
  for (let i = 0; i < unsorted.length; i++) {
    top10Duplicates.push(unsorted[i].bggID);
  }

  // remove duplicates
  top10 = top10Duplicates.filter(function(item, pos) {
      return top10Duplicates.indexOf(item) == pos;
  });

  return top10;


});

function sortByKey(array, key) {
  return array.sort(function(a, b) {
    let x = a[key]; let y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}

module.exports = getTop10;

