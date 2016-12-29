"use strict";

// var KeepAliveAgent = require('agentkeepalive').HttpsAgent;
// var Client = require('node-rest-client').Client;

// let getData = url => {
//   return new Promise(function(resolve, reject) {

//     let client = new Client();

//     // wait for the data longer
//     let args = {
//       requesConfig: { timeout: 3000 },
//       responseConfig: { timeout: 3000 }
//     };

//     client.get(url, args, function (data, response) {
//       resolve(data);
//     });
//   });
// };

// module.exports = getData;

let https = require('https');

let getData = (host, path) => {
  return new Promise(function(resolve, reject) {
    /**
     * HOW TO Make an HTTP Call - GET
     */
    // options for GET
    var optionsget = {
        host : host, // here only the domain name
        // (no http/https !)
        port : 443,
        path : path, // the rest of the url with parameters if needed
        method : 'GET' // do GET
    };

    console.info('Options prepared:');
    console.info(optionsget);
    console.info('Do the GET call');

    // do the GET request
    var reqGet = https.request(optionsget, function(res) {
        console.log("statusCode: ", res.statusCode);
        // uncomment it for header details
    //  console.log("headers: ", res.headers);


        res.on('data', function(d) {
            console.info('GET result:\n');
            process.stdout.write(d);
            console.info('\n\nCall completed');
        });

    });

    reqGet.end();
    reqGet.on('error', function(e) {
        console.error(e);
    });

  });
};


module.exports = getData;