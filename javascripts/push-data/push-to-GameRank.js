"use strict";
let $ = require("../../node_modules/jquery/src/jquery.js");

function pushToGameRank(rankObject) {
  return new Promise(function(resolve, reject) {
    $.ajax ({
      url: 'https://bggstats-2de27.firebaseio.com/GameRank.json',
      type: 'POST',
      data: JSON.stringify(rankObject),
      dataType: 'json'
    }).done(function(data){
      console.log("data sent:", data);
    });
  });
}

module.exports = pushToGameRank;