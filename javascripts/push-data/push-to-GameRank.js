"use strict";
let http = require('http');

function pushToGameRank(rankObject) {

  let postData = JSON.stringify(rankObject);
  console.log("data as JSON:", postData);

  let options = {
    hostname: 'bggstats-2de27.firebaseapp.com',
    path: '/GameRank.json',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  let req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
      console.log('No more data in response.');
    });
  });

  req.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
  });

  // write data to request body
  req.write(postData);
  req.end();

}

module.exports = pushToGameRank;