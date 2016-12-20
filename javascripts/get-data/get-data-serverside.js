"use strict";

var Client = require('node-rest-client').Client;

let getData = url => {
  return new Promise(function(resolve, reject) {
    let client = new Client();
    client.get(url, function (data, response) {
      // parsed response body as js object
      resolve(data);
    });
  });
};

module.exports = getData;