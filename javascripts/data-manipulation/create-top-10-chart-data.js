"use strict";

// requires
let getData = require("../get-data/get-data-loader"),
    isDataEmpty = require("../assets/empty-data-checker");

let buildArray = topTenArray => {

  let gameData = getData.historic;

  // loop over topTen and inject current rank into 2017
  for (let i = 0; i < topTenArray.length; i++) {
    let targetID = topTenArray[i].bggID;

    // if the game is in the records already, add to it
    if (!isDataEmpty(gameData[targetID])) {
      gameData[targetID][2017] = topTenArray[i].rank;
    } else { // create a new entry
      gameData[targetID] = {
          bggID: targetID,
          name: topTenArray[i].name,
          2009: 11,
          2010: 11,
          2011: 11,
          2012: 11,
          2013: 11,
          2014: 11,
          2015: 11,
          2016: 11,
          2017: topTenArray[i].rank
        };
      }
    }

  // convert object into array with correct order
  let sortedGames = [];

  // loop over top ten first
  for (let i = 0; i < topTenArray.length; i++) {
    let targetID = topTenArray[i].bggID;
    sortedGames.push(gameData[targetID]);
  }

  // now push games not in the top 10 in any order
  for (let prop in gameData) {
    if (gameData[prop][2017] > 10 ) {
      sortedGames.push(gameData[prop]);
    }
  }

//    Google Charts wants an array of arrays like so...
//
//    [
//      ['year', 'game1', 'game2'],
//      ['2009',       2,       6],
//      ['2010',       1,       7]
//    ]

  // build out array of arrays
  let arrayOfArrays = [];

  // build first row
  let array1 = ["year"];
  for (let i = 0; i < sortedGames.length; i++) {
    array1.push(sortedGames[i].name);
  }
  arrayOfArrays.push(array1);

  // build 2009
  let row2009 = ["2009"];
  for (let i = 0; i < sortedGames.length; i++) {
    row2009.push(sortedGames[i][2009]);
  }
  arrayOfArrays.push(row2009);

  // build 2010
  let row2010 = ["2010"];
  for (let i = 0; i < sortedGames.length; i++) {
    row2010.push(sortedGames[i][2010]);
  }
  arrayOfArrays.push(row2010);

  // build 2011
  let row2011 = ["2011"];
  for (let i = 0; i < sortedGames.length; i++) {
    row2011.push(sortedGames[i][2011]);
  }
  arrayOfArrays.push(row2011);

  // build 2012
  let row2012 = ["2012"];
  for (let i = 0; i < sortedGames.length; i++) {
    row2012.push(sortedGames[i][2012]);
  }
  arrayOfArrays.push(row2012);

  // build 2013
  let row2013 = ["2013"];
  for (let i = 0; i < sortedGames.length; i++) {
    row2013.push(sortedGames[i][2013]);
  }
  arrayOfArrays.push(row2013);

  // build 2014
  let row2014 = ["2014"];
  for (let i = 0; i < sortedGames.length; i++) {
    row2014.push(sortedGames[i][2014]);
  }
  arrayOfArrays.push(row2014);

  // build 2015
  let row2015 = ["2015"];
  for (let i = 0; i < sortedGames.length; i++) {
    row2015.push(sortedGames[i][2015]);
  }
  arrayOfArrays.push(row2015);

  // build 2016
  let row2016 = ["2016"];
  for (let i = 0; i < sortedGames.length; i++) {
    row2016.push(sortedGames[i][2016]);
  }
  arrayOfArrays.push(row2016);

  // build 2017
  let row2017 = ["2017"];
  for (let i = 0; i < sortedGames.length; i++) {
    row2017.push(sortedGames[i][2017]);
  }
  arrayOfArrays.push(row2017);

  // build last dummy row that's a duplicate of 2017 without the year title to extend chart
  let lastRow = [""];
  for (let i = 0; i < sortedGames.length; i++) {
    lastRow.push(sortedGames[i][2017]);
  }
  arrayOfArrays.push(lastRow);

  return arrayOfArrays;

};

module.exports = buildArray;