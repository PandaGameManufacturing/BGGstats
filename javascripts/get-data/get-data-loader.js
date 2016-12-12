"use strict";

    // BGG API Calls
let details = require("./bgg-api/game-details-call"),
    hotness = require("./bgg-api/hotness-call"),

    // Crawler Data
    ranks = require("./crawler-data/game-ranks-call"),
    published = require("./crawler-data/games-published-call"),
    top10 = require("./crawler-data/top10-call"),

    // Board Game Prices API Calls
    price = require("./prices-api/lowest-price-call");

module.exports = {
  details,
  hotness,
  ranks,
  published,
  top10,
  price
};

/**********************\
|  2. Data             |
\**********************/

// let dataFunctions = [],
//     apiCalls = {
//       "hotness": "http://bgg-json.azurewebsites.net/hot" // Strathmeyer API
//     },
//     getData = {
//       "hotness": {
//       // {
//       // gameId :167791
//       // name: "Terraforming Mars"
//       // rank: 1
//       // thumbnail: "//cf.geekdo-images.com/images/pic2891964_t.jpg"
//       // yearPublished: 2016
//       // }, etc
//       }
//     };

// // getData.hotness returns an object of data, etc.

// let createDataFunctions = function (calls) { //pass it an object with an array of API calls to make

//   for (var prop in calls) {

//     dataFunctions[prop] = (function (prop) { // iife allows prop to not have closure in loop
//       return function () {
//         return new Promise((resolve, reject) => {
//           $.ajax({
//             url: calls[prop]
//           }).done(data => {
//             resolve(data);
//           }).fail(error => {
//             reject(error);
//           });
//         });
//       };
//     })(prop);

//   }

// };

// createDataFunctions(apiCalls);

// console.log("Data Functions:", dataFunctions);

// dataFunctions.hotness()
// .then( data => {
//   getData.hotness = JSON.parse(data).slice(0,5);
//   return getData;
//   console.log("getData.hotness:", getData.hotness);
// }, error => { console.log("dataFunctions.hotness error", error); })
// .then( data => {

//     let tempApiCalls = {};

//     for (let i = 0; i < getData.hotness.length; i++) {
//       let url = `http://bgg-api.herokuapp.com/api/v1/thing?id=${getData.hotness[i].gameId}`;
//       let functionName = `_${getData.hotness[i].gameId}`;
//       tempApiCalls[functionName] = url;
//     }
//     console.log("tempApiCalls:", tempApiCalls);

//     createDataFunctions(tempApiCalls);
//     console.log("dataFunctions:", dataFunctions);

//     let thing = dataFunctions._167791();
//     console.log("thing:", thing);

//     // Retrieve data for item calls and push to the getData object
//     for (prop in tempApiCalls) {
//         // console.log("obj." + prop + " = " + obj[prop]);
//       let i = prop;
//       dataFunctions[i]()
//         .then( data => {
//           getData[i] = data.items.item[0];
//         }, error => { console.log("Error getting items for Hotness List", error); });
//     }

//     createChart("The Hotness", getData.hotness, "shelf-12", data);


//     console.log("getData:", getData);




// }, error => { console.log("dataFunctions.hotness error", error); });


// console.log("hi");