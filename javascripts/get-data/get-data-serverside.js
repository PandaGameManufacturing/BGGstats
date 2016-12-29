"use strict";

var Client = require('node-rest-client').Client;

let getData = url => {
  return new Promise(function(resolve, reject) {

    let client = new Client();

    // wait for the data longer
    let args = {
      requesConfig: { timeout: 1000 },
      responseConfig: { timeout: 2000 }
    };

    client.get(url, args, function (data, response) {
      resolve(data);
    });
  });
};

module.exports = getData;