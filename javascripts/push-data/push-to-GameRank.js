"use strict"

function pushToGameRank(rankObject) {
  console.log("pushToGameRank function runs")
  let http = require('http')

  let jsonString = JSON.stringify(rankObject)
  console.log("stringified rankObject", jsonString)

  var request = new http.ClientRequest({
      hostname: process.env.firebaseAuthDomain,
      port: 80,
      path: "https://bggstats-2de27.firebaseio.com/GameRank.json",
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(body)
      }
  })

  request.end(jsonString)
}

module.exports = pushToGameRank