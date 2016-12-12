"use strict";

function pushToGameRank(rankObject) {
  console.log("pushToGameRank function runs");
  console.log("Object in function:", rankObject);

  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('POST', 'https://bggstats-2de27.firebaseio.com/GameRank.json');
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    req.onload = function() {
      console.log("on load runs");
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      console.log("on error runs");
      reject(Error("Network Error"));
    };

    // send request
    xmlhttp.send(JSON.stringify(rankObject));
  });
}

module.exports = pushToGameRank;