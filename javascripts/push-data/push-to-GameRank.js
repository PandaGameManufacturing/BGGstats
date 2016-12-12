"use strict"

function pushToGameRank(rankObject) {
  console.log("pushToGameRank function runs")
  let http = require('http')

  let jsonString = JSON.stringify(rankObject)
  console.log("stringified rankObject", jsonString)

  console.log("auth domain", process.env.firebaseAuthDomain)

  var request = new http.ClientRequest({
      hostname: 'https://bggstats-2de27.firebaseio.com',
      port: 80,
      path: "/GameRank.json",
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(jsonString)
      }
  })

  request.end(jsonString)
}

module.exports = pushToGameRank