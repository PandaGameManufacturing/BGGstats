"use strict";
let http = require('https');

function pushData(dataObject, collectionPath, RESTmethod) {
  let postData = JSON.stringify(dataObject);

  let options = {
    hostname: process.env.firebasePostDomain,
    path: collectionPath,
    method: RESTmethod,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  let req = http.request(options, (res) => {
    // console.log(`::         game ${dataObject.rank}: STATUS ${res.statusCode}`);
    // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      // console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
      // console.log('No more data in response.');
    });
  });

  req.on('error', (e) => {
    console.log(`:: ERROR: Pushing up game ${dataObject.rank} failed:     ${e.message}`);
  });

  // write data to request body
  req.write(postData);
  req.end();
}

module.exports = pushData;