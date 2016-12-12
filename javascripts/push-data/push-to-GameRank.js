"use strict";

function pushToGameRank(rankObject) {
  console.log("pushToGameRank function runs");
  console.log("Object in function:", rankObject);

  var req = new XMLHttpRequest();
  req.open('POST', 'https://bggstats-2de27.firebaseio.com/GameRank.json');
  req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  // send request
  req.send(JSON.stringify(rankObject));
  console.log("request should have been sent on the line above");
}

module.exports = pushToGameRank;