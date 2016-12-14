"use strict";
console.log("load top10 call");

// Requires
let $ = require("jquery"),
    database = require("../../database-settings/database-settings");

// function getTop10() {
//   return new Promise(function(resolve, reject) {
//     $.ajax ({
//       url: `https://scrappy-eb326.firebaseio.com/movies.json?orderBy="uid"&equalTo="${user} "`
//     }).done (function(top10data {
//       resolve(movieData);
//     });
//   });
// }

// database.getTop10()
//     .then(function(top10data){
//       var idArr = Object.keys(movieData);
//       idArr.forEach(function (key) {
//         movieData[key].movieId = key;
//         userMovies.Search.push(movieData[key]);
//       });
//     });