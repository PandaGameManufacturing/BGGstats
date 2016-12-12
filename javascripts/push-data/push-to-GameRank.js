"use strict";

function pushToGameRank(rankObject) {

  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('POST', 'https://bggstats-2de27.firebaseio.com/GameRank.json');
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(rankObject));
  }).done(function(data){
      console.log("data sent:", data);
    });
}

module.exports = pushToGameRank;