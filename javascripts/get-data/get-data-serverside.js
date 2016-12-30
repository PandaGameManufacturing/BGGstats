"use strict";

// requires
let https = require('https');
let fs = require('fs');

let getData = (host, path) => {
  return new Promise(function(resolve, reject) {
    /**
     * HOW TO Make an HTTP Call - GET
     */
    // options for GET
    var optionsget = {
        host : host, // here only the domain name (no http/https)
        port : 443,
        path : path, // the rest of the url with parameters if needed
        method : 'GET' // do GET
    };

    // console.info('Options prepared:');
    // console.info(optionsget);
    // console.info('Do the GET call');

    // do the GET request
    var reqGet = https.request(optionsget, function(res) {
        console.log(`:: ✓ Status Code ${res.statusCode}: ${optionsget.path} `);
        // uncomment it for header details
    //  console.log("headers: ", res.headers);


        res.on('data', data => {
            // console.info('GET result:\n');
            // process.stdout.write(data);
            // fs.readFile('/etc/passwd', 'utf-8', resolve(data));


            // console.log("data in get data promise:", data);
            let parsed = JSON.parse(data);
            resolve(parsed);
            // console.info('\n\nCall completed');
        });
    });

    reqGet.end();
    reqGet.on('error', function(e) {
        console.error(e);
    });

  });
};


module.exports = getData;